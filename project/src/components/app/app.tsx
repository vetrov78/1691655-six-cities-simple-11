import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Route path='/' element={<LayoutScreen isLoginPage={isLoginPage}/>}>
          <Route index element={<MainScreen offersNumber={offersNumber}/>} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/offer:id' element={<PropertyScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
