import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';

const ModalHelp = () => (
  <View style={gStyle.container}>
    <ModalHeader text="Help" />

    <View style={gStyle.p24}>
      <Text>ModalHelp</Text>
    </View>
  </View>
);

export default ModalHelp;
