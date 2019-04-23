import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../api/lib';

const ModalHelp = ({ navigation }) => (
  <View style={gStyle.container}>
    <Text>ModalHelp</Text>
  </View>
);

ModalHelp.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalHelp;
