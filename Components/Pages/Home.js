import React, {useState} from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function Home(props) {
    return (
      <View style={styles.homeContainer}>
           {/* Header Section - Start */}
          <View style={styles.homeheader}>
             <View style={styles.homeheaderLeftSection}>
             <Image style={styles.appLogo}
                    source={require('./../../assets/logo-flat.png')} />
             </View>
             <View style={styles.homeheaderRightSection}>
                <TouchableRipple onPress={()=>{ props.navigation.toggleDrawer(); }} >
                    <MaterialIcons name="menu-open" style={styles.iconMenuOpen} size={36} />
                </TouchableRipple>
             </View>
          </View>
          {/* Header Section - End */}
          <View style={{ flex: 4, flexDirection:'row', backgroundColor:'#fff' }}></View>
          <View style={{ flex: 7, flexDirection:'row', backgroundColor:'#fff' }}></View>
          <StatusBar backgroundColor="#ff5722"  translucent={false}  />
      </View>
    );
}

const styles = StyleSheet.create({ 
 appLogo:{ width:160,height:48,resizeMode:'contain',marginTop:5 },
 homeContainer:{ flex: 1, flexDirection:'column', backgroundColor:'#fff' },
 homeheader:{ flex: 1, flexDirection:'row' },
 homeheaderLeftSection:{ flex: 8, backgroundColor:'#fff' },
 homeheaderRightSection:{ flex: 1 },
 iconMenuOpen:{ marginTop:4, paddingTop:6, paddingLeft:4, color:'#333' }
});