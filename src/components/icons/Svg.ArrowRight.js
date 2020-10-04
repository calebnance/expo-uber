import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgArrowRight = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z"
      fill={fill}
    />
  </Svg>
);

SvgArrowRight.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgArrowRight.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgArrowRight);
