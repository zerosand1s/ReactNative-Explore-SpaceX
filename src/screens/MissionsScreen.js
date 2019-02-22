import React, {Component} from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

export default class MissionsScreen extends Component {
  render() {

    const { navigation } = this.props;
    const missions = navigation.getParam('data', []);

    _renderItem = ({ item }) => (
      <TouchableHighlight>
        <View>
          <Text>{ item.mission_name }</Text>
        </View>
      </TouchableHighlight>
    );

    return (
      <View style={ styles.container }>      
        <FlatList 
          data={ missions }
          keyExtractor={ (item, index) =>  item.mission_id }
          renderItem={ ({ item }) => (
            <TouchableHighlight>
              <View style={ styles.missionView }>
                <Text style={ styles.missionName }>{ item.mission_name }</Text>
                <Text style={ styles.missionManufacture }>
                  Manufactured By: { item.manufacturers.length > 1  ? 
                    item.manufacturers[0] + ' and ' + (item.manufacturers.length - 1) + ' more' :
                    item.manufacturers[0] }
                </Text>
                <Text style={ styles.missionPayload }>Total Payloads: { item.payload_ids.length }</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  missionView: {
    flex: 1,
    padding: '5%',
    borderStyle: 'solid',
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    backgroundColor: 'yellow'
  },
  missionName: {
    fontWeight: 'bold',
    fontSize: 15
  },
  missionManufacture: {
    fontSize: 12,
    marginTop: 3
  },
  missionPayload: {
    fontSize: 12,
    marginTop: 3
  }
});
