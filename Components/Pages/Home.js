import React, {useState} from 'react';
import { StyleSheet, View, Button, Image, ScrollView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import SimpleTab from './../Materials/SimpleTab';
import * as Progress from 'react-native-progress';
import PPI from './Home/PPI';



export default function Home(props) {
    const HeaderSection = () => {
        return (<View style={styles.homeheader}>
            <View style={styles.homeheaderLeftSection}>
            
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
        return (<View style={styles.overviewSection}>
            <View style={styles.overviewSectionTab}>
            <View>
                <Text style={styles.overviewSectionTitle}>TRENDING TOPICS AROUND YOU</Text>
            </View>
            <SimpleTab info={tabInfo}/>
            </View>
      </View>);
    }
    
    const LocationOverviewSection = () => {
       const data = {"userLocation":"Gurramguda",
                     "politicalparties":[{"index":1,
                                          "icon":"https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png",
                                          "title":"Bharatiya Janata Party",
                                          "ballotVotes":2999,
                                          "ballotVotePercent":45,
                                          "partyVolunteers":800
                                        },
                                        {"index":2,
                                          "icon":"https://yt3.ggpht.com/ytc/AKedOLSebvtwfOQM7wlIymvfcvN6gkhbYPfT0X8w77crGA=s900-c-k-c0x00ffffff-no-rj",
                                          "title":"Indian National Congress",
                                          "ballotVotes":899,
                                          "ballotVotePercent":35,
                                          "partyVolunteers":938
                                        },
                                        {"index":3,
                                        "icon":"https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png",
                                        "title":"Bharatiya Janata Party",
                                        "ballotVotes":2999,
                                        "ballotVotePercent":45,
                                        "partyVolunteers":800
                                      },
                                      {"index":4,
                                      "icon":"https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png",
                                      "title":"Bharatiya Janata Party",
                                      "ballotVotes":2999,
                                      "ballotVotePercent":45,
                                      "partyVolunteers":800
                                    },
                                    {"index":5,
                                    "icon":"https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png",
                                    "title":"Bharatiya Janata Party",
                                    "ballotVotes":2999,
                                    "ballotVotePercent":45,
                                    "partyVolunteers":800
                                  }]};
       return <PPI data={data}/> 
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
 homeheader:{ flex: 1, flexDirection:'row',backgroundColor:'blue' },
 homeheaderLeftSection:{ flex: 8, backgroundColor:'blue' },
 homeheaderRightSection:{ flex: 1 },
 iconMenuOpen:{ marginTop:4, paddingTop:6, paddingLeft:4, color:'#fff' },
 homeTopSection: { flex: 2, flexDirection:'row', backgroundColor:'blue',borderBottomRightRadius:30,borderBottomLeftRadius:30 },
 homeTopLeftSection:{ flex:3,marginLeft:20,marginTop:20 },
 homeTopRightSection:{flex:0.75,marginRight:20,marginTop:40},
 userGreetings:{fontSize:16, fontWeight:'bold',color:'#fff'},
 userLocationDisplay1:{fontSize:14,paddingTop:4,color:'#eee'},
 userLocationDisplay2:{fontSize:14,paddingTop:4,color:'#eee'},
 userLocationInfoEditButton:{borderWidth:1,borderRadius:8,color:'#666',borderColor:'#666',backgroundColor:'#fff',padding:5,textAlign:'center',fontWeight:'bold'},

 overviewSection:{ flex: 9.5, flexDirection:'row', backgroundColor:'#fff' },
 overviewSectionTab:{flex:2},
 overviewSectionTitle:{textAlign:'center',marginTop:10,fontSize:15,fontWeight:'bold',textTransform:'uppercase',color:'blue'},
});