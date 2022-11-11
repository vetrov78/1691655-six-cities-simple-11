import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { offers } from '../../mocks/offers';
import LayoutScreen from '../../pages/layout-sreen/layout-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';

type AppScreenProps = {
  offersNumber: number;
}

function App({offersNumber}: AppScreenProps): JSX.Element {
  const isLoginPage = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<LayoutScreen isLoginPage={isLoginPage}/>}
        >
          <Route
            index
            element={<MainScreen offersNumber={offersNumber} offers={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Offer}
            element={<PropertyScreen offers={offers}/>}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
