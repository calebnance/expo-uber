import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgChevronDown = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M5.293 9.707l6 6a.999.999 0 0 0 1.414 0l6-6a.999.999 0 1 0-1.414-1.414L12 13.586 6.707 8.293a.999.999 0 1 0-1.414 1.414z"
      fill={fill}
    />
  </Svg>
);

SvgChevronDown.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgChevronDown.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgChevronDown);
