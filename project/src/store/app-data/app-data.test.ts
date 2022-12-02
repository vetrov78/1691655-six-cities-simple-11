import { NormalizedOffers } from '../../types/offer-type';
import { makeFakeOffer } from '../../utils/mock';
import { fetchAllOffersAction } from '../api-actions';
import { appData } from './app-data';

const offers = new Array(4).fill(makeFakeOffer());

describe('Reducer: app-data', () => {
  it('should update offers with loaded offers', () => {
    const state = {offers: {} as NormalizedOffers, isOffersLoading: false, hasError: false, nearOffers: [], reviews: [],}
    expect(appData.reducer(state, {type: fetchAllOffersAction.fulfilled.type, payload: offers}))
  })
})
