import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, changeSortType } from './actions';

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city.name === 'Paris'),
  sortType: 'Popular',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offers = offers.filter((offer) => offer.city.name === action.payload.city);
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.type;
    });

});
