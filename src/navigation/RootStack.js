import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// drawer stack
import DrawerStack from './DrawerStack';

// screens
import ModalHelp from '../screens/ModalHelp';
import ModalQRCode from '../screens/ModalQRCode';
import ModalTutorialBike from '../screens/ModalTutorialBike';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        presentation: 'fullScreenModal'
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
