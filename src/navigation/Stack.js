import { createAppContainer, createStackNavigator } from 'react-navigation';

// navigation
import DrawerStack from './DrawerStack';

// screens
import ModalHelp from '../screens/ModalHelp';
import ModalQRCode from '../screens/ModalQRCode';
import ModalTutorialBike from '../screens/ModalTutorialBike';

// modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    DrawerStack,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalHelp: {
      screen: ModalHelp,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ModalQRCode: {
      screen: ModalQRCode,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ModalTutorialBike: {
      screen: ModalTutorialBike,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'DrawerStack',
    transitionConfig: ModalRoutes
  }
);

const App = createAppContainer(StackNavigator);

export default App;
