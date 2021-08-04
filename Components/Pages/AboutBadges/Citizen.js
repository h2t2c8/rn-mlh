import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Caption } from 'react-native-paper';
import DeviceType from './../../Materials/DeviceType';

export default function CitizenCard(){
    return (
    <View style={styles.cardView}>
    <View style={styles.cardViewContent}>
        <View style={styles.cardViewHeader}>
            <Text style={styles.cardViewTitle}>Citizens</Text>
        </View>
        <View style={styles.cardViewBody}>
            <View style={styles.cardViewIconLayout}>
                <Avatar.Icon size={44} icon="emoticon-excited-outline" />
            </View>
            <View style={styles.cardViewBodyContent}>
                <Caption style={styles.cardViewBodyContentCaption}>
                It is a basic level Badge Title, (by Default), given to the Users who joined the MyLocalHook platform.
                </Caption>
            </View>
        </View>
    </View>
    </View>);
}

let styles;
if(DeviceType()==='MOBILE'){
    styles = StyleSheet.create({
        cardView:{flex:1, margin:8},
        cardViewContent:{borderWidth:1,borderRadius:8,marginTop:5,marginBottom:5,backgroundColor:'#fff'},
        cardViewHeader:{alignItems:'center',justifyContent:'flex-start',marginTop:15},
        cardViewTitle:{fontWeight:'bold',fontSize:16},
        cardViewBody:{flex:1, padding:10, flexDirection:'row'},
        cardViewIconLayout:{flex:0.2,alignItems:'center',justifyContent:'flex-start',paddingTop:10,paddingBottom:10},
        cardViewBodyContent:{flex:0.8},
        cardViewBodyContentCaption:{lineHeight:22,marginBottom:10,fontSize:14}
    });
} else {
    styles = StyleSheet.create({
        cardView:{flex:0.4, margin:8},
        cardViewContent:{borderWidth:1,borderRadius:8,marginTop:5,marginBottom:5,backgroundColor:'#fff'},
        cardViewHeader:{alignItems:'center',justifyContent:'flex-start',marginTop:15},
        cardViewTitle:{fontWeight:'bold',fontSize:16},
        cardViewBody:{flex:1, padding:10, flexDirection:'row'},
        cardViewIconLayout:{flex:0.4,alignItems:'center',justifyContent:'flex-start',paddingTop:10,paddingBottom:10},
        cardViewBodyContent:{flex:0.6},
        cardViewBodyContentCaption:{lineHeight:22,marginBottom:10,fontSize:14}
    });
}