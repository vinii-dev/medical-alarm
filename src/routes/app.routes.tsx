import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { DeviceForm } from '../screens/DeviceForm';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const AppRoutes = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 24,
        },
      }}
      initialRouteName="DeviceForm"
    >
      <Stack.Screen
        name="DeviceForm"
        component={DeviceForm}
        options={{
          title: 'Cadastre seu aparelho',
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Seus aparelhos',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
