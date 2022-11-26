import { NameSpace } from '../../consts';
import { NormalizedOffers, Offer } from '../../types/offer-type';
import { State } from '../../types/state';

export const getOffers = (state: State): NormalizedOffers => state[NameSpace.Data].offers;
export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Data].nearOffers;
