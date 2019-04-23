import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../api/lib';

const ModalQRCode = ({ navigation }) => (
  <View style={gStyle.container}>
    <Text>ModalQRCode</Text>
  </View>
);

ModalQRCode.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalQRCode;
