import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class RocketsScreen extends Component {
  render() {

    const { navigation } = this.props;
    const launches = navigation.getParam('launches', []);

    return (
      <FlatList
        data={ launches }
        keyExtractor={ (item, index) =>  item.flight_number.toString() }
        renderItem={ ({ item }) => (
          <ListItem 
            title={ item.mission_name }          
            bottomDivider={ true }
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  missionManufacture: {
    fontSize: 12,
    marginTop: 3
  },
  missionPayload: {
    fontSize: 12,
    marginTop: 3
  }
});
