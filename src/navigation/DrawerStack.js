import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import Home from '../screens/Home';

// components
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    drawerContent={CustomDrawerContent}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);
