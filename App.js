/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigators/Main.Drawer';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
