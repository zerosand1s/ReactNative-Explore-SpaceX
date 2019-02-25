import React, {Component} from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import DataService from '../services/DataService';
import NavigationService from '../services/NavigationService';

const SpaceXData = [
  { id: '1', title: 'missions', screen: 'Missions'},
  { id: '2', title: 'rockets', screen: 'Rockets'}
];

export default class HomeScreen extends Component {

  handlePress = (item) => {
    DataService.getDataForField(item.title)
      .then((details) => {
        NavigationService.navigate(item.screen, { data: details })
      });
  }

  render() {
    return (
      <FlatList 
        data={ SpaceXData }
        keyExtractor={ (item) => item.id }
        renderItem={ ({ item }) => (
          <ListItem 
            Component={ TouchableHighlight }
            title={ item.title }
            titleStyle={{ 
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
            bottomDivider={ true }
            chevron={ true }
            onPress={ () => this.handlePress(item) }        
          />
        )}
      />

    );
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    padding: '5%'
  }
});