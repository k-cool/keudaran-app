import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home.screen';
import DetailScreen from '../screens/Detail.screen';
import NoMoreScreen from '../screens/NoMore.screen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: '상품 리스트'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: '제품 상세'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
