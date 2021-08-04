import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function PoliticalParties(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={()=>{ props.navigation.toggleDrawer(); }} title="PoliticalParties"/>
      </View>
    );
}

const styles = StyleSheet.create({ 

});