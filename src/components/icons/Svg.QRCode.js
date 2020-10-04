import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgQRCode = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M11 8h-1V6h1v1h2v1h-1v1h-1V8zm2 12v-1h-1v1h1zM12 5V4h-2v1h1v1h1V5zm8-1v6h-1V9h-4V4h5zm-1 4V5h-3v3h3zM5 10H4v1h2v-1H5zm0 3h1v1h1v-3H6v1H4v2h1v-1zm5 1v2h1v-2h-1zm4-10h-1v3h1V4zm0 5V8h-1v1h1zm3-2h1V6h-1v1zM7 6H6v1h1V6zm2-2v5H4V4h5zM8 5H5v3h3V5zm9 5v1h-1v-1h-2v1h-1v-1h-3V9H9v1H8v1h1v2h1v-1h1v2h1v-2h3v1h-2v1h2v1h1v-3h1v1h1v2h1v-1h1v-1h-1v-1h-1v-1h1v-1h-2zM6 18h1v-1H6v1zm-2-3h5v5H4v-5zm1 4h3v-3H5v3zm12-3v-1h-1v1h1zm0 1h-1v1h-1v-1h-1v-1h1v-1h-2v-1h-1v2h-1v1h-1v3h1v-1h1v-1h2v2h1v-1h1v1h2v-1h1v-1h-2v-1zm-9-3h1v-1H8v1zm10 2v1h1v1h1v-3h-1v1h-1zm2 4v-1h-1v1h1zm0-8v-1h-1v1h1zM18 2h4v4h2V0h-6v2zM2 6V2h4V0H0v6h2zm4 16H2v-4H0v6h6v-2zm16-4v4h-4v2h6v-6h-2z"
      fill={fill}
    />
  </Svg>
);

SvgQRCode.defaultProps = {
  fill: colors.white,
  size: 24
};

SvgQRCode.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgQRCode);
