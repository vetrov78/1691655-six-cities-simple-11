import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer-type';
import { changeAuthorizationStatus, loadAllOffers, loadNearOffers, loadReviews, setError, setOffersLoadingStatus, setUserEmail } from './actions';
import { ApiRoutes, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../consts';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { ResponseUserData } from '../types/response-user-data';
import { store } from '.';
import { Review } from '../types/review-type';

export const fetchAllOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/loadAllOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));

    const {data} = await api.get<Offer[]>(ApiRoutes.Offers);

    dispatch(loadAllOffers(data));
    dispatch(setOffersLoadingStatus(false));
  }
);

export const fetchNearOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/loadNearOffers',
  async (id: number, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${ApiRoutes.Offers}/${id}/nearby`);

      dispatch(loadNearOffers(data));
    } catch {
      dispatch(loadNearOffers([] as Offer[]));
    }
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/loadReviews',
  async (id:number, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${ApiRoutes.Reviews}/${id}`);

    dispatch(loadReviews(data));
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

export const postReviewAction = createAsyncThunk<void, {
  hotelId: number;
  comment: string;
  rating: number;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'reviews/postReview',
  async ({hotelId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(`${ApiRoutes.Reviews}/${hotelId}`, {comment, rating});

    // eslint-disable-next-line no-console
    console.log(data);
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
