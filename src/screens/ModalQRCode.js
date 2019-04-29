import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo';
import { gStyle } from '../api/lib';

import { cameraAccessAsync } from '../api/util';

class ModalQRCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraAccess: null,
      qrCode: null
    };

    this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
  }

  async componentDidMount() {
    const accessGranted = await cameraAccessAsync();

    this.setState({
      cameraAccess: accessGranted
    });
  }

  handleBarCodeScanned({ data, type }) {
    console.log(data);
    console.log(type);
  }

  render() {
    const { cameraAccess } = this.state;

    return (
      <View style={gStyle.container}>
        <Text>ModalQRCode</Text>
        {cameraAccess && (
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
        )}
      </View>
    );
  }
}

export default ModalQRCode;
