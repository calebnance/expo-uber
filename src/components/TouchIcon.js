import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const TouchIcon = ({ icon, iconSize, onPress, style }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={[gStyle.flexCenter, style]}
  >
    {React.cloneElement(icon, { size: iconSize })}
  </TouchableOpacity>
);

TouchIcon.defaultProps = {
  iconSize: 24,
  style: {}
};

TouchIcon.propTypes = {
  // required
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,

  // optional
  iconSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

export default TouchIcon;
