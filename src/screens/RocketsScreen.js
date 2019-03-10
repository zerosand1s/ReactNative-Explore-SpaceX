import React, { Component } from 'react';
import { View, Text, FlatList, Modal, Linking, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

import DataService from '../services/DataService';

import StyledView from '../components/StyledView';
import StyledText from '../components/StyledText';

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
          <StyledView flex={1} marginTop={'20%'}>
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
              backgroundColor={'#2E86C1'}
              marginTop={10}
              marginBottom={3}
            >
              <StyledText
                text={rocket.rocket_name}
                fontSize={30}
                fontWeight={'bold'}
                textAlign={'center'}
                textTransform={'uppercase'}
                color={'#FFFFFF'}
              />
            </StyledView>
            <StyledView flex={1} flexDirection={'row'}>
              <StyledView
                flex={0.5}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#3498DB'}
                marginTop={10}
                marginBottom={3}
                marginRight={5}
              >
                <StyledText
                  text={'Company'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={rocket.company}
                  fontSize={28}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
              <StyledView
                flex={0.5}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#3498DB'}
                marginTop={10}
                marginBottom={3}
                marginLeft={5}
              >
                <StyledText
                  text={'Cost per Launch'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={'$'+rocket.cost_per_launch}
                  fontSize={24}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
            </StyledView>
            <StyledView flex={1} flexDirection={'row'}>
              <StyledView
                flex={0.4}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#5DADE2'}
                marginTop={10}
                marginBottom={3}
                marginRight={5}
              >
                <StyledText
                  text={'Stages'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={rocket.stages}
                  fontSize={50}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
              <StyledView
                flex={0.6}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#5DADE2'}
                marginTop={10}
                marginBottom={3}
                marginLeft={5}
              >
                <StyledText
                  text={'First Flight'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={rocket.first_flight}
                  fontSize={26}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
            </StyledView>
            <StyledView flex={1} flexDirection={'row'}>
              <StyledView
                flex={0.34}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#85C1E9'}
                marginTop={10}
                marginBottom={3}
                marginRight={5}
              >
                <StyledText
                  text={'Height'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={rocket.height.meters+'m'}
                  fontSize={24}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
              <StyledView
                flex={0.34}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#85C1E9'}
                marginTop={10}
                marginBottom={3}                
              >
                <StyledText
                  text={'Diameter'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={rocket.diameter.meters+'m'}
                  fontSize={24}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
              <StyledView
                flex={0.34}
                borderRadius={8}
                justifyContent={'center'}
                backgroundColor={'#85C1E9'}
                marginTop={10}
                marginBottom={3}
                marginLeft={5}
              >
                <StyledText
                  text={'Mass'}
                  fontSize={12}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
                <StyledText
                  text={rocket.mass.kg+'kg'}
                  fontSize={24}
                  textAlign={'center'}
                  color={'#FFFFFF'}
                />
              </StyledView>
            </StyledView>
          </StyledView>
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
