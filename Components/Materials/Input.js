import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function Input(props){
 const [isValid,setIsValid] = useState(true);
 const [value, setValue] = useState("");
 return (<View style={defaultStyles.inputTextView}>
 <TextInput value={value} onChangeText={(input)=>setValue(input)} style={defaultStyles.inputText} {...props}/>
 <View style={defaultStyles.inputGroupAddon}>
   {value.length>0 && (<FontAwesomeIcon style={defaultStyles.fieldValid} name="check"></FontAwesomeIcon>)}
   {value.length==0 && (<FontAwesomeIcon style={defaultStyles.fieldInvalid} name="times"></FontAwesomeIcon>)}
 </View>
</View>);
}

const defaultStyles = StyleSheet.create({ 
    inputGroupAddon:{ alignItems:'flex-end',width:'20%',backgroundColor:'#fff',height:50, marginTop:10,
                      borderBottomRightRadius:8, borderTopRightRadius:8, borderColor:'#000', 
                      borderWidth:1, borderLeftWidth:0 },
    inputTextView:{ flexDirection:'row' },
    inputText: { width:'80%',height:50, marginTop:10, marginRight:-2, borderTopLeftRadius: 8, 
    borderBottomLeftRadius: 8, borderRightWidth:0, borderColor: '#000', 
    backgroundColor: 'white', color:'#000', borderWidth:1, paddingLeft:20, 
    paddingRight:20, paddingTop:8, paddingBottom:8 },
    fieldValid:{ fontSize:22, paddingTop:12, color: 'green',marginRight:8 },
    fieldInvalid:{ fontSize:22, paddingTop:12, color: 'red',marginRight:8  }
});