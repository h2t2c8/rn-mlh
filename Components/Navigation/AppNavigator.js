import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DrawerNavigation from './DrawerNavigation';
import Home from './../Pages/Home';
import NewsFeed from './../Pages/NewsFeed';
import PoliticalParties from './../Pages/PoliticalParties';
import Community from './../Pages/Community';
import Movement from './../Pages/Movement';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    let screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <FontAwesome5Icon name="home" size={size} color={color} />;
          } 
          else if (route.name === 'NewsFeed') {
            return <FontAwesomeIcon name="newspaper-o" size={size} color={color} />;
          }
          else if (route.name === 'PoliticalParties') {
            return <MaterialCommunityIcons name="vote" size={size} color={color} />;
          }
          else if (route.name === 'Real') {
            return <MaterialCommunityIcons name="plus-circle" size={36} style={{color:'#ff9800'}} />;
          }
          else if (route.name === 'Community') {
            return <Ionicons name="people-circle" size={size} color={color} />;
          }
          else if (route.name === 'Movement') {
            return <FontAwesome5Icon name="fire" size={size} color={color} />;
          }
          else if (route.name === 'Menu') {
            return <FontAwesomeIcon name="align-justify" size={size} color={color} />;
          }
        },
      });
    const tabBarOptions = {
        labelStyle: { fontSize: 12, margin: 0, padding: 0 },
        style:{ height:45, paddingTop:10, paddingBottom:10, backgroundColor:'#fff', overflow:'scroll' },
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        showLabel:false
      };
    return (
        <NavigationContainer>
          <Tab.Navigator style={styles.TabNavigator}
            initialRouteName="Home"
            screenOptions={screenOptions}
            tabBarOptions={tabBarOptions}>
                <Tab.Screen name="Home" component={DrawerNavigation} />
                <Tab.Screen name="NewsFeed" component={NewsFeed} />
                <Tab.Screen name="PoliticalParties" component={PoliticalParties} />
                <Tab.Screen name="Community" component={Community} />
                <Tab.Screen name="Movement" component={Movement} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({
  TabNavigator:{ fontSize:22 }
});