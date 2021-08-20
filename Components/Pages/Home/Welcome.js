import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome(){
    return (<View style={styles.homeTopSection}>
        <View style={styles.homeTopLeftSection}>
            <Text style={styles.userGreetings}>Hi Anup, Good Morning !!!</Text>
            <Text style={styles.userLocationDisplay1}>Nadergul, Ranga Reddy Dist, </Text>
            <Text style={styles.userLocationDisplay2}>Telangana, India - 501510</Text>
        </View>
        <View style={styles.homeTopRightSection}>
            <View style={{}}>
                <Text style={styles.userLocationInfoEditButton}>Change</Text>
            </View>
        </View> 
      </View>);
}

const styles = StyleSheet.create({ 
    homeTopSection: { flex: 2, flexDirection:'row', backgroundColor:'#fff',borderBottomRightRadius:30,borderBottomLeftRadius:30 },
    homeTopLeftSection:{ flex:3,marginLeft:20,marginTop:20 },
    userGreetings:{fontSize:16, fontWeight:'bold',color:'black'},
    userLocationDisplay1:{fontSize:14,paddingTop:4,color:'#555'},
    userLocationDisplay2:{fontSize:14,paddingTop:4,color:'#555'},
    homeTopRightSection:{flex:0.75,marginRight:20,marginTop:40},
    userLocationInfoEditButton:{borderWidth:1,borderRadius:8,color:'green',borderColor:'green',backgroundColor:'#fff',padding:5,textAlign:'center',fontWeight:'bold'}

});