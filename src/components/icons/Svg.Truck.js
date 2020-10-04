import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgTruck = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M15 15H2V4h13v4zm2-6h2.586L22 11.414V15h-5zM7 18.5a1.501 1.501 0 0 1-.926 1.386 1.492 1.492 0 0 1-1.147.001 1.504 1.504 0 0 1-.814-1.96 1.504 1.504 0 0 1 1.96-.814A1.504 1.504 0 0 1 7 18.5zm15 0c0-.472-.094-.925-.265-1.339-.023-.054-.046-.108-.072-.161H23a1 1 0 0 0 1-1v-5a.997.997 0 0 0-.293-.707l-3-3A.997.997 0 0 0 20 7h-3V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1.337a3.502 3.502 0 1 0 6.398 2.839A3.502 3.502 0 0 0 8.663 17h6.674a3.502 3.502 0 1 0 6.398 2.839c.171-.414.265-.867.265-1.339zm-2 0a1.501 1.501 0 0 1-.926 1.386 1.492 1.492 0 0 1-1.147.001 1.504 1.504 0 0 1-.814-1.96 1.504 1.504 0 0 1 1.96-.814A1.504 1.504 0 0 1 20 18.5z"
      fill={fill}
    />
  </Svg>
);

SvgTruck.defaultProps = {
  fill: colors.greyDusty,
  size: 24
};

SvgTruck.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgTruck);
