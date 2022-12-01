import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { AppData } from '../../types/state';
import { fetchAllOffersAction, fetchNearOffersAction, fetchReviewsAction, postReviewAction } from '../api-actions';

const initialState: AppData = {
  offers: {},
  nearOffers: [],
  reviews: [],
  isOffersLoading: false,
  hasError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchAllOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload.reduce((result, element) => (
          {
            ...result,
            [element.id]: element
          }
        ), {});
        state.isOffersLoading = false;
      })
      .addCase(fetchAllOffersAction.rejected, ((state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      }))
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
