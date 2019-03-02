import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import _ from 'lodash';

export default class LaunchesScreen extends Component {
  render() {

    const { navigation } = this.props;
    const launches = navigation.getParam('data', []);
    const launchYears = [];
    _.forEach(launches, l => {
      if (!launchYears.includes(l.launch_year)) {
        launchYears.push(l.launch_year);
      }
    });

    return (
      <FlatList
        data={ launchYears }
        keyExtractor={ (item, index) => item }
        renderItem={ ({ item }) => (
          <ListItem 
            title={ item }          
            bottomDivider={ true }
          />
        )}
      />
    );
  }
}
