import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import LayoutScreen from '../../pages/layout-sreen/layout-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';


function App(): JSX.Element {
  const authotizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersLoading);

  if (isOffersDataLoading && authotizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Root}
          element={<LayoutScreen />}
        >
          <Route
            index
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Offer}
            element={<PropertyScreen />}
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
