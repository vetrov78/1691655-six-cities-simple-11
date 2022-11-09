import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, refreshMap } from './actions';

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city.name === 'Paris'),
  needMapRefresh: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offers = offers.filter((offer) => offer.city.name === action.payload.city);
      state.needMapRefresh = true;
    })

    .addCase(refreshMap, (state) => {
      state.needMapRefresh = false;
    });
});
