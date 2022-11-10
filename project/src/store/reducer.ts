import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer-type';
import { changeCity, changeSortType, openCloseSorting } from './actions';

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city.name === 'Paris'),
  isSortingOpen: false,
  sortType: 'Popular',
};

const sortPriceStartHigh = (offer1: Offer, offer2: Offer) => {
  const {price: priceOne} = offer1;
  const {price: priceTwo} = offer2;

  return (priceOne > priceTwo) ? 1 : -1;
};

const sortedOffers = (currentOffers: Offer[], currentCity: string, currentSortedType: string, sortingType: string) => {
  if (sortingType === currentSortedType) {
    return offers;
  } else {
    switch(sortingType) {
      case 'Popular':
        // eslint-disable-next-line no-console
        console.log(currentCity);

        return offers.filter((offer) => offer.city.name === currentCity);
      case 'Price: low to high':
        return currentOffers.sort(sortPriceStartHigh);
    }
  }
  return currentOffers;
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openCloseSorting, (state) => {
      state.isSortingOpen = !state.isSortingOpen;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
      state.offers = offers.filter((offer) => offer.city.name === action.payload.city);
      state.sortType = 'Popular';
    })
    .addCase(changeSortType, (state, action) => {
      state.isSortingOpen = false;
      state.offers = sortedOffers(state.offers, state.city, state.sortType, action.payload.type);
      state.sortType = action.payload.type;
    });

});
