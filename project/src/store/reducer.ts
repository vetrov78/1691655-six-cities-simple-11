import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offer-type';
import { changeAuthorizationStatus, changeCity, changeSortType, loadOffers, setOffersLoadingStatus } from './actions';

const initialState = {
  city: 'Paris',
  offers: [] as Offers,
  sortType: 'Popular',
  isOffersLoading: false,
  authorizationStatus: false,
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
    });

});
