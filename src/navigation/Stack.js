import { createAppContainer, createStackNavigator } from 'react-navigation';

// grab navigation
import DrawerStack from './DrawerStack';

// grab screens
import ModalWhereTo from '../screens/ModalWhereTo';

// grab modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    DrawerStack,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalWhereTo: {
      screen: ModalWhereTo,
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
