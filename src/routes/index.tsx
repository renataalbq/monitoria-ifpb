import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackAppRoutes} from './stack/stack.routes';

export const AppRoutes = () => {

  return (
    <NavigationContainer>
      <StackAppRoutes />
    </NavigationContainer>
  );
};