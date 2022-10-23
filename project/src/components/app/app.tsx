import MainScreen from '../../pages/main-screen/main-screen';
// import LoginScreen from '../../pages/login-screen/login-screen';
// import PropertyScreen from '../../pages/property-screen/property-screen';

type AppScreenProps = {
  offersNumber: number;
}

function App({offersNumber}: AppScreenProps): JSX.Element {
  return (
    <MainScreen offersNumber={offersNumber}/>
    // <LoginScreen />
    // <PropertyScreen />
  );
}

export default App;
