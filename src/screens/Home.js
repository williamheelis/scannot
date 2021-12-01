import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <>
            <Text style={{marginBottom: 15, fontSize: 30, fontWeight: 'bold'}}>Home Screen</Text>
        </>
          <Button
          title="Go to Scan"
          style={{fontSize: 40}}
          onPress={() => this.props.navigation.navigate('Scan')}
/>
      </View>
    )
  }
}