import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationService from './src/services/NavigationService';

import HomeScreen from './src/screens/HomeScreen';
import MissionsScreen from './src/screens/MissionsScreen';
import RocketsScreen from './src/screens/RocketsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Missions: MissionsScreen,
    Rockets: RocketsScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer 
        ref={ navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        } }
      />
    );
  }
}