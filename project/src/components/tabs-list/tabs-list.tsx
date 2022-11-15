import { Link } from 'react-router-dom';
import { CITIES } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { store } from '../../store';
import { changeCity } from '../../store/actions';

export function TabListComponent(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city) => (
          <li key={city} className="locations__item">
            <Link
              className={`locations__item-link tabs__item ${ city === store.getState().city ? 'tabs__item--active' : '' }`}
              to="#"
              onClick={
                (evt) => {
                  dispatch(changeCity({ city: (evt.target as HTMLElement).innerText }))
                }
              }
            >
              <span>{city}</span>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}
