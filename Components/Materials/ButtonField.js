import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export const ButtonField = (props) => (
    <View style={styles.appButtonContainer}>
        <TouchableOpacity onPress={props.onPress} style={styles.appButtonTouch}>
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({ 
    appButtonContainer:{width:'100%', alignItems:'flex-end'},
    appButtonTouch: { borderColor:'#000', borderWidth:1, backgroundColor: "#fff", borderRadius: 10, paddingVertical: 12, paddingHorizontal: 14 },
    appButtonText: { fontSize: 14, fontWeight:'bold', color: "#000", alignSelf: "center" }
});