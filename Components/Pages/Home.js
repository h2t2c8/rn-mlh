import React, {useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function Home(props) {
    return (
      <View style={styles.homeContainer}>
           {/* Header Section - Start */}
          <View style={styles.homeheader}>
             <View style={styles.homeheaderLeftSection}></View>
             <View style={styles.homeheaderRightSection}>
                <TouchableRipple onPress={()=>{ props.navigation.toggleDrawer(); }} >
                    <MaterialIcons name="menu-open" style={styles.iconMenuOpen} size={36} color='#333' />
                </TouchableRipple>
             </View>
          </View>
          {/* Header Section - End */}
          <View style={{ flex: 4, flexDirection:'row', backgroundColor:'#eee' }}></View>
          <View style={{ flex: 7, flexDirection:'row', backgroundColor:'#eee' }}></View>
          <StatusBar backgroundColor="#ff5722"  translucent={false}  />
      </View>
    );
}

const styles = StyleSheet.create({ 
 homeContainer:{ flex: 1, flexDirection:'column', backgroundColor:'#eee' },
 homeheader:{ flex: 1, flexDirection:'row' },
 homeheaderLeftSection:{ flex: 8, backgroundColor:'#eee' },
 homeheaderRightSection:{ flex: 1 },
 iconMenuOpen:{ paddingTop:6, paddingLeft:6, color:'#b50541' }
});