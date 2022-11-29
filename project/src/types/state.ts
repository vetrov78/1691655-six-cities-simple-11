import { store } from '../store';
import { NormalizedOffers, Offer } from './offer-type';
import { Review } from './review-type';

export type AppData = {
  offers: NormalizedOffers;
  nearOffers: Offer[];
  reviews: Review[];
  isOffersLoading: boolean;
  hasError: boolean;
}

export type AppProcess = {
  city: string;
  sortType: string;
}

export type State = ReturnType<typeof store.getState >;

export type AppDispatch = typeof store.dispatch;
