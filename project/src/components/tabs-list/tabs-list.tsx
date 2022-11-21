import { Link } from 'react-router-dom';
import { CITIES } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';
import { changeCity } from '../../store/actions';
import { CityType } from '../../types/offer-type';

export function TabListComponent(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city: CityType) => (
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
