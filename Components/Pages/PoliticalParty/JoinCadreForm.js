import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple } from 'react-native-paper';

import StackPage from './../../Materials/StackPage';

export default function JoinCadreForm(){
  const isEnabled = false;
  const Details = () =>{
    return (<View>

    <View>
        <View style={{paddingLeft:15,alignItems:'center',marginTop:15 }}>
            <Avatar.Image 
                source={{uri:'https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png'}} 
                size={60} />
        </View>
        <View style={{paddingLeft:15,alignItems:'center',marginTop:15}}>
            <Text style={{textAlign:'left',fontSize:18,fontWeight:'bold',color:'#333'}}>Bharatiya Janata Party</Text>
        </View>
        <View style={{paddingLeft:15,alignItems:'center',marginTop:10}}>
            <Text style={{textAlign:'left',fontSize:14,fontWeight:'bold',color:'#666'}}>Locality, Location, State, Country</Text>
        </View>
    </View>

    <View style={styles.pad15}>
     <View><Text style={styles.label}>Name</Text></View>
     <View style={styles.formInputView}><Text style={styles.formInput}>Name</Text></View>
    </View>

    <View style={styles.pad15}>
        <View><Text style={styles.label}>Where you would like to participate in the Party?</Text></View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>Prime Section</Text>
        </View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>Student Section</Text>
        </View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>Minority Section</Text>
        </View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>Youth Section</Text>
        </View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>BC Section</Text>
        </View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>OC Section</Text>
        </View>
        <View style={styles.formSectionField}>
            <Switch style={styles.appSwitch}
            trackColor={{ false: "#ccc", true: "#ef6e64" }}
            thumbColor={isEnabled ? "#f44336" : "#aaa"}
            ios_backgroundColor="#ef6e64"
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            value={isEnabled}
            />
            <Text style={styles.marginTop}>Other</Text>
        </View>
    </View>

    </View>);
  };
    return (<StackPage title="Join Party Cadre" content = {<Details/>} />);
}


const styles = StyleSheet.create({
    pad15:{padding:15},
    marginTop:{marginTop:10},
    label:{fontWeight:'bold'},
    formInputView:{borderWidth:1,borderColor:'#777',borderRadius:8,padding:10,marginTop:10},
    formInput:{color:'#777'},
    appSwitch:{marginTop:8},
    formSectionField:{alignItems:'flex-start',marginTop:10,flexDirection:'row'},
});