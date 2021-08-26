import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';

// drawer stack
import DrawerStack from './DrawerStack';

// screens
import ModalHelp from '../screens/ModalHelp';
import ModalQRCode from '../screens/ModalQRCode';
import ModalTutorialBike from '../screens/ModalTutorialBike';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        presentation: 'modal'
      }}
    >
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="ModalHelp"
        component={ModalHelp}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalQRCode"
        component={ModalQRCode}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalTutorialBike"
        component={ModalTutorialBike}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
