import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import TLL from './TLL';
import PPI from './PPI';
import PI from './PI';

const data = {"userLocation":"Nadergul",
                     "politicalparties":[{"index":1,
                                          "icon":"https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png",
                                          "title":"Bharatiya Janata Party",
                                          "ballotVotes":2999,
                                          "ballotVotePercent":75,
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
                                        "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephant_Bahujan_Samaj_Party.svg/1200px-Elephant_Bahujan_Samaj_Party.svg.png",
                                        "title":"Bahujan Samaj Party",
                                        "ballotVotes":2999,
                                        "ballotVotePercent":55,
                                        "partyVolunteers":800
                                      },
                                      {"index":4,
                                      "icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CPI%28ML%29.svg/1200px-CPI%28ML%29.svg.png",
                                      "title":"Communist Party of India",
                                      "ballotVotes":2999,
                                      "ballotVotePercent":65,
                                      "partyVolunteers":800
                                    },
                                    {"index":5,
                                    "icon":"https://www.trspartyonline.org/wp-content/uploads/2018/10/trs-party-logo-medium.jpg",
                                    "title":"Telangana Rashtra Samithi",
                                    "ballotVotes":2999,
                                    "ballotVotePercent":45,
                                    "partyVolunteers":800
                                  }]};
export default function Trend(props){
 return (<ScrollView style={styles.locationOverviewSectionScroll}>
    <View style={styles.locationOverviewScreen}>
        <View style={styles.locationOverviewScreenView}>
            <TLL/>
            <PI/>
            <PPI {...props} data={data}/>
        </View>
    </View>
</ScrollView>);
}

const styles = StyleSheet.create({ 
locationOverviewSectionScroll:{marginTop:10,borderLeftWidth:1,borderLeftColor:'blue',borderRightWidth:1,borderRightColor:'blue',width:Dimensions.get('screen').width,height:Dimensions.get('screen').height-400, flexGrow: 0.95,paddingBottom:100},
locationOverviewScreen:{paddingLeft:0,paddingRight:0},
locationOverviewScreenView:{flex: 1, flexWrap: 'wrap',flexShrink: 1}
});