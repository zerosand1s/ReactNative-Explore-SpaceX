import React, { Component } from 'react';
import { View } from 'react-native';

import Tile from './Tile';

export default class TileList extends Component {
  render() {
    return (
      <View onPress={ (text) => this.props.onPress(text) }>
        <Tile text='missions'></Tile>
        <Tile text='rockets'></Tile>
      </View>
    );
  }
}