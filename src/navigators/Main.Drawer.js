import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './Home.Stack';
import RecentListScreen from '../screens/RecentList.screen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="상품 리스트"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="RecentList"
        component={RecentListScreen}
        options={{title: '최근 조회 상품'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
