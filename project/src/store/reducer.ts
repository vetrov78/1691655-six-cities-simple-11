import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Offer, NormalizedOffers } from '../types/offer-type';
import { Review } from '../types/review-type';
import { changeAuthorizationStatus, changeCity, changeSortType, loadAllOffers, loadNearOffers, loadReviews, setError, setOffersLoadingStatus, setUserEmail } from './actions';

type InitialState = {

  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;

}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(loadAllOffers, (state, action) => {
      state.offers = action.payload.reduce((result, element) => (
        {
          ...result,
          [element.id]: element
        }), {});
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
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
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
