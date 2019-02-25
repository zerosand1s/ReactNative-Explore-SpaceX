import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class MissionsScreen extends Component {
  render() {

    const { navigation } = this.props;
    const missions = navigation.getParam('data', []);

    return (
      <FlatList
        data={ missions }
        keyExtractor={ (item, index) =>  item.mission_id }
        renderItem={ ({ item }) => (
          <ListItem 
            title={ item.mission_name }
            subtitle={
              <View>
                <Text style={ styles.missionManufacture }>
                  Manufactured By: { item.manufacturers.length > 1  ? 
                    item.manufacturers[0] + ' and ' + (item.manufacturers.length - 1) + ' more' :
                    item.manufacturers[0] }
                </Text>
                <Text style={ styles.missionPayload }>Total Payloads: { item.payload_ids.length }</Text>
              </View>
            }
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
