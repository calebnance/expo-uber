import { createDrawerNavigator } from 'react-navigation';

// grab screens
import Home from '../screens/Home';
import CustomDrawerContent from '../components/CustomDrawerContent';

const DrawerStack = createDrawerNavigator(
  { Home },
  {
    contentComponent: CustomDrawerContent,
    headerMode: 'none',
    hideStatusBar: true
  }
);

export default DrawerStack;
