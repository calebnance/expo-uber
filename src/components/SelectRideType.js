import * as React from 'react';
import PropTypes from 'prop-types';
import { Animated, Modal, StyleSheet, View } from 'react-native';
import { colors, device } from '../constants';

// components
import ModalBackdrop from './ModalBackdrop';
import RideTypeItem from './RideTypeItem';

const SelectRideType = ({ data, onClose, onSelect, visible }) => {
  const dataArray = Object.keys(data);
  const top = new Animated.Value(-200);

  Animated.timing(top, {
    duration: 400,
    toValue: 0,
    useNativeDriver: false
  }).start();

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
};

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
    paddingTop: device.iPhoneNotch ? 44 : 20,
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
