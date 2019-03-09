import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, fonts, gStyle, images } from '../api/lib';

// icons
import SvgChevronDown from './icons/Svg.ChevronDown';

const RequestRideType = ({ image, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={styles.container}
  >
    <Image source={images[image]} style={styles.image} />
    <Text style={styles.text}>{text}</Text>
    <View style={styles.iconArrow}>
      <SvgChevronDown size={20} />
    </View>
  </TouchableOpacity>
);

RequestRideType.propTypes = {
  // required
  image: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
    position: 'absolute',
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    top: device.iPhoneX ? 54 : 30
  },
  image: {
    borderRadius: 18,
    height: 34,
    resizeMode: 'contain',
    width: 34
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 16,
    paddingHorizontal: 8
  },
  iconArrow: {
    marginRight: 4
  }
});

export default RequestRideType;
