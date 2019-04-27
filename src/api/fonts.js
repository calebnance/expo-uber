import device from './device';

export default {
  uberBold: 'uberBold',
  uberMedium: 'uberMedium',
  uberRegular: 'uberRegular',

  bold: device.iOS ? 'HelveticaNeue-Bold' : 'sans-serif-condensed',
  light: device.iOS ? 'HelveticaNeue-Light' : 'sans-serif-light',
  medium: device.iOS ? 'HelveticaNeue-Medium' : 'sans-serif-medium',
  regular: device.iOS ? 'HelveticaNeue' : 'sans-serif'
};
