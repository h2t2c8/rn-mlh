import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import AutoCompleteSearch from './../Materials/AutoCompleteSearch';
import { SelectMobileNumber } from './../Materials/MobileNumberField';

export default function Movement() {
  const data =  ["Apple", "ApMax","AppMax","Mango", "Banana", "Orange"];
    return (
      <View style={{ flex: 1, padding:15 }}>
        <SelectMobileNumber 
        label="Enter your Mobile Number"
        placeholder="Mobile Number" 
        keyboardType="phone-pad" 
        maxLength={10} 
        onMobileNumberReceived={()=>{}}/>
        <AutoCompleteSearch 
          data={data} 
          placeholder="Enter AutoComplete Search Field" 
          autoCompleteValue={(value)=>{}}
         />
      </View>
    );
}

//  autoCompleteValue={(value)=>alert(JSON.stringify(value))}