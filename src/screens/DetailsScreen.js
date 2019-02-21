import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>      
        <View>
          <Text>ON DETAILS SCREEN</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
