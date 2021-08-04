import { StyleSheet, Text, View, Switch } from 'react-native';
import React, {useState} from 'react';

export const SignUpUserAgreement = (props) => {
    const [isEnabled, setIsEnabled]  = useState(true);
    return (
        <View style={styles.appSwitchContainer}>
        <Switch style={styles.appSwitch}
           trackColor={{ false: "#ccc", true: "#ef6e64" }}
           thumbColor={isEnabled ? "#f44336" : "#aaa"}
           ios_backgroundColor="#ef6e64"
           onValueChange={()=>{setIsEnabled(!isEnabled)}}
           value={isEnabled}
        />
        <View style={styles.appSwitchView}>
            <Text style={styles.appSwitchText}>I agree to the App </Text>
            <Text style={styles.appSwitchTextHgl}>User Agreement</Text> 
            <Text style={styles.appSwitchText}>  and </Text>
            <Text style={styles.appSwitchTextHgl}>Privacy Policy</Text>
            <Text style={styles.appSwitchText}>.</Text>
        </View>
       </View>);
};

const styles = StyleSheet.create({ 
    appSwitchContainer:{ flexDirection:'row', margin:18, width:'100%', alignItems:'flex-start' },
    appSwitch:{marginTop:8},
    appSwitchView:{paddingLeft:10,width:'80%', flexDirection:'row', flexWrap:'wrap'},
    appSwitchText:{color:'#333'},
    appSwitchTextHgl:{color:'#000',fontWeight: 'bold', textDecorationLine: 'underline'}

});