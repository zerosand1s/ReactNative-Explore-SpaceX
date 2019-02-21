import React, {Component} from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import TileList from '../components/TileList';

export default class HomeScreen extends Component {

  handlePress = (text) => {
    Alert.alert(text);
  }

  render() {
    return (
      <View style={ styles.homeScreenView }>
        <TileList onPress={ (text) => this.handlePress(text) }></TileList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
    flexDirection: 'column',
    padding: '5%'
  }
});
