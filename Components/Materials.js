
import { Image, Alert, Modal, StyleSheet, TextInput, View, Text, Dimensions  } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");


export function InputModal(){
return (<Modal  backdropColor="transparent" backdropOpacity={0.5} hasBackdrop={true}
animationType="slide"
transparent={true}
visible={true}
onRequestClose={() => {
  Alert.alert("Modal has been closed.");
  setModalVisible(false);
}}
>
  <View style={styles.centeredView}>
  <View style={styles.modalView}>
    <Text style={styles.modalText}>Hello World!</Text>
    <Text>{ScreenWidth}</Text>
    <Text>{ScreenHeight}</Text>
    
 </View>
 </View>
 </Modal>);
}
export function InputGroup(props){
 let css = { fontSize:22, paddingTop:12, color: props.FieldValidatedColor };
 return (
    <View style={styles.inputGroup}>
    <TextInput style = {styles.inputGroupElement} 
         keyboardType={props.keyboardType}
         secureTextEntry={props.isPassword} 
         maxLength={props.maxLength}
         underlineColorAndroid = "transparent"
         placeholder = {props.placeholder}
         placeholderTextColor = "#9a73ef"
         autoCapitalize = {props.autoCapitalize} />

    <View style={styles.inputGroupAddon}>
      {props.FieldValidated && (
          <Icon style={css} name={props.FieldValidatedIcon}></Icon>
      )}
    </View>
  </View>
 );
}

const styles = StyleSheet.create({
 inputGroup:{ flexDirection:"row" },
 formLabel:{ marginTop:20,marginLeft:5, color:'white',fontWeight:'bold' },
 inputGroupAddon:{ width:'10%',marginTop:10,marginBottom:0,marginRight:5,backgroundColor:'white',
                   borderTopRightRadius: 20, borderBottomRightRadius: 20, borderWidth:1, 
                   borderColor: '#7a42f4', borderLeftWidth:0 },

 inputGroupElement: { width:'88%',height:50, marginTop:10, marginRight:-2, borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,borderRightWidth:0,borderColor: '#7a42f4', 
                      backgroundColor: 'white', color:'#7a42f4', borderWidth:1, paddingLeft:20, paddingRight:20, 
                      paddingTop:8, paddingBottom:8 },
 selectInputGroup: { width:'100%',height:50, marginTop:10, marginRight:-2,
    borderTopLeftRadius: 8,borderBottomLeftRadius: 8,
                      borderRightWidth:0,borderColor: '#000', 
                      backgroundColor: 'white', color:'#000', borderWidth:1, paddingLeft:20, paddingRight:20, 
                      paddingTop:8, paddingBottom:8 },
 centeredView: { flex: 1,justifyContent: "center",alignItems: "center",marginTop: 22 },
 modalView: { margin: 20,backgroundColor: "white",borderRadius: 20,padding: 35,
              alignItems: "center",shadowColor: "#000", shadowOffset: { width: 0,height: 2},
              shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 },
 dropdown: { backgroundColor: 'white',borderBottomColor: 'gray',borderBottomWidth: 0.5,marginTop: 20 },
 shadow: { shadowColor: '#000',shadowOffset: { width: 0,height: 1,}, shadowOpacity: 0.2,
           shadowRadius: 1.41, elevation: 2 },
});