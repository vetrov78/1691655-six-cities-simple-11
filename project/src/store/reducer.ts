import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Offer, NormalizedOffers } from '../types/offer-type';
import { changeAuthorizationStatus, changeCity, changeSortType, loadAllOffers, loadOffer, setError, setOffersLoadingStatus, setUserEmail } from './actions';

type InitialState = {
  city: string;
  offers: NormalizedOffers;
  sortType: string;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userEmail: string | null;
  currentOffer: Offer;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: {},
  sortType: 'Popular',
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: null,
  currentOffer: {} as Offer,
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
      // const filteredOffers = Object.values(normalizedOffers)
      //   .filter((value: Offer) => value.city.name === 'Paris');

      // // eslint-disable-next-line no-console
      // console.log(filteredOffers);
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
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    });
});
