import React, {Component} from 'react';
import { View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import DataService from '../services/DataService';
import NavigationService from '../services/NavigationService';

const SpaceXData = [
  { id: '1', title: 'missions', screen: 'Missions'},
  { id: '2', title: 'rockets', screen: 'Rockets'},
  { id: '3', title: 'launches', screen: 'Launches'}
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
            chevron={{
              reverse: true,
              raised: true,
              color: 'gray'
            }}
            onPress={ () => this.handlePress(item) }
            containerStyle={ styles.listItem }      
          />
        )}
        style={{ padding: 10 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 100,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    marginBottom: 10  
  }
});