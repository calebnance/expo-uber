import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/lib';

const SvgChevronRight = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Svg.Path
      d="M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z"
      fill={fill}
    />
  </Svg>
);

SvgChevronRight.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgChevronRight.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgChevronRight;
