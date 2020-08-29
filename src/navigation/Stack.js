import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// navigation
import DrawerStack from './DrawerStack';

// screens
import ModalHelp from '../screens/ModalHelp';
import ModalQRCode from '../screens/ModalQRCode';
import ModalTutorialBike from '../screens/ModalTutorialBike';

const StackNavigator = createStackNavigator(
  {
    DrawerStack,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalHelp,
    ModalQRCode,
    ModalTutorialBike
  },
  {
    headerMode: 'none',
    initialRouteName: 'DrawerStack',
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);

export default App;
