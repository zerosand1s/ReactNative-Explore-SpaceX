import React, { Component } from 'react';
import { View, Text, FlatList, Modal, StyleSheet, Linking } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default class MissionsScreen extends Component {

  state = {
    mission: null,
    isModalVisible: false
  };

  handlePress = (mission) => {
    this.setState({
      mission, isModalVisible: true
    });
  }

  _renderItem = (item) => {
    return (
      <ListItem 
        title={ item.mission_name }
        subtitle={
          <View>
            <Text style={ styles.missionManufacture }>
              Manufactured By: { item.manufacturers.length > 1  ? 
                item.manufacturers[0] + ' and ' + (item.manufacturers.length - 1) + ' more' :
                item.manufacturers[0] }
            </Text>
            <Text style={ styles.missionPayload }>Total Payloads: { item.payload_ids.length }</Text>
          </View>
        }
        bottomDivider={ true }
        onPress={ () => this.handlePress(item) }
      />
    );
  }

  closeModal = () => {
    this.setState({ mission: null, isModalVisible: false });
  }

  _renderModal = (mission) => {
    return (
      <Modal 
        visible={ this.state.isModalVisible } 
        animationType={ 'slide' }>
          <View style={{ flex: 1, marginTop: '20%', padding: 10 }}>
            <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
              <Icon 
                name='times-circle' 
                type='font-awesome' 
                size={ 22 }
                onPress={ () => this.closeModal() }                         
              ></Icon>            
            </View>
            <View>
              <Text style={ styles.modalTitle }>{ mission.mission_name }</Text>
              <Text style={ styles.modalManufacturers }>Manufactured By: { mission.manufacturers.join(', ') }</Text>        
              <Text style={ styles.modalDescription }>{ mission.description }</Text>
              <View style={ styles.iconsView }>
                <Icon name='wikipedia-w' type='font-awesome' size={ 14 } underlayColor='transparent' 
                  containerStyle={ styles.wikiIcon } onPress={ () => Linking.openURL(mission.wikipedia)}></Icon>
                <Icon name='link' type='font-awesome' size={ 14 }  underlayColor='transparent'
                  containerStyle={ styles.linkIcon } onPress={ () => Linking.openURL(mission.website)}></Icon>
                <Icon name='twitter' type='font-awesome' size={ 14 } underlayColor='transparent' 
                  color={ '#ffffff' } containerStyle={ styles.twitterIcon } onPress={ () => Linking.openURL(mission.twitter)}></Icon>
              </View>
            </View>
          </View>
      </Modal>
    );
  }

  render() {
    const { navigation } = this.props;
    const missions = navigation.getParam('data', []);

    return (
      <View>
        <FlatList
          data={ missions }
          keyExtractor={ (item, index) =>  item.mission_id }
          renderItem={ ({ item }) => this._renderItem(item) }
        />

        { this.state.isModalVisible ? this._renderModal(this.state.mission) : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  missionManufacture: {
    fontSize: 12,
    marginTop: 3
  },
  missionPayload: {
    fontSize: 12,
    marginTop: 3
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10    
  },
  modalManufacturers: {
    fontSize: 16,
    marginBottom: 10
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 10,
    justifyContent: 'center'
  },
  iconsView: { 
    marginTop: 20,
    flexDirection: 'row', 
    justifyContent: 'space-evenly' 
  },
  wikiIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  },
  linkIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#C0C0C0'
  },
  twitterIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#00aced'
  }
});
