import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home.screen';
import Detail from '../screens/Detail.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: '크다란 스토어'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{title: '크다란 스토어'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
