import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Offer, NormalizedOffers } from '../types/offer-type';
import { Review } from '../types/review-type';
import { changeAuthorizationStatus, changeCity, changeSortType, loadAllOffers, loadNearOffers, loadReviews, setError, setOffersLoadingStatus, setUserEmail } from './actions';

type InitialState = {
  city: string;
  offers: NormalizedOffers;
  nearOffers: Offer[];
  sortType: string;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userEmail: string | null;
  reviews: Review[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: {},
  nearOffers: [],
  sortType: 'Popular',
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: null,
  reviews: [],
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
