// Scan.js
import React, { useState, Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Application.container.styles';
import FingerprintPopup from './FingerprintPopup.component';

export default class Scan extends Component {

   someFunction = () => {
    //visibioity here
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{marginBottom: 15, fontSize: 30, fontWeight: 'bold'}}>Scan Screen</Text>
            
              <FingerprintPopup
                style={styles.popup}
                handlePopupDismissed={ this.someFunction }
              />
      </View>
    )
  }
}