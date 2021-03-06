import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import _ from 'lodash';

import NavigationService from '../services/NavigationService';
import DataService from '../services/DataService';

import globalStyles from "../styles";

export default class LaunchesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { launches: [], loading: true };
  }

  componentDidMount() {
    DataService.getDataForField('launches')
      .then((details) => {
        this.setState({ launches: _.groupBy(details, 'launch_year'), loading: false });
      });
  }

  handlePress = (year) => {
    NavigationService.navigate('LaunchesInYear', { launches: this.state.launches[year] });
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
