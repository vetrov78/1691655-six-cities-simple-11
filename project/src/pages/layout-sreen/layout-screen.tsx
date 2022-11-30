import { Link, Outlet } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { dropToken } from '../../services/token';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserEmail } from '../../store/user-process/selectors';

function LayoutScreen (): JSX.Element {
  const isAuth: boolean = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;
  const userEmail = useAppSelector(getUserEmail);

  const dispatch = useAppDispatch();
  const onSignOut = () => {
    dispatch(logoutAction());
    dropToken();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to={AppRoute.Root}
                className="header__logo-link header__logo-link--active"
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              {
                isAuth
                  ?
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <div className="header__nav-profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">{userEmail}</span>
                      </div>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={onSignOut}
                        to={AppRoute.Root}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </ul>
                  :
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to="/login">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  </ul>
              }
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default LayoutScreen;

