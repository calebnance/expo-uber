import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

const SvgMenu = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Svg.Path
      d="M3 13h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0-6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 12h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z"
      fill={fill}
    />
  </Svg>
);

SvgMenu.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgMenu.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgMenu;
