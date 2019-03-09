import React from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, device } from '../api/lib';

// components
import RideTypeItem from './RideTypeItem';

class SelectRideType extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: new Animated.Value(-200)
    };
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    const { top } = this.state;

    if (visible !== prevProps.visible) {
      const toValue = visible ? 0 : -200;
      Animated.timing(top, { duration: 300, toValue }).start();
    }
  }

  render() {
    const { onClose, visible } = this.props;
    const { top } = this.state;

    return (
      <Modal
        animationType="fade"
        onRequestClose={onClose}
        transparent
        visible={visible}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.container, { top }]}>
          <RideTypeItem image="carLg" text="Ride" />
          <View style={styles.separator} />
          <RideTypeItem image="bikeLg" text="Bike &amp; Scooter" />
        </Animated.View>
      </Modal>
    );
  }
}

SelectRideType.propTypes = {
  // required
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: colors.black40,
    flex: 1
  },
  container: {
    backgroundColor: colors.white,
    paddingTop: device.iPhoneX ? 44 : 20,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  separator: {
    backgroundColor: colors.galleryGrey,
    height: 1,
    width: '100%'
  }
});

export default SelectRideType;
