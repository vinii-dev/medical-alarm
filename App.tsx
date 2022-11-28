import { Center, NativeBaseProvider, Text } from 'native-base';
import React from 'react';
import AppRoutes from './src/routes/app.routes';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* <Center>
        <Text>Test</Text>
      </Center> */}
      <AppRoutes />
    </NativeBaseProvider>
  );
}
