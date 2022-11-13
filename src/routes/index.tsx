import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {StackAppRoutes} from './stack/stack.routes';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(19, 16, 191)',
    background: '#ffffff'
  }
}

export const AppRoutes = () => {

  return (
    <NavigationContainer theme={Theme}>
      <StackAppRoutes />
    </NavigationContainer>
  );
};