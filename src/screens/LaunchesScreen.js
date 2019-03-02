import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import _ from 'lodash';
import NavigationService from '../services/NavigationService';

export default class LaunchesScreen extends Component {

  constructor(props) {
    super(props);
    const { navigation } = props;
    const launches = navigation.getParam('data', []);
    this.state = { launches: _.groupBy(launches, 'launch_year') };
  }

  handlePress = (year) => {
    NavigationService.navigate('LaunchesInYear', 
      { launches: this.state.launches[year] });
  }

  render() {

    return (
      <FlatList
        data={ Object.keys(this.state.launches) }
        keyExtractor={ (item, index) => item }
        renderItem={ ({ item }) => (
          <ListItem 
            title={ item }
            chevron={ true }        
            bottomDivider={ true }  
            badge={{
              status: 'primary',
              value: this.state.launches[item].length,
              textStyle:{ fontSize: 12 },
              badgeStyle:{ width: 25, height: 25, borderRadius: 50 }
            }}        
            onPress={ () => this.handlePress(item) }
          />
        )}
      />
    );
  }
}
