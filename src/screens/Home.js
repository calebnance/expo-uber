import * as React from 'react';
import PropTypes from 'prop-types';
import { Linking, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { colors, device, fonts, gStyle } from '../constants';

// components
import RequestRideType from '../components/RequestRideType';
import SelectRideType from '../components/SelectRideType';
import TouchIcon from '../components/TouchIcon';
import TouchText from '../components/TouchText';
import WhereTo from '../components/WhereTo';

// icons
import SvgCheckShield from '../components/icons/Svg.CheckShield';
import SvgMenu from '../components/icons/Svg.Menu';
import SvgQRCode from '../components/icons/Svg.QRCode';

const { PROVIDER_GOOGLE } = MapView;

const types = {
  car: {
    image: 'carSm',
    imageLg: 'carLg',
    text: 'Ride'
  },
  bike: {
    image: 'bikeSm',
    imageLg: 'bikeLg',
    text: 'Bike'
  }
};

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      type: 'car',
      selectType: false,
      showMap: false,
      userLat: null,
      userLon: null
    };

    this.toggleTypeModal = this.toggleTypeModal.bind(this);
    this.changeRideType = this.changeRideType.bind(this);
  }

  async componentDidMount() {
    // get exisiting locaton permissions first
    const { status: existingStatus } =
      await Location.requestForegroundPermissionsAsync();
    let finalStatus = existingStatus;

    // ask again to grant locaton permissions (if not already allowed)
    if (existingStatus !== 'granted') {
      const { status } = await Location.requestForegroundPermissionsAsync();
      finalStatus = status;
    }

    // still not allowed to use location?
    if (finalStatus !== 'granted') {
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync();

    this.setState({
      showMap: true,
      userLat: coords.latitude,
      userLon: coords.longitude
    });
  }

  toggleTypeModal() {
    this.setState((prevState) => ({
      selectType: !prevState.selectType
    }));
  }

  changeRideType(type) {
    this.setState({
      type
    });
  }

  render() {
    const { navigation } = this.props;
    const { type, selectType, showMap, userLat, userLon } = this.state;

    return (
      <View style={gStyle.container}>
        {showMap && (
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
        )}

        {!showMap && (
          <View style={styles.containerNoLocation}>
            <Text style={styles.textLocationNeeded}>
              We need your location data...
            </Text>
            <TouchText
              onPress={() => Linking.openURL('app-settings:')}
              style={styles.btnGoTo}
              styleText={styles.btnGoToText}
              text="Go To Permissions"
            />
          </View>
        )}

        {type === 'bike' && (
          <View style={styles.rightContainer}>
            <View style={styles.icons}>
              <TouchIcon
                icon={<SvgQRCode />}
                iconSize={20}
                onPress={() => navigation.navigate('ModalQRCode')}
                style={[styles.icon, styles.iconQRCode]}
              />
              <TouchIcon
                icon={<SvgCheckShield />}
                iconSize={20}
                onPress={() => navigation.navigate('ModalTutorialBike')}
                style={[styles.icon, styles.iconShield]}
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
            image={types[type].image}
            onPress={this.toggleTypeModal}
            text={types[type].text}
          />

          {type === 'car' && <View style={styles.placeholder} />}
          {type === 'bike' && (
            <TouchText
              onPress={() => navigation.navigate('ModalHelp')}
              style={styles.help}
              text="Help"
            />
          )}
        </View>

        <SelectRideType
          data={types}
          onClose={this.toggleTypeModal}
          onSelect={this.changeRideType}
          visible={selectType}
        />

        {type === 'car' && <WhereTo />}
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
    flex: 1,
    height: device.height,
    position: 'absolute',
    width: device.width
  },
  containerNoLocation: {
    alignItems: 'center',
    height: device.height,
    justifyContent: 'center',
    position: 'absolute',
    width: device.width
  },
  textLocationNeeded: {
    fontFamily: fonts.uberMedium,
    fontSize: 16,
    marginBottom: 16
  },
  btnGoTo: {
    backgroundColor: colors.black,
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  btnGoToText: {
    color: colors.white,
    fontFamily: fonts.uberMedium,
    fontSize: 16
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: device.iPhoneNotch ? 58 : 34
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
  icon: {
    borderRadius: 18,
    height: 36,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    width: 36
  },
  iconQRCode: {
    backgroundColor: colors.blue,
    marginBottom: 16
  },
  iconShield: {
    backgroundColor: colors.white
  }
});

export default Home;
