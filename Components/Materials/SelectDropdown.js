import { View, StyleSheet, Text  } from 'react-native';
import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SelectDropdown(props){
    const [dropDownState, setDropDownState] = useState(false);
    const [selectInputField, setSelectInputField] = useState(props.placeholder);
    useEffect(() => { 
        props.onValueReceived(selectInputField);
    }, [selectInputField]);
    return (
        <View>
            <Text style={defaultStyles.labelForm}>{props.label}</Text>
            <DropDownPicker
                open={dropDownState}
                {...props}
                containerStyle={{zIndex:-1}}
                items={props.data}
                placeholder={selectInputField}
                defaultIndex={0}
                onPress={()=>{ setDropDownState(!dropDownState);}}
                setValue={(item)=>{ 
                    setSelectInputField(item);
                    setDropDownState(!dropDownState); }}  />
         </View>
    );
}


const defaultStyles = StyleSheet.create({ 
    labelForm:{marginTop:10,marginBottom:8,fontWeight:'bold'}
});