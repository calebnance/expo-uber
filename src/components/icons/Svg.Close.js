import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgClose = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M21.1 5.1l-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9z"
      fill={fill}
    />
  </Svg>
);

SvgClose.defaultProps = {
  fill: colors.white,
  size: 20
};

SvgClose.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgClose);
