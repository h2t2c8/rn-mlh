import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppNavigator from './Components/Navigation/AppNavigator';
import { LogBox } from 'react-native';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

function HomeScreen() {
  const [loaded] = useFonts({
    BoogalooRegular: require('./assets/fonts/Boogaloo-Regular.otf'),
  });
  
  if(!loaded) {
    return null;
  }

  return (
      <View style={{ flex:1, flexDirection:'column', backgroundColor:'#2a2a2a' }}>
      <View style={{ flex:0.55 }}>
        <View style={{}}>
          <View style={{padding:10}}>
          <Text style={{fontSize:18, fontFamily: 'BoogalooRegular', color:'#ffc107'}}>Good Afternoon Anup,</Text>
          <Text style={{fontSize:14,marginTop:4, color:'#555'}}>Location, Locality, State, Country - Zipcode</Text>
        </View>
      </View>
      <View style={{flex:4, backgroundColor:'#eee'}}>
         
      </View>
      <View style={{flex:1, backgroundColor:'#eee'}}>
        <View style={{ alignItems:'center'}}>
          <Text style={{color:'blue',fontWeight:'bold',fontSize:14,padding:8}}>See What's happening in your Location</Text>
        </View>
      </View>
      <View style={{flex:1, backgroundColor:'green'}}></View>
      <View style={{flex:1, backgroundColor:'orange'}}></View>
      <StatusBar backgroundColor="#ff5722"  translucent={false}  />
    </View>
    </View>
  );
}

export default function App() {
  return <AppNavigator />
}

