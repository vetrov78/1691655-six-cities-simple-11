import { useState } from 'react';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer-type';
import OffersListScreen from '../../components/offers-list/offers-list';
import TabListComponent from '../../components/tabs-list/tabs-list';
import { useAppSelector } from '../../hooks';
import SortingList from '../../components/sorting-list/sorting-list';
import { CITIES_WITH_COORDINATES } from '../../consts';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getDataLoadingStatus } from '../../store/app-data/selectors';
import { getCity, getProcessedOffers } from '../../store/app-process/selectors';

function MainScreen (): JSX.Element {
  //Добавляет стили для отсутствия прокрутки у блока с карточками, и вся карта видна на экране
  const root = document.getElementById('root') as HTMLElement;
  root.style.cssText = 'display: flex; flex-direction: column; overflow-y: hidden; height: inherit;';

  // необходим для изменения цвета маркера на карте при наведении на соответствующее предложение
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  let mainClassName = 'page__main page__main--index';
  const currentOffers = useAppSelector(getProcessedOffers);
  if (currentOffers.length === 0) { mainClassName += ' page__main--index-empty'; }

  const currentCityName = useAppSelector(getCity);
  const offersNumber = currentOffers.length;
  const currentCity = CITIES_WITH_COORDINATES.find((city) => city.name === currentCityName);

  if (useAppSelector(getDataLoadingStatus))
  {
    return <LoadingScreen />;
  }
  // Пока не знаю как по другому исключить undefined из результата find..
  if (!currentCity)
  {
    return <NotFoundScreen />;
  }

  return (
    <main className={mainClassName}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <TabListComponent />
        </section>
      </div>
      {
        (currentOffers.length === 0) ?
          <div className ="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section">
              </div>
            </div>
          </div> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{ `${offersNumber} places to stay in ${currentCityName}` }</b>

                <SortingList />

                <OffersListScreen
                  className='cities__places-list tabs__content'
                  offers={currentOffers}
                  setActiveOffer={setActiveOffer}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">

                  <Map offers={currentOffers} city={{...currentCity.location, zoom: 13}} selectedPoint={activeOffer}></Map>

                </section>
              </div>
            </div>
          </div>
      }
    </main>
  );
}

export default MainScreen;
