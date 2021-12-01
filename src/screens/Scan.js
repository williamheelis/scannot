// Scan.js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Scan extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{marginBottom: 15, fontSize: 30, fontWeight: 'bold'}}>Scan Screen</Text>
      </View>
    )
  }
}