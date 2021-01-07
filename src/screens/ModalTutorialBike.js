import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import ModalHeader from '../components/ModalHeader';

const ModalTutorialBike = () => (
  <View style={gStyle.container}>
    <ModalHeader text="Tutorial Bike" />

    <View style={gStyle.p24}>
      <Text>ModalTutorialBike</Text>
    </View>
  </View>
);

export default ModalTutorialBike;
