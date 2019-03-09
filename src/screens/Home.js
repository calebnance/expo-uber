import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Location, MapView, Permissions } from 'expo';
import PropTypes from 'prop-types';
import { device, gStyle } from '../api/lib';

// components
import RequestRideType from '../components/RequestRideType';
import SelectRideType from '../components/SelectRideType';
import TouchIcon from '../components/TouchIcon';

// icons
import SvgMenu from '../components/icons/Svg.Menu';

const { PROVIDER_GOOGLE } = MapView;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeImage: 'carSm',
      typeText: 'Car',
      selectType: false,
      userLat: 0,
      userLon: 0
    };

    this.toggleTypeModal = this.toggleTypeModal.bind(this);
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.LOCATION);
    }

    const { coords } = await Location.getCurrentPositionAsync();

    this.setState({
      userLat: coords.latitude,
      userLon: coords.longitude
    });
  }

  toggleTypeModal() {
    this.setState(prevState => ({
      selectType: !prevState.selectType
    }));
  }

  render() {
    const { navigation } = this.props;
    const { typeImage, typeText, selectType, userLat, userLon } = this.state;

    return (
      <View style={gStyle.container}>
        <MapView
          followsUserLocation
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: userLat,
            longitude: userLon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          showsUserLocation
          style={styles.map}
        />

        <TouchIcon
          icon={<SvgMenu />}
          iconSize={28}
          onPress={() => navigation.toggleDrawer()}
          style={styles.menuIcon}
        />

        <RequestRideType
          image={typeImage}
          onPress={this.toggleTypeModal}
          text={typeText}
        />
        <SelectRideType onClose={this.toggleTypeModal} visible={selectType} />
      </View>
    );
  }
}

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  map: {
    height: device.height,
    position: 'absolute',
    width: device.width
  },
  menuIcon: {
    left: 20,
    position: 'absolute',
    top: device.iPhoneX ? 70 : 46
  }
});

export default Home;
