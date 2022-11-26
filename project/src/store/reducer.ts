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
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    // .addCase(setError, (state, action) => {
    //   state.error = action.payload;
    // })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});
