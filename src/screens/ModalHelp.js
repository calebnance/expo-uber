import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';

const ModalHelp = ({ navigation }) => (
  <View style={gStyle.container}>
    <ModalHeader navigation={navigation} text="Help" />

    <View style={gStyle.p24}>
      <Text>ModalHelp</Text>
    </View>
  </View>
);

ModalHelp.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalHelp;
