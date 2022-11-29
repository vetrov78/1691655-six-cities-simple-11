import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CITIES_WITH_COORDINATES } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCity } from '../../store/app-process/selectors';
import { CityType } from '../../types/offer-type';

function TabListComponent(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES_WITH_COORDINATES.map((city: CityType) => (
          <li key={city.name} className="locations__item">
            <Link
              className={`locations__item-link tabs__item ${ city.name === store.getState().city ? 'tabs__item--active' : '' }`}
              to="#"
              onClick={
                (evt) => {
                  dispatch(changeCity({ city: (evt.target as HTMLElement).innerText }));
                }
              }
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default memo(TabListComponent);
