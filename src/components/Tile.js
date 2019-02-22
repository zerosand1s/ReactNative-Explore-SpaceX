import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';

import DataService from '../services/DataService';
import NavigationService from '../services/NavigationService';

export default class Tile extends Component {

  handlePress = (tileProps) => {
    DataService.getDataForField(tileProps.text)
      .then((details) => {
        NavigationService.navigate(tileProps.screen, { data: details })
      });
  }

  render() {
    return (
      <TouchableHighlight onPress={ () => this.handlePress(this.props.tileProps) }>
        <View style={ styles.tileView }>
          <Text style={ styles.tileText }>{ this.props.tileProps.text }</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  tileView: {
    width: '100%',
    height: 100,
    backgroundColor: 'orange',
    marginBottom: 15
  },
  tileText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    top: '40%' 
  }
});