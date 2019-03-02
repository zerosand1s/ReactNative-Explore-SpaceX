import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class RocketsScreen extends Component {
  render() {

    const { navigation } = this.props;
    const rockets = navigation.getParam('data', []);

    return (
      <FlatList
        data={ rockets }
        keyExtractor={ (item, index) =>  item.rocket_id }
        renderItem={ ({ item }) => (
          <ListItem 
            title={ item.rocket_name }
            subtitle={
              <View>
                <Text style={ styles.missionManufacture }>
                  Company: { item.company }
                </Text>
                {/* <Text style={ styles.missionPayload }>Total Payloads: { item.payload_ids.length }</Text> */}
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
