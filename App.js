import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppNavigator from './Components/Navigation/AppNavigator';
import { LogBox } from 'react-native';
import { usePreventScreenCapture } from 'expo-screen-capture';
import SwipeVideo from './Components/Materials/SwipeVideo';


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
  usePreventScreenCapture();
  // return <AppNavigator />
  return <SwipeVideo data={["https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-watch-with-the-stopwatch-running-32808-small.mp4",
"https://assets.mixkit.co/videos/preview/mixkit-avenue-with-trees-buildings-and-fast-cars-at-dusk-34563-small.mp4",
"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"]}/>
}

