import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offer-type';
import { changeCity, changeSortType, loadOffers, setOffersLoadingStatus } from './actions';

const initialState = {
  city: 'Paris',
  offers: [] as Offers,
  isSortingOpen: false,
  sortType: 'Popular',
  isOffersLoading: false,
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
      state.offers = action.payload.filter((offer) => offer.city.name === state.city);

      // eslint-disable-next-line no-console
      console.log(`reducer: state offers lenght is ${state.offers.length}`);
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      // eslint-disable-next-line no-console
      console.log(`reducer: loading status is ${action.payload.toString()}`);

      state.isOffersLoading = action.payload;
    });

});
