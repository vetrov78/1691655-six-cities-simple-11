import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offer-type';
import { changeAuthorizationStatus, loadOffers, setError, setOffersLoadingStatus, setUserEmail } from './actions';
import { ApiRoutes, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { ResponseUserData } from '../types/response-user-data';
import { store } from '.';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));

    const {data} = await api.get<Offers>(ApiRoutes.Offers);

    dispatch(loadOffers(data));
    dispatch(setOffersLoadingStatus(false));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'user/checkAuth',
  async (_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ResponseUserData>(ApiRoutes.Login);
      dispatch(setUserEmail(data.email));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
      // eslint-disable-next-line no-console
      console.log(`api-action: ${data.email}`);
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRoutes.Login, {email, password});

    saveToken(token);
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserEmail(email));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'user/logout',
  async (_args, {dispatch, extra: api}) => {
    await api.delete(ApiRoutes.Logout);
    dropToken();
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
