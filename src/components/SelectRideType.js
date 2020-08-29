import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Modal, StyleSheet, View } from 'react-native';
import { colors, device } from '../constants';

// components
import ModalBackdrop from './ModalBackdrop';
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
      Animated.timing(top, {
        duration: 300,
        toValue,
        useNativeDriver: false
      }).start();
    }
  }

  render() {
    const { data, onClose, onSelect, visible } = this.props;
    const { top } = this.state;
    const dataArray = Object.keys(data);

    return (
      <Modal
        animationType="fade"
        onRequestClose={onClose}
        transparent
        visible={visible}
      >
        <ModalBackdrop onPress={onClose} />
        <Animated.View style={[styles.container, { top }]}>
          {dataArray.map((key, index) => {
            let separator = null;
            if (dataArray.length !== index + 1) {
              separator = <View style={styles.separator} />;
            }

            return (
              <React.Fragment key={key}>
                <RideTypeItem
                  image={data[key].imageLg}
                  onPress={() => {
                    onSelect(key);
                    onClose();
                  }}
                  text={data[key].text}
                />
                {separator}
              </React.Fragment>
            );
          })}
        </Animated.View>
      </Modal>
    );
  }
}

SelectRideType.propTypes = {
  // required
  data: PropTypes.shape({
    image: PropTypes.string,
    imageLg: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
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
