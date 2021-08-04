
import { StyleSheet, Image, Text, View, Switch } from 'react-native';
import { SelectMobileNumber } from './../Materials/MobileNumberField';
import { ButtonField } from './../Materials/ButtonField';
import { SignUpUserAgreement } from './../Materials/SignUpUserAgreement';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { AlertField } from './../Materials/AlertField';

const IMG_LOGO = require('./../../assets/logo-flat.png');
const IMG_WELCOME = require('./../../assets/illustration/welcome1.png');

export default function MobileAuthentication(){
  const [val, setVal] = useState("");
  let onMobileNumberReceived=(mobileNumber, selectedMobCode)=>{
   setVal(selectedMobCode+"-"+mobileNumber);
  };
 return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source = {IMG_LOGO} style={styles.applogoImg} />
      </View>
    <View style={styles.body}>
      <View style={styles.appDescTitleView}>
        <Text style={styles.appDescTitle}>Discover the World Around You</Text>
      </View>
      <Image source = {IMG_WELCOME} style={styles.appWelcomeImg} />
      <View style={styles.appDescView}>
        <Text style={styles.appDesc1}>Gather People, Create a Community,</Text>
        <Text style={styles.appDesc2}>Become a Stronger at your ZipCode.</Text>
      </View>
    </View>
    <View style={styles.bottom}>
      <View style={styles.appSignUpHeaderView}>
        <Text style={styles.appSignUpHeading}>SIGN UP / LOGIN INTO YOUR ACCOUNT</Text>
      </View>
      <View style={styles.appSignUpForm}>
        <AlertField type="warning" title="Please Enter your Valid Mobile Number"/>
      <SelectMobileNumber 
        label="Enter your Mobile Number"
        placeholder="Mobile Number" 
        keyboardType="phone-pad" 
        maxLength={10} 
        onMobileNumberReceived={onMobileNumberReceived}
      />
      <SignUpUserAgreement />
      <ButtonField title="Validate My Mobile" />
      </View>

    </View>
    <StatusBar backgroundColor="#ff5722" />
  </View>
 );
}

const styles = StyleSheet.create({ 
    container: {flex:1, flexDirection:"column" },
    header: { flex:1, justifyContent:'center',alignItems:'center' },
    body:{ flex:2.2,backgroundColor:'#fff', justifyContent: "center", alignItems: "center" },
    bottom: { flex:3,backgroundColor:'#fbbda9' },
    applogoImg: { resizeMode:'contain',width:'38%', marginTop:'10%' },
    appDescTitleView: { flex:1 },
    appDescTitle:{ fontSize:20,fontWeight:'bold',color:'#333',marginTop:15 },
    appWelcomeImg:{ resizeMode:'contain',width:'28%',flex:2, marginTop:3 },
    appDescView:{ flex:1, padding:30,flexDirection:'column' },
    appDesc1:{ color:'#333',fontSize:16 },
    appDesc2:{ color:'#333',fontSize:16,marginTop:2 },
    appSignUpHeaderView:{ justifyContent:'center',alignItems:'center', backgroundColor:'#e03600',borderTopWidth:2,borderTopColor:'#eee' },
    appSignUpHeading:{ paddingBottom:12, paddingTop:12, fontWeight:'bold',color:'#fff' },
    appSignUpForm:{ borderRadius:10, marginTop:15, paddingLeft:20,paddingRight:20,paddingBottom:25 }
});