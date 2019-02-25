import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

import TileList from '../components/TileList';

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={ styles.homeScreenView }>
        <TileList></TileList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    padding: '5%'
  }
});
