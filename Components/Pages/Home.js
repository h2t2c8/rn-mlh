import React, {useState} from 'react';
import { StyleSheet, View, Button, Image, ScrollView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import SimpleTab from './../Materials/SimpleTab';


export default function Home(props) {
    const HeaderSection = () => {
        return (<View style={styles.homeheader}>
            <View style={styles.homeheaderLeftSection}>
            <Image style={styles.appLogo}
                   source={require('./../../assets/logo-flat.png')} />
            </View>
            <View style={styles.homeheaderRightSection}>
               <TouchableRipple onPress={()=>{ props.navigation.toggleDrawer(); }} >
                   <MaterialIcons name="menu-open" style={styles.iconMenuOpen} size={36} />
               </TouchableRipple>
            </View>
         </View>);
    }

    const TopSection = () => {
        return (<View style={styles.homeTopSection}>
        <View style={styles.homeTopLeftSection}>
            <Text style={styles.userGreetings}>Hi Anup, Good Morning !!!</Text>
            <Text style={styles.userLocationDisplay1}>MinLocation, Location, </Text>
            <Text style={styles.userLocationDisplay2}>State, Country - 501510</Text>
        </View>
        <View style={styles.homeTopRightSection}>
            <View style={{}}>
                <Text style={styles.userLocationInfoEditButton}>Edit</Text>
            </View>
        </View>
        
      </View>);
    }

    const OverviewSection = () =>{
        let tabInfo = [{name:'Location', value:<LocationOverviewSection/>},
        {name:'Telangana', value:<TopSection/>},
        { name:'India', value:<TopSection/>}];
        return (<View style={{ flex: 9.5, flexDirection:'row', backgroundColor:'#fff' }}>
            <View style={{flex:2}}>
            <View>
                <Text style={{textAlign:'center',marginTop:10,fontSize:16,fontWeight:'bold'}}>What's Happening and Trending?</Text>
            </View>
            <SimpleTab info={tabInfo}/>
            </View>
      </View>);
    }
    
    const LocationOverviewSection = () => {
        return (<ScrollView style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').height, flexGrow: 0.95}}>
        <View style={{paddingLeft:0,paddingRight:0}}>
            <View style={{flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
                <View style={{borderWidth:1,borderColor:'#ccc',padding:15}}>
                    <View>
                        <Text style={{borderRadius:8,paddingTop:5,paddingBottom:5, paddingLeft:10,paddingRight:10, fontWeight:'bold', alignSelf: "flex-start", fontSize:11, backgroundColor:'#555',letterSpacing:1,color:'#fff'}}>
                            Politics and their Impact
                        </Text>
                    </View>
                    <View style={{flex:3,flexDirection:'row',marginTop:15, backgroundColor:'#fff'}}>
                        <View style={{flex:0.6, backgroundColor:'#fff'}}>
                            <Text style={{textAlign:'right',fontSize:28,fontWeight:'bold'}}>1.</Text>
                        </View>
                        <View style={{flex:0.6,paddingLeft:15, backgroundColor:'#fff'}}>
                            <Avatar.Image 
                                source={{uri:'https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png'}} 
                                size={60} />
                        </View>
                        <View style={{flex:1.8,paddingLeft:15, backgroundColor:'#fff'}}>
                            <Text style={{textAlign:'left',fontSize:16,fontWeight:'bold',color:'#555'}}>Bharatiya Janata Party</Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize:15,lineHeight:22}}>
                            What is Badge Title? What is Badge Title?  What is Badge Title? 
                            What is Badge Title? What is Badge Title? What is Badge Title? 
                        </Text>
                    </View>
                </View>
            </View>
            </View>
            </ScrollView>);
    }

    return (
      <View style={styles.homeContainer}>
          <HeaderSection/>
          <TopSection/>
          <OverviewSection/>
          <StatusBar backgroundColor="#ff5722"  translucent={false}  />
      </View>
    );
}

const styles = StyleSheet.create({ 
 appLogo:{ width:160,height:48,resizeMode:'contain',marginTop:6 },
 homeContainer:{ flex: 1, flexDirection:'column', backgroundColor:'#fff' },
 homeheader:{ flex: 1, flexDirection:'row' },
 homeheaderLeftSection:{ flex: 8, backgroundColor:'#fff' },
 homeheaderRightSection:{ flex: 1 },
 iconMenuOpen:{ marginTop:4, paddingTop:6, paddingLeft:4, color:'#333' },
 homeTopSection: { flex: 2, flexDirection:'row', backgroundColor:'#4e4e4e' },
    homeTopLeftSection:{ flex:3,marginLeft:20,marginTop:20 },
    homeTopRightSection:{flex:0.75,marginRight:20,marginTop:40},
    userGreetings:{fontSize:16, fontWeight:'bold',color:'#fff'},
    userLocationDisplay1:{fontSize:14,paddingTop:4,color:'#eee'},
    userLocationDisplay2:{fontSize:14,paddingTop:4,color:'#eee'},
    userLocationInfoEditButton:{borderWidth:1,borderRadius:8,color:'#666',borderColor:'#666',backgroundColor:'#fff',padding:5,textAlign:'center',fontWeight:'bold'}

});