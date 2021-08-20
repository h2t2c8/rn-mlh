import React from 'react';
import { View, Text } from 'react-native';

export default function PageSwitch(props){
    switch (props.id) {
        case '1':  return (<View><Text>Hi</Text></View>);
        case '2':  return (<View><Text>Hello</Text></View>);
        default:   return (<View><Text>Welcome</Text></View>);
}
}