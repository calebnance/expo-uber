import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Location, MapView, Permissions } from 'expo';
import PropTypes from 'prop-types';
import { colors, device, gStyle } from '../api/lib';

// components
import RequestRideType from '../components/RequestRideType';
import SelectRideType from '../components/SelectRideType';
import TouchIcon from '../components/TouchIcon';
import TouchText from '../components/TouchText';
import WhereTo from '../components/WhereTo';

// icons
import SvgMenu from '../components/icons/Svg.Menu';
import SvgCheckShield from '../components/icons/Svg.CheckShield';

const { PROVIDER_GOOGLE } = MapView;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeImage: 'carSm',
      // typeText: 'Ride',
      typeText: 'Bike',
      selectType: false,
      userLat: 0,
      userLon: 0
    };

    this.toggleTypeModal = this.toggleTypeModal.bind(this);
    this.changeRideType = this.changeRideType.bind(this);
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

  changeRideType(data) {
    const { image, text } = data;

    this.setState({
      typeImage: image,
      typeText: text
    });
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

        {typeText === 'Bike' && (
          <View style={styles.rightContainer}>
            <View style={styles.icons}>
              <TouchIcon
                icon={<SvgCheckShield />}
                iconSize={20}
                onPress={() => navigation.navigate('ModalTutorialBike')}
                style={styles.iconShield}
              />
            </View>
          </View>
        )}

        <View style={styles.header}>
          <TouchIcon
            icon={<SvgMenu />}
            iconSize={32}
            onPress={() => navigation.toggleDrawer()}
          />
          <RequestRideType
            image={typeImage}
            onPress={this.toggleTypeModal}
            text={typeText}
          />

          {typeText === 'Ride' && <View style={styles.placeholder} />}
          {typeText === 'Bike' && (
            <TouchText
              onPress={() => navigation.navigate('ModalHelp')}
              style={styles.help}
              text="Help"
            />
          )}
        </View>

        <SelectRideType
          onClose={this.toggleTypeModal}
          onSelect={this.changeRideType}
          visible={selectType}
        />

        {typeText === 'Ride' && <WhereTo />}
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: device.iPhoneX ? 58 : 34
  },
  help: {
    textAlign: 'center',
    width: 32
  },
  placeholder: {
    height: 32,
    width: 32
  },
  rightContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    width: 40
  },
  iconShield: {
    backgroundColor: colors.white,
    borderRadius: 18,
    height: 36,
    marginTop: 16,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 36
  }
});

export default Home;
