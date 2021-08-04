
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { InputGroup } from '../Materials';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

export function PickMobile(){
 return (
    <View style={styles.container}>
    <View style={styles.header}></View>
    <View style={styles.body}>
      <Text style={styles.formLabel}>Email Address</Text>
      <InputGroup placeholder="Enter your Email" />
      <Text style={styles.formLabel}>Account Password</Text>
      <InputGroup placeholder="Enter your Password" isPassword={true} />
    </View>
    <View style={styles.bottom}></View>
    <StatusBar backgroundColor="#ff5722" />
  </View>
 );
}

const styles = StyleSheet.create({ 
    container: { flex: 1, flexDirection:"column", backgroundColor: 'blue' },
    header: { flex:1,backgroundColor: 'darkorange' },
    body:{ flex:4, padding:20 },
    bottom: { flex:1,backgroundColor: 'darkorange' },
    formLabel:{ marginTop:20,marginLeft:5, color:'white',fontWeight:'bold' }
});