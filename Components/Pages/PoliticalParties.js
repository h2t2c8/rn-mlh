import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JoinCadreForm from './PoliticalParty/JoinCadreForm';

export default function PoliticalParties(props) {
    return (
        <JoinCadreForm/>
    );
}

const styles = StyleSheet.create({ 

});