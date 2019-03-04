import React, { Component } from 'react';
import { View, Text, FlatList, Modal, Linking, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default class RocketsScreen extends Component {

  state = {
    rocket: null,
    isModalVisible: false
  };

  handlePress = (rocket) => {
    this.setState({
      rocket, isModalVisible: true
    });
  }

  closeModal = () => {
    this.setState({ rocket: null, isModalVisible: false });
  }

  _renderItem = (item) => {
    return (
      <ListItem 
        title={ item.rocket_name }
        subtitle={
          <View>
            <Text style={ styles.missionManufacture }>
              Company: { item.company }
            </Text>            
          </View>
        }
        bottomDivider={ true }
        onPress={ () => this.handlePress(item) }
      />
    );
  }
  
  _renderModal = (rocket) => {
    return (
      <Modal 
        visible={ this.state.isModalVisible } 
        animationType={ 'fade' }>
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
              <Text style={ styles.modalTitle }>{ rocket.rocket_name }</Text>
              <Text style={ styles.modalCompany }>Company: { rocket.company }</Text>        
              <Text style={ styles.modalDescription }>{ rocket.description }</Text>
              <Text style={ styles.modalDescription }>Stages: { rocket.stages }</Text>
              <Text style={ styles.modalDescription }>Cost per launch: ${ rocket.cost_per_launch }</Text>
              <Text style={ styles.modalDescription }>First flight: { rocket.first_flight }</Text>
              <Text style={ styles.modalDescription }>
                Engines: {rocket.engines.type.charAt(0).toUpperCase() + rocket.engines.type.slice(1)}, {rocket.engines.number}
              </Text>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text>Specs:</Text>
                  <Text style={{marginLeft: 5}}>Height: { rocket.height.meters } m ({rocket.height.feet} ft)</Text>
                </View>
                <Text style={{marginLeft: 50}}>Diameter: { rocket.diameter.meters } m ({rocket.diameter.feet} ft)</Text>
                <Text style={{marginLeft: 50}}>Mass: { rocket.mass.kg } kg ({rocket.mass.lb} lb)</Text>
              </View>
              <View style={ styles.iconsView }>
                <Icon name='wikipedia-w' type='font-awesome' size={ 14 } underlayColor='transparent' 
                  containerStyle={ styles.wikiIcon } onPress={ () => Linking.openURL(mission.wikipedia)}></Icon>              
              </View>
            </View>
          </View>
      </Modal>
    );
  }

  render() {

    const { navigation } = this.props;
    const rockets = navigation.getParam('data', []);

    return (
      <View>
        <FlatList
          data={ rockets }
          keyExtractor={ (item, index) =>  item.rocket_id }
          renderItem={ ({ item }) => this._renderItem(item)}
        />

        { this.state.isModalVisible ? this._renderModal(this.state.rocket) : null }
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
  modalCompany: {
    fontSize: 16,
    marginBottom: 10
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 10,
    justifyContent: 'center'
  },
  iconsView: { 
    padding: 10,
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 20, 
    justifyContent: 'flex-end'
  },
  wikiIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  }
});
