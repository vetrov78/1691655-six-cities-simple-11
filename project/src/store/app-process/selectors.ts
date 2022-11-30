import { NameSpace, SortingType } from '../../consts';
import { Offer } from '../../types/offer-type';
import { State } from '../../types/state';
import { getSortingFunc } from '../../utils';

export const getCity = (state: State): string => state[NameSpace.Process].city;

export const getSortType = (state: State): string => state[NameSpace.Process].sortType;

export const getProcessedOffers = (state: State): Offer[] => state[NameSpace.Process].sortType === SortingType.Popular
  ? Object.values(state[NameSpace.Data].offers)
    .filter((offer) => offer.city.name === state[NameSpace.Process].city)
  : Object.values(state[NameSpace.Data].offers)
    .filter((offer) => offer.city.name === state[NameSpace.Process].city)
    .sort(getSortingFunc(state[NameSpace.Process].sortType));
