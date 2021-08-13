import React, {useState} from 'react';
import { StyleSheet, View, Button, Image, ScrollView, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import * as Progress from 'react-native-progress';

export default function PPI(props) {
    const userLocation = props.data.userLocation;
    const PPIBadge = () =><View><Text style={styles.trendSectionBadge}>Political Parties and their Impact</Text></View>
    const PPHeader = () =><View style={styles.trendSectionHeaderView}><Text style={styles.trendSectionHeader}>Top 10 Political Parties of {userLocation}</Text></View>
    const PPBallotInfo = (props) =>{
        return (<View style={styles.politicalPartyTrendDescBallotView}>
                    <View style={styles.politicalPartyTrendDescBallotIconView}>
                        <FontAwesome5 name="box-tissue" style={styles.politicalPartyTrendDescBallotIcon} size={16} />
                        <Text style={styles.politicalPartyTrendDescBallotText}>Ballot</Text>
                    </View>
                    <View style={styles.politicalPartyTrendDescBallotVoteView}>
                        <Text style={styles.politicalPartyTrendDescBallotVoteText}>{props.ballotVotes} Votes</Text>
                    </View>
                </View>);
    }
    const PPBallotProgress = (props) =>{
        return (<View style={styles.politicalPartyTrendDescBallotProgressView}>
                    <View style={styles.politicalPartyTrendDescBallotProgressBarView}>
                        <Progress.Bar color='green' width={130} borderColor='green' progress={0.3} />
                    </View>
                    <View style={styles.politicalPartyTrendDescBallotProgressBarVoteView}>
                        <Text style={styles.politicalPartyTrendDescBallotProgressBarVoteText}>{props.ballotVotePercent}% Votes</Text>
                    </View>
                </View>);
    }
    const PPVolunteers =  (props) =>{
        return (<View style={styles.politicalPartyTrendDescPartyVolunteerView}>
                    <View style={styles.politicalPartyTrendDescPartyVolunteerLabelView}>
                        <FontAwesome5 name="users" style={styles.politicalPartyTrendDescPartyVolunteerIcon} size={16} />
                        <Text style={styles.politicalPartyTrendDescPartyVolunteerLabel}>Party Volunteers</Text>
                    </View>
                    <View style={styles.politicalPartyTrendDescPartyVolunteerTextView}>
                        <Text style={styles.politicalPartyTrendDescPartyVolunteerText}>{props.partyVolunteers}</Text>
                    </View>
                </View>);
    }
    const PPDetails = () => {
        return (<View style={styles.politicalPartyTrendDescSeeDetailsMainView}>
                    <View style={styles.politicalPartyTrendDescSeeDetailsSubView}>
                        <Text style={styles.politicalPartyTrendDescSeeDetailsText}>SEE DETAILS  </Text>
                        <FontAwesome5 name="arrow-right" style={styles.politicalPartyTrendDescSeeDetailsIcon} size={16} />
                    </View>
                </View>);
    }
    const PPTrendListItem = (props) => {
        return (<View key={props.item.index} style={styles.politicalPartyTrendList}>
            <View style={styles.politicalPartyTrendNumberView}>
                <Text style={styles.politicalPartyTrendNumber}>{props.item.index}.</Text>
            </View>
            <View style={{flex:2.6}}>
                <View style={{flexDirection:'row'}}>
                    <View style={ styles.politicalPartyTrendIcon}>
                        <Avatar.Image source={{uri:props.item.icon}} size={60} />
                    </View>
                    <View style={styles.politicalPartyTrendInfoView}>
                        <Text style={styles.politicalPartyTrendTitle}>{props.item.title}</Text>
                        <PPBallotProgress ballotVotePercent={props.item.ballotVotePercent}/>
                    </View>
                </View>

                
                <View style={styles.politicalPartyTrendDescView}>
                   {/* <PPBallotInfo ballotVotes={props.item.ballotVotes}/>
                       <PPVolunteers partyVolunteers={props.item.partyVolunteers}/> */}
                    <PPDetails />
                </View>

            </View>
           
            
        </View>);
    }
    return (<ScrollView style={styles.locationOverviewSectionScroll}>
        <View style={styles.locationOverviewScreen}>
            <View style={styles.locationOverviewScreenView}>
                <View style={styles.trendSection}>
                    <PPIBadge/>
                    <PPHeader/>
                    {props.data.politicalparties.map((detail, index)=>{
                        return <PPTrendListItem item={detail} />
                    })}
                    
                    
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

const styles = StyleSheet.create({ 
locationOverviewSectionScroll:{backgroundColor:'#f5f0ea',width:Dimensions.get('screen').width,height:Dimensions.get('screen').height-400, flexGrow: 0.95,paddingBottom:100},
locationOverviewScreen:{paddingLeft:0,paddingRight:0},
locationOverviewScreenView:{flex: 1, flexWrap: 'wrap',flexShrink: 1},
trendSection:{borderWidth:1,borderColor:'#ccc',padding:15},
trendSectionHeaderView:{marginTop:10,alignItems:'center',justifyContent:'center'},
trendSectionHeader:{fontWeight:'bold',fontSize:15,lineHeight:22,color:'blue'},
 trendSectionBadge:{borderRadius:8,paddingTop:5,paddingBottom:5, paddingLeft:10,paddingRight:10, fontWeight:'bold', alignSelf: "flex-start", fontSize:11, backgroundColor:'#555',letterSpacing:1,color:'#fff'},
 /**/politicalPartyTrendList:{flex:3,flexDirection:'row',marginTop:15},
 politicalPartyTrendNumberView:{flex:0.4},
 politicalPartyTrendNumber:{textAlign:'right',fontSize:26,fontWeight:'bold'},
 politicalPartyTrendIcon:{flex:0.5,paddingLeft:15},
 politicalPartyTrendInfoView:{flex:2.1,paddingLeft:15,marginTop:5},
 politicalPartyTrendTitle:{textAlign:'left',fontSize:16,fontWeight:'bold',color:'#000'},
   
 politicalPartyTrendDescView:{marginTop:8},
 politicalPartyTrendDescBallotView:{flex:2,flexDirection:'row',padding:8,backgroundColor:'#eee',
                borderLeftWidth:1,borderLeftColor:'#ccc',borderRightWidth:1,borderRightColor:'#ccc'},
 politicalPartyTrendDescBallotIconView:{flex:0.75,flexDirection:'row'},
 politicalPartyTrendDescBallotIcon:{color:'#555'},
 politicalPartyTrendDescBallotText:{fontWeight:'bold',fontSize:14,paddingLeft:5,color:'#555'},
 politicalPartyTrendDescBallotVoteView:{flex:1.25,marginTop:1},
 politicalPartyTrendDescBallotVoteText:{color:'green',textAlign:'right',fontWeight:'bold'},
 politicalPartyTrendDescBallotProgressView:{flex:1.25,flexDirection:'row',marginTop:5},
 politicalPartyTrendDescBallotProgressBarView:{flex:0.75,padding:8},
 politicalPartyTrendDescBallotProgressBarVoteView:{flex:0.5,paddingRight:8},
 politicalPartyTrendDescBallotProgressBarVoteText:{textAlign:'right',fontWeight:'bold',color:'green'},
 politicalPartyTrendDescPartyVolunteerView:{flex:2,flexDirection:'row',padding:8,borderTopWidth:1,borderTopColor:'#ccc',
                                backgroundColor:'#eee',borderLeftWidth:1,borderLeftColor:'#ccc',borderRightWidth:1,borderRightColor:'#ccc'},
politicalPartyTrendDescPartyVolunteerLabelView:{flex:1.2,flexDirection:'row',marginTop:8,marginBottom:8},
politicalPartyTrendDescPartyVolunteerIcon:{color:'#555',paddingTop:2},
politicalPartyTrendDescPartyVolunteerLabel:{fontWeight:'bold',fontSize:14,paddingLeft:5,color:'#555'},
politicalPartyTrendDescPartyVolunteerTextView:{flex:0.8,marginTop:8},
politicalPartyTrendDescPartyVolunteerText:{textAlign:'right',fontWeight:'bold',color:'green'},

politicalPartyTrendDescSeeDetailsMainView:{paddingTop:8,paddingBottom:8},
politicalPartyTrendDescSeeDetailsSubView:{marginTop:5,flexDirection:'row',justifyContent:'flex-end'},
politicalPartyTrendDescSeeDetailsText:{textAlign:'right',letterSpacing:1.5,fontWeight:'bold',color:'blue'},
politicalPartyTrendDescSeeDetailsIcon:{color:'blue',paddingLeft:5,paddingTop:3}

});