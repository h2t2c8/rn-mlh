import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableRipple } from 'react-native-paper'
import StackPage from './../Materials/StackPage';

function PageContent(props){
   return (
    <View>
        <Text style={{lineHeight:24, textAlign:'left'}}>
            {'      '}MyLocalHook is a Platform for Unions and Associations, Social Activists, Local Leaders and Political Parties 
            to make themselves stronger in gathering and communicating with people to acheive their goals.
        </Text>
    </View>);
}

export default function AboutApp(props){
    return (<StackPage title="About MyLocalHook" content={<PageContent/>} {...props} />);
} 

const styles = StyleSheet.create({
});