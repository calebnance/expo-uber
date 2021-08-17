import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { colors, device, fonts, func, gStyle, images } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';

class ModalQRCode extends React.Component {
  constructor() {
    super();

    this.state = {
      cameraAccess: null
      // qrCode: null
    };

    this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
  }

  async componentDidMount() {
    const accessGranted = await func.cameraAccessAsync();

    this.setState({
      cameraAccess: accessGranted
    });
  }

  handleBarCodeScanned({ data, type }) {
    console.log(data);
    console.log(type);
  }

  render() {
    const { navigation } = this.props;
    const { cameraAccess } = this.state;

    return (
      <View style={gStyle.container}>
        {cameraAccess && (
          <React.Fragment>
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={styles.barcodeScanner}
            />

            <View style={styles.overlay}>
              <ModalHeader navigation={navigation} style={styles.modalHeader} />

              <View style={styles.containerBar}>
                <View style={styles.containerBarIcons}>
                  <Image source={images.iconQRBike} style={styles.iconBike} />
                  <Image
                    source={images.iconQRScooter}
                    style={styles.iconScooter}
                  />
                </View>
              </View>

              <View style={styles.containerLabel}>
                <Text style={styles.label}>Scan QR Code</Text>
              </View>

              <View style={styles.containerHelperBox}>
                <View style={styles.boxSpacer} />
                <View style={styles.box} />
                <View style={styles.boxSpacer} />
              </View>

              <View style={[styles.containerBar, gStyle.flex1]}>
                <View style={[styles.containerBarIcons, styles.barWidth]}>
                  <View style={styles.containerIcon}>
                    <Image
                      source={images.iconQRFlashlight}
                      style={styles.iconBottom}
                    />
                    <Text style={styles.iconLabel}>Flashlight</Text>
                  </View>
                  <View style={styles.containerIcon}>
                    <Image
                      source={images.iconQRIdCode}
                      style={styles.iconBottom}
                    />
                    <Text style={styles.iconLabel}>Enter ID instead</Text>
                  </View>
                </View>
              </View>
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

ModalQRCode.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  barcodeScanner: {
    height: device.height,
    position: 'absolute',
    width: device.width
  },
  overlay: {
    height: device.height,
    width: device.width
  },
  modalHeader: {
    backgroundColor: colors.black70
  },
  containerBar: {
    alignItems: 'center',
    backgroundColor: colors.black70,
    paddingVertical: 24
  },
  containerBarIcons: {
    flexDirection: 'row'
  },
  barWidth: {
    justifyContent: 'space-between',
    width: 240
  },
  containerIcon: {
    alignItems: 'center',
    width: 100
  },
  iconBike: {
    height: 41,
    marginRight: 48,
    width: 48
  },
  iconScooter: {
    height: 43,
    width: 48
  },
  iconBottom: {
    height: 64,
    width: 64
  },
  iconLabel: {
    color: colors.white,
    fontFamily: fonts.light,
    marginTop: 24
  },
  containerLabel: {
    alignItems: 'center',
    backgroundColor: colors.black70,
    paddingVertical: 8
  },
  label: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  },
  containerHelperBox: {
    flexDirection: 'row'
  },
  boxSpacer: {
    backgroundColor: colors.black70,
    flex: 1
  },
  box: {
    height: 200,
    width: 200
  }
});

export default ModalQRCode;
