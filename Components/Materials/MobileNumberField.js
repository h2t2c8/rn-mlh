
import { Image, Alert, Modal, StyleSheet, TextInput, View, Text, Dimensions  } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

let mobCodes = [{ label:' +91 | India', 
                  value: '+91', 
                  icon:()=>(<Image source = {require('./../../assets/flags/india.png')} 
                  style={styles.imgIcon}/>) }];

export function SelectMobileNumber(props){
    const [dropDownState, setDropDownState] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [selectedMobCode, setSelectedMobCode] = useState("+91");
    useEffect(() => { 
        props.onMobileNumberReceived(mobileNumber, selectedMobCode); 
    }, [mobileNumber, selectedMobCode]);

    return (
       <View>
       <Text style={styles.formLabel}>{props.label}</Text>
       <View style={styles.inputGroup}>
         <View style={styles.dropDownView}>
            <DropDownPicker
                open={dropDownState}
                placeholder={selectedMobCode}
                items={mobCodes}
                defaultIndex={0}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                containerStyle={styles.dropDownStyle}
                onPress={()=>setDropDownState(!dropDownState)}
                setValue={(item)=>{ 
                    setSelectedMobCode(item);
                    setDropDownState(!dropDownState); }}  />
         </View>
         <View style={styles.inputTextView}>
          <TextInput style = {styles.selectInputGroup} 
                keyboardType={props.keyboardType}
                secureTextEntry={props.isPassword} 
                maxLength={props.maxLength}
                underlineColorAndroid = "transparent"
                placeholder = {props.placeholder}
                placeholderTextColor = "#000"
                onChangeText={(item)=>{ 
                    setMobileNumber(item);
                }}
                autoCapitalize = {props.autoCapitalize} />
          <View style={styles.inputGroupAddon}>
            {mobileNumber.length>0 && mobileNumber.length===10 && (<Icon style={styles.fieldValid} name="check"></Icon>)}
            {mobileNumber.length>0 && mobileNumber.length<10 && (<Icon style={styles.fieldInvalid} name="times"></Icon>)}
          </View>
       </View>
     </View>
    </View>
    );
}

const styles = StyleSheet.create({
    inputGroup:{ flexDirection:"row" },
    formLabel:{ marginTop:20,marginLeft:5, color:'#333',fontWeight:'bold' },
    dropDownView:{width:'30%', marginTop:10},
    dropDownContainerStyle:{ width:'300%',backgroundColor: '#eee',zIndex: 1000, elevation: 1000 },
    dropDownStyle:{ height: 40 },
    inputTextView:{ width:'58%',flexDirection:'row' },
    selectInputGroup: { width:'100%',height:50, marginLeft:5, marginTop:10, marginRight:-2, borderTopLeftRadius: 8, 
                        borderBottomLeftRadius: 8, borderRightWidth:0, borderColor: '#000', 
                        backgroundColor: 'white', color:'#000', borderWidth:1, paddingLeft:20, 
                        paddingRight:20, paddingTop:8, paddingBottom:8 },
    inputGroupAddon:{ width:'20%',backgroundColor:'#fff',height:50, marginTop:10,
                      borderBottomRightRadius:8, borderTopRightRadius:8, borderColor:'#000', 
                      borderWidth:1, borderLeftWidth:0 },
    imgIcon:{width:30,height:20},
    fieldValid:{ fontSize:22, paddingTop:12, color: 'green' },
    fieldInvalid:{ fontSize:22, paddingTop:12, color: 'red' }
});