import React from 'react';
import { Animated, Modal, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device } from '../api/lib';

// components
import ModalBackdrop from './ModalBackdrop';
import RideTypeItem from './RideTypeItem';

// data
const mockData = [
  {
    image: 'carSm',
    imageLg: 'carLg',
    text: 'Ride'
  },
  {
    image: 'bikeSm',
    imageLg: 'bikeLg',
    text: 'Bike'
  }
];

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
    const { onClose, onSelect, visible } = this.props;
    const { top } = this.state;

    return (
      <Modal
        animationType="fade"
        onRequestClose={onClose}
        transparent
        visible={visible}
      >
        <ModalBackdrop onPress={onClose} />
        <Animated.View style={[styles.container, { top }]}>
          <RideTypeItem
            image={mockData[0].imageLg}
            onPress={() => {
              onSelect(mockData[0]);
              onClose();
            }}
            text={mockData[0].text}
          />

          <View style={styles.separator} />

          <RideTypeItem
            image={mockData[1].imageLg}
            onPress={() => {
              onSelect(mockData[1]);
              onClose();
            }}
            text={mockData[1].text}
          />
        </Animated.View>
      </Modal>
    );
  }
}

SelectRideType.propTypes = {
  // required
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: device.iPhoneX ? 44 : 20,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  separator: {
    backgroundColor: colors.greyGallery,
    height: 1,
    width: '100%'
  }
});

export default SelectRideType;
