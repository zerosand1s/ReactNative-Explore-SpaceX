import React, { Component } from 'react';
import { View, Text, FlatList, Modal, Linking, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

import DataService from '../services/DataService';

import StyledView from '../components/StyledView';
import TitleText from '../components/TitleText';

import globalStyles from '../styles';

export default class RocketsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rockets: [],
      rocket: null,
      isModalVisible: false
    };
  }

  componentDidMount() {
    DataService.getDataForField('rockets').then(details => {
      this.setState({ rockets: details, loading: false });
    });
  }

  handlePress = rocket => {
    this.setState({
      rocket,
      isModalVisible: true
    });
  };

  closeModal = () => {
    this.setState({ rocket: null, isModalVisible: false });
  };

  _renderItem = item => {
    return (
      <ListItem
        title={item.rocket_name}
        subtitle={
          <View>
            <Text style={styles.missionManufacture}>
              Company: {item.company}
            </Text>
          </View>
        }
        bottomDivider={true}
        onPress={() => this.handlePress(item)}
      />
    );
  };

  _renderModal = rocket => {
    return (
      <Modal visible={this.state.isModalVisible} animationType={'fade'}>
        <StyledView padding={'5%'} backgroundColor={'#FFFFFF'}>
          <View style={globalStyles.modalBase}>
            <View style={globalStyles.modalCloseIconView}>
              <Icon
                name="times-circle"
                type="font-awesome"
                size={22}
                onPress={() => this.closeModal()}
              />
            </View>
            <StyledView
              flex={0.4}
              borderRadius={8}
              justifyContent={'center'}
              backgroundColor={'#3498DB'}
              marginTop={10}
              marginBottom={10}
            >
              <TitleText text={rocket.rocket_name} color={'#FFFFFF'} />
            </StyledView>
            <View>
              <Text style={styles.modalCompany}>Company: {rocket.company}</Text>
              <Text style={styles.modalDescription}>
                Stages: {rocket.stages}
              </Text>
              <Text style={styles.modalDescription}>
                Cost per launch: ${rocket.cost_per_launch}
              </Text>
              <Text style={styles.modalDescription}>
                First flight: {rocket.first_flight}
              </Text>
              <Text style={styles.modalDescription}>
                Engines:{' '}
                {rocket.engines.type.charAt(0).toUpperCase() +
                  rocket.engines.type.slice(1)}
                , {rocket.engines.number}
              </Text>
              <View>
                <View
                  style={{ flexDirection: 'row', alignItems: 'flex-start' }}
                >
                  <Text>Specs:</Text>
                  <Text style={{ marginLeft: 5 }}>
                    Height: {rocket.height.meters} m ({rocket.height.feet} ft)
                  </Text>
                </View>
                <Text style={{ marginLeft: 50 }}>
                  Diameter: {rocket.diameter.meters} m ({rocket.diameter.feet}{' '}
                  ft)
                </Text>
                <Text style={{ marginLeft: 50 }}>
                  Mass: {rocket.mass.kg} kg ({rocket.mass.lb} lb)
                </Text>
              </View>
              <View style={globalStyles.modalLinkIconsView}>
                <Icon
                  name="wikipedia-w"
                  type="font-awesome"
                  size={14}
                  underlayColor="transparent"
                  containerStyle={globalStyles.wikiIcon}
                  onPress={() => Linking.openURL(mission.wikipedia)}
                />
              </View>
            </View>
          </View>
        </StyledView>
      </Modal>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.rockets}
          keyExtractor={(item, index) => item.rocket_id}
          renderItem={({ item }) => this._renderItem(item)}
        />

        {this.state.isModalVisible
          ? this._renderModal(this.state.rocket)
          : null}
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
  modalCompany: {
    fontSize: 16,
    marginBottom: 10
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 10,
    justifyContent: 'center'
  }
});
