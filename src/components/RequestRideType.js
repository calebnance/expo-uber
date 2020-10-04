import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, gStyle, images } from '../constants';

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
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 26,
    flexDirection: 'row',
    padding: 2,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8
  },
  image: {
    borderRadius: 18,
    height: 34,
    resizeMode: 'contain',
    width: 34
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 16,
    paddingHorizontal: 8
  },
  iconArrow: {
    marginRight: 6,
    marginTop: 4
  }
});

export default RequestRideType;
