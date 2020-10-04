import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fonts, gStyle, images } from '../constants';

const RideTypeItem = ({ image, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={styles.container}
  >
    <Image source={images[image]} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

RideTypeItem.propTypes = {
  // required
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  image: {
    borderRadius: 18,
    height: 54,
    resizeMode: 'contain',
    width: 54
  },
  text: {
    fontFamily: fonts.uberRegular,
    fontSize: 20,
    marginLeft: 16
  }
});

export default RideTypeItem;
