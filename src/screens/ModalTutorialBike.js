import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../api/lib';

const ModalTutorialBike = ({ navigation }) => (
  <View style={gStyle.container}>
    <Text>ModalTutorialBike</Text>
  </View>
);

ModalTutorialBike.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalTutorialBike;
