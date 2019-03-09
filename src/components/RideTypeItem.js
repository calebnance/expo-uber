import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { fonts, images } from '../api/lib';

const RideTypeItem = ({ image, text }) => (
  <View style={styles.container}>
    <Image source={images[image]} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

RideTypeItem.propTypes = {
  // required
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
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
    fontFamily: fonts.medium,
    fontSize: 20,
    marginLeft: 16
  }
});

export default RideTypeItem;
