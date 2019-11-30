import { createDrawerNavigator } from 'react-navigation-drawer';

// screens
import Home from '../screens/Home';
import CustomDrawerContent from '../components/CustomDrawerContent';

const DrawerStack = createDrawerNavigator(
  {
    Home
  },
  {
    contentComponent: CustomDrawerContent,
    headerMode: 'none',
    hideStatusBar: true
  }
);

export default DrawerStack;
