import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts';
import { Offer } from '../types/offer-type';
import { Review } from '../types/review-type';

export const changeCity = createAction<{city: string}>('offers/changeCity');

export const changeSortType = createAction<{type: string}>('offers/sortByType');

export const loadAllOffers = createAction<Offer[]>('data/loadAllOffers');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersLoadingStatus');

export const changeAuthorizationStatus = createAction<AuthorizationStatus>('user/authorizationStatus');

export const setError = createAction<string | null>('data/setError');

export const setUserEmail = createAction<string | null>('user/setEmail');

export const loadNearOffers = createAction<Offer[]>('data/loadNearOffers');

export const loadReviews = createAction<Review[]>('data/loadReviews');
