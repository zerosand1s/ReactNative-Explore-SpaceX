import React, {Component} from 'react';
import { Text, TouchableHighlight, FlatList, StyleSheet, ImageBackground } from 'react-native';

import DataService from '../services/DataService';
import NavigationService from '../services/NavigationService';

import _ from 'lodash';

const SpaceXData = [
  { id: '1', title: 'missions', screen: 'Missions', image: require('../assets/images/missions.jpg') },
  { id: '2', title: 'rockets', screen: 'Rockets', image: require('../assets/images/rockets.jpg')},
  { id: '3', title: 'launches', screen: 'Launches', image: require('../assets/images/launches.jpg')}
];

export default class HomeScreen extends Component {

  handlePress = (item) => {
    DataService.getDataForField(item.title)
      .then((details) => {
        NavigationService.navigate(item.screen, { data: details })
      });
  }

  _renderItem = (item) => {
    return (
      <TouchableHighlight 
        style={ styles.touchableHighlight }
        onPress={ () => this.handlePress(item) }
        underlayColor={ 'transparent' }>
          <ImageBackground
            source={ item.image }
            style={ styles.imageBackground }
            imageStyle={ styles.imageStyle }>
              <Text style={ styles.title }>{ item.title }</Text>
          </ImageBackground>
      </TouchableHighlight>
    ); 
  }

  render() {
    return (
      <FlatList 
        data={ SpaceXData }
        keyExtractor={ (item) => item.id }
        renderItem={ ({item}) => this._renderItem(item) }
        style={{ padding: 10 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  touchableHighlight: {
    height: 150,
    marginBottom: 10
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  imageStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    resizeMode: 'stretch'
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '18%'    
  }
});