import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutScreen from '../../pages/layout-sreen/layout-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  offersNumber: number;
}

function App({offersNumber}: AppScreenProps): JSX.Element {
  const isLoginPage = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutScreen isLoginPage={isLoginPage}/>}>
          <Route index element={<MainScreen offersNumber={offersNumber}/>} />
          <Route path='/login' element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
