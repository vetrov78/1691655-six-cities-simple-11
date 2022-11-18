import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Offers } from '../types/offer-type';
import { changeAuthorizationStatus, changeCity, changeSortType, loadOffers, setError, setOffersLoadingStatus, setUserEmail } from './actions';

type InitialState = {
  city: string;
  offers: Offers;
  sortType: string;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userEmail: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [] as Offers,
  sortType: 'Popular',
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.sortType = 'Popular';
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.type;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});
