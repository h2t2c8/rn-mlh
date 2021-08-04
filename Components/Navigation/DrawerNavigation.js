import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './../Pages/Home';
import AboutApp from './../Pages/AboutApp';
import MyBadgeInfo from './../Pages/MyBadgeInfo';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props=><DrawerContent {...props}/>}
      drawerStyle={{
        backgroundColor: '#eee',
        width: 240,
      }}
      drawerContentOptions={{activeTintColor:'#000',activeBackgroundColor:'#eee'}}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="AboutApp" component={AboutApp} />
        <Drawer.Screen name="MyBadgeInfo" component={MyBadgeInfo} />
    </Drawer.Navigator>
  );
}