import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


//My Imports
import SignInScreen from './src/screens/signInScreen';
import HomeScreen from './src/screens/homeScreen';
import OtherScreen from './src/screens/otherScreen';
import AuthLoadingScreen from './src/screens/authLoadingScreen';
import DemoScreen  from './src/screens/demoScreen';
import FirmaScreen from './src/components/firmaHome';
import AcentaScreen from './src/components/acentaHome';
import SatıcıScreen from './src/components/satıcıHome';
import TourCreationScreen from './src/components/firmaHomeMenu/createTour';
import TourPricingScreen from './src/components/firmaHomeMenu/priceTour';
import ReportsScreen from './src/components/firmaHomeMenu/reports';
import DailyResScreen from './src/components/firmaHomeMenu/dailyReservs';
import TwoDatesResScreen from './src/components/firmaHomeMenu/twoDatesRez';
import AddResResScreen from './src/components/firmaHomeMenu/addRes';
import AgenciesScreen from './src/components/firmaHomeMenu/firmAgencies';
import SettingsScreen from './src/components/firmaHomeMenu/settings';
import PopScreen from './src/components/commons/popupScreen';
import AddPriceToTourScreen from './src/components/firmaHomeMenu/addPriceToTour';

//import connect
import { connect } from 'react-redux';

//import action creators
import { addTour, deleteTour } from './src/actions/actions';

const AppStack = createStackNavigator({ 
  Home: HomeScreen,
  Other: OtherScreen,
  Demo: DemoScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

//my components
const firmaStack = createStackNavigator( {
  firma: FirmaScreen,
  TurOlustur:TourCreationScreen,
  TurReporlar: ReportsScreen,
  TurFiyatlandır: TourPricingScreen,
  TurGünlükRez: DailyResScreen,
  TurİkiTarihRez: TwoDatesResScreen,
  TurRezEkle:AddResResScreen,
  TurAcentalar:AgenciesScreen,
  TurAyarlar:SettingsScreen,
  Popup: PopScreen,
  TurFiyatEkle:AddPriceToTourScreen
  
} );
const acentaStack = createStackNavigator( {Acenta: AcentaScreen} );
const satıcıStack = createStackNavigator( {Satıcı: SatıcıScreen} );
//const popupStack =  createStackNavigator( {Popup: PopScreen} );

const MyApp =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    Firma: firmaStack,
    Acenta:acentaStack,
    Satıcı:satıcıStack,
    
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const mapStateToProps = ( state ) => {
  return {
    tourname:state.tourReducer.name
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addTheTour: ( name ) => {
      dispatch( addTour( name ) )
    },

    deleteThetour: () => {
      dispatch( deleteTour() )
    }
  }
}



export default connect( mapStateToProps, mapDispatchToProps )(MyApp);
