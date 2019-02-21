import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';

import NavigationService from '../services/NavigationService';

export default class Tile extends Component {

  handlePress = (text) => {
    NavigationService.navigate('Details');
  }

  render() {
    return (
      <TouchableHighlight onPress={ () => this.handlePress(this.props.text) }>
        <View style={ styles.tileView }>
          <Text style={ styles.tileText }>{ this.props.text }</Text>
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