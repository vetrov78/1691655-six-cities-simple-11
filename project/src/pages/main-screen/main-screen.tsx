import { useState } from 'react';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer-type';
import OffersListScreen from '../../components/offers-list/offers-list-screen';
import { TabListComponent } from '../../components/tabs-list/tabs-list';
import { useAppSelector } from '../../hooks';

// type MainScreenProps = {
//   offers: Offer[];
// }

function MainScreen (): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const currentOffers = useAppSelector((state) => state.offers);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <TabListComponent />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{useAppSelector((state) => state.offers.length)} places to stay in { useAppSelector((state) => state.city) }</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--closed">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>

            <OffersListScreen className='cities__places-list tabs__content' offers={currentOffers} setActiveOffer={setActiveOffer} />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map">

              <Map offers={currentOffers} city={currentOffers[0].city.location} selectedPoint={activeOffer}></Map>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
