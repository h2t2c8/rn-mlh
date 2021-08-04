import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const AlertField = (props) =>{
 return (<View style={(props.type==='warning')?styles.alertWarningView:styles.alertSuccessView}>
     <Text style={(props.type==='warning')?styles.alertWarningText:styles.alertSuccessText}>
     <Icon style={(props.type==='warning')?styles.alertWarningIcon:styles.alertSuccessIcon} 
     name={(props.type==='warning')?"exclamation-triangle":"check-circle"}></Icon>&nbsp;&nbsp; 
     {props.title}</Text>
 </View>);
};
const styles = StyleSheet.create({ 
    alertWarningView:{ borderWidth:2,borderColor:'#faebcc',borderRadius:8, backgroundColor:'#fcf8e3' },
    alertWarningText:{ fontWeight:'bold', padding:18,color:'#8a6d3b',lineHeight:24} ,
    alertWarningIcon:{ color:'#8a6d3b', fontSize:16 },
    alertSuccessView:{ borderWidth:2,borderColor:'#d6e9c6',borderRadius:8, backgroundColor:'#dff0d8' },
    alertSuccessText:{ fontWeight:'bold', padding:18,color:'#3c763d',lineHeight:24} ,
    alertSuccessIcon:{ color:'#3c763d', fontSize:16 }
});