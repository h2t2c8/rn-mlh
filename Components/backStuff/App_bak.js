
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { InputGroup } from '../Materials';
import AsyncStorage from '@react-native-community/async-storage'
import MobileAuthentication from '../Authentication/MobileAuth';

export default function App() {
 return (<Page/>);
}
export function Page() {

  // const session = useSession();
  // session.setSession({ name: 'Anup' })
  return (
      <MobileAuthentication />
  );
}

const styles = StyleSheet.create({
  formLabel:{ marginTop:20,marginLeft:5, color:'white',fontWeight:'bold'},

  inputGroupLabel:{ width:'10%',marginTop:10,marginBottom:0,marginRight:5,backgroundColor:'white',
  borderTopRightRadius: 20, borderBottomRightRadius: 20, borderWidth:1, borderColor: '#7a42f4', 
  borderLeftWidth:0
},
  
  formInputGroup: { width:'88%',height:50, marginTop:10, marginRight:-1, borderTopLeftRadius: 20,
   borderBottomLeftRadius: 20,borderRightWidth:0,
  borderColor: '#7a42f4', backgroundColor: 'white', borderWidth:1,
  paddingLeft:20, paddingRight:20, paddingTop:8, paddingBottom:8 },

  formInput: { width:'100%',height:50, marginTop:10,
  borderTopLeftRadius: 20, borderTopRightRadius: 20,
  borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
  borderColor: '#7a42f4', backgroundColor: 'white', borderWidth:1, 
  paddingLeft:20, paddingRight:20, paddingTop:8, paddingBottom:8 }
});
