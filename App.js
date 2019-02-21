import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationService from './src/services/NavigationService';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
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