import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import AutoCompleteSearch from './../Materials/AutoCompleteSearch';
import { SelectMobileNumber } from './../Materials/MobileNumberField';
import SelectDropdown from './../Materials/SelectDropdown';
import Input from './../Materials/Input';

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
          label="AutoComplete Search"
          data={data} 
          multiSelect={true}
          placeholder="Enter AutoComplete Search Field" 
          onValueReceived={(value)=>{}}
         />
         <SelectDropdown
            label="Dropdown" 
            placeholder="Select Dropdown"
            data={[{ label:' +91 | India', value: '+91' }]} 
            onValueReceived={(value)=>{}} 
          />
          <Input placeholder="Enter Value"/>
      </View>
    );
}

//  autoCompleteValue={(value)=>alert(JSON.stringify(value))}