import { useState } from 'react';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer-type';
import OffersListScreen from '../../components/offers-list/offers-list-screen';
import { TabListComponent } from '../../components/tabs-list/tabs-list';
import { useAppSelector } from '../../hooks';
import SortingList from '../../components/sorting-list/sorting-list';

function MainScreen (): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const [isSortingOpen, setSortingOpenStatus] = useState<boolean>(false);

  const currentOffers = useAppSelector((state) => state.offers);

  //Добавляет стили для отсутствия прокрутки у блока с карточками, и вся карта видна на экране
  const root = document.getElementById('root') as HTMLElement;
  root.style.cssText = 'display: flex; flex-direction: column; overflow-y: hidden';

  const offersNumber = useAppSelector((state) => state.offers.length);
  const currentCity = useAppSelector((state) => state.city);

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
            <b className="places__found">{ offersNumber } places to stay in { currentCity }</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span
                className="places__sorting-type"
                tabIndex={0}
                onClick={
                  () => { setSortingOpenStatus( !isSortingOpen ); }
                }
              >
                {
                  useAppSelector((state) => state.sortType)
                }
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>

              <SortingList
                isSortingOpen={isSortingOpen}
                setSortingOpenStatus={setSortingOpenStatus}
              />

            </form>

            <OffersListScreen
              className='cities__places-list tabs__content'
              offers={currentOffers} setActiveOffer={setActiveOffer}
            />

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
