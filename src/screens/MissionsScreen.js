import React, { Component } from "react";
import { View, Text, FlatList, Modal, StyleSheet, Linking } from "react-native";
import { ListItem, Icon } from "react-native-elements";

import StyledView from "../components/StyledView";

import DataService from "../services/DataService";

import globalStyles from "../styles";

export default class MissionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      missions: [],
      mission: null,
      isModalVisible: false
    };
  }

  componentDidMount() {
    DataService.getDataForField("missions").then(details => {
      this.setState({ missions: details, loading: false });
    });
  }

  handlePress = mission => {
    this.setState({
      mission,
      isModalVisible: true
    });
  };

  _renderItem = item => {
    return (
      <ListItem
        title={item.mission_name}
        subtitle={
          <View>
            <Text style={styles.missionManufacture}>
              Manufactured By:{" "}
              {item.manufacturers.length > 1
                ? item.manufacturers[0] +
                  " and " +
                  (item.manufacturers.length - 1) +
                  " more"
                : item.manufacturers[0]}
            </Text>
            <Text style={styles.missionPayload}>
              Total Payloads: {item.payload_ids.length}
            </Text>
          </View>
        }
        bottomDivider={true}
        onPress={() => this.handlePress(item)}
      />
    );
  };

  closeModal = () => {
    this.setState({ mission: null, isModalVisible: false });
  };

  _renderModal = mission => {
    return (
      <Modal visible={this.state.isModalVisible} animationType={'fade'}>
        <StyledView padding={'5%'} backgroundColor={'orange'}>
          <View style={globalStyles.modalBase}>
            <View style={globalStyles.modalCloseIconView}>
              <Icon
                name="times-circle"
                type="font-awesome"
                size={22}
                onPress={() => this.closeModal()}
              />
            </View>
            <View>
              <Text style={globalStyles.modalTitle}>
                {mission.mission_name}
              </Text>
              <Text style={styles.modalManufacturers}>
                Manufactured By: {mission.manufacturers.join(", ")}
              </Text>
              <Text style={styles.modalDescription}>{mission.description}</Text>
              <View style={globalStyles.modalLinkIconsView}>
                <Icon
                  name="wikipedia-w"
                  type="font-awesome"
                  size={14}
                  underlayColor="transparent"
                  containerStyle={globalStyles.wikiIcon}
                  onPress={() => Linking.openURL(mission.wikipedia)}
                />
                <Icon
                  name="link"
                  type="font-awesome"
                  size={14}
                  underlayColor="transparent"
                  containerStyle={globalStyles.linkIcon}
                  onPress={() => Linking.openURL(mission.website)}
                />
                <Icon
                  name="twitter"
                  type="font-awesome"
                  size={14}
                  underlayColor="transparent"
                  color={"#ffffff"}
                  containerStyle={globalStyles.twitterIcon}
                  onPress={() => Linking.openURL(mission.twitter)}
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
          data={this.state.missions}
          keyExtractor={(item, index) => item.mission_id}
          renderItem={({ item }) => this._renderItem(item)}
        />

        {this.state.isModalVisible
          ? this._renderModal(this.state.mission)
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
  modalManufacturers: {
    fontSize: 16,
    marginBottom: 10
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 10,
    justifyContent: "center"
  }
});
