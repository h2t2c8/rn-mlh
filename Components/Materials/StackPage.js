import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableRipple } from 'react-native-paper'

export default function StackPage(props){
    return (
    <View style={styles.aboutStackContainer}>
        <View style={styles.aboutStackHeader}>
            <TouchableRipple onPress={()=>props.navigation.goBack()}>
                <View style={styles.aboutStackHeaderContent}>
                    <FontAwesomeIcon name="chevron-left" size={26} color="#000" />
                    <Text style={styles.aboutStackHeaderTitle}>{props.title}</Text>
                </View>
            </TouchableRipple>
        </View>
        <View style={styles.aboutStackBody}>
        {props.content}
        </View>
    </View>);
} 

const styles = StyleSheet.create({
  aboutStackContainer:{ flex:1 },
  aboutStackHeader:{ flex:1, backgroundColor:'#eee',borderBottomWidth:1,borderBottomColor:'#ddd'},
  aboutStackHeaderContent:{padding:10, flexDirection:'row'},
  aboutStackHeaderTitle:{paddingLeft:10, fontSize:16,fontWeight:'bold'},
  aboutStackBody:{ flex:16, backgroundColor:'#ddd'}
});