import React, {useState} from 'react';
import { StyleSheet, View, Button, Image, ScrollView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import SimpleTab from './../Materials/SimpleTab';
import * as Progress from 'react-native-progress';
import PPI from './Home/PPI';
import Welcome from './Home/Welcome';
import Trend from './Home/Trend';
import { createStackNavigator } from '@react-navigation/stack';
import JoinCadreForm from './PoliticalParty/JoinCadreForm';

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen options={{headerShown: false}} name="Home" component={HomePage} />  
       <HomeStack.Screen name="JoinCadreForm" component={JoinCadreForm} />             
      </HomeStack.Navigator>
     );
   }

function HomePage(props) {
    const HeaderSection = () => {
        return (<View style={styles.homeheader}>
            <View style={styles.homeheaderLeftSection}>
            <Image style={{width:150,height:40,marginTop:10}} source={require('./../../assets/logo-flat.png')} />
            </View>
            <View style={styles.homeheaderRightSection}>
               <TouchableRipple onPress={()=>{ props.navigation.toggleDrawer(); }} >
                   <MaterialIcons name="menu-open" style={styles.iconMenuOpen} size={36} />
               </TouchableRipple>
            </View>
         </View>);
    }

    const TopSection = () => {
        return (<Welcome />);
    }

    const OverviewSection = (props) =>{
        let tabInfo = [{name:'Nadergul', value:<LocationOverviewSection {...props} />},
        {name:'Telangana', value:<TopSection/>},
        { name:'India', value:<TopSection/>}];
        return (<View style={styles.overviewSection}>
            <View style={styles.overviewSectionTab}>
            <View>
                <Text style={styles.overviewSectionTitle}>TRENDING TOPICS AROUND YOU</Text>
            </View>
            <SimpleTab info={tabInfo}/>
            </View>
      </View>);
    }
    
    const LocationOverviewSection = (props) => {
       return (<Trend {...props}/>) 
    }

    return (
      <View style={styles.homeContainer}>
          <HeaderSection/>
          <TopSection/>
          <OverviewSection />
          <StatusBar backgroundColor="#ff5722"  translucent={false}  />
      </View>
    );
}

const styles = StyleSheet.create({ 
 appLogo:{ width:160,height:48,resizeMode:'contain',marginTop:6 },
 homeContainer:{ flex: 1, flexDirection:'column', backgroundColor:'orange' },
 homeheader:{ flex: 1, flexDirection:'row',backgroundColor:'#fff' },
 homeheaderLeftSection:{ flex: 8, backgroundColor:'#fff' },
 homeheaderRightSection:{ flex: 1 },
 iconMenuOpen:{ marginTop:4, paddingTop:6, paddingLeft:4, color:'red' },
 overviewSection:{ flex: 9.5, flexDirection:'row' },
 overviewSectionTab:{flex:2},
 overviewSectionTitle:{textAlign:'center',marginTop:10,fontSize:14,fontWeight:'bold',textTransform:'uppercase',color:'#333'},
});