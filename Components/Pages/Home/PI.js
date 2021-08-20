import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

export default function PI(){
    const userLocation = "Nadergul";
    const PIBadge = () =><View><Text style={styles.trendSectionBadge}>Public Issues</Text></View>
    const PIHeader = () =><View style={styles.trendSectionHeaderView}><Text style={styles.trendSectionHeader}>Top 10 Public Issues of {userLocation}</Text></View>
    const PISupportIssue = (props) => {
        return (<View style={styles.PISupportOpposeData}>
            <View style={styles.PISupportOpposeIndexView}>
                <Text style={styles.PISupportOpposeIndex}>{props.index+1}.</Text>
            </View>
            <View style={styles.PISupportOpposeInfoView}>
                <Text style={styles.PISupportOpposeInfo}>{props.issue}</Text>
                <View style={styles.PISupportOpposeProgressView}>
                    <View style={styles.PISupportOpposeProgressBarView}>
                        <Progress.Bar color='green' width={75} borderColor='green' progress={props.votes/100} />
                    </View>
                    <View style={styles.PISupportOpposeProgressBarTitleView}>
                        <Text style={styles.PISupportProgressBarTitle}>{props.votes}% Votes</Text>
                    </View>
                </View>
            </View>
        </View>);
    }

    const PIOpposeIssue = (props) => {
        return ( <View style={styles.PISupportOpposeData}>
            <View style={styles.PISupportOpposeIndexView}>
                <Text style={styles.PISupportOpposeIndex}>{props.index+1}.</Text>
            </View>
            <View style={styles.PISupportOpposeInfoView}>
                <Text style={styles.PISupportOpposeInfo}>{props.issue}</Text>
                <View style={styles.PISupportOpposeProgressView}>
                    <View style={styles.PISupportOpposeProgressBarView}>
                        <Progress.Bar color='#b52a25' width={75} borderColor='#b52a25' progress={props.votes/100} />
                    </View>
                    <View style={styles.PISupportOpposeProgressBarTitleView}>
                        <Text style={styles.PIOpposeProgressBarTitle}>{props.votes}% Votes</Text>
                    </View>
                </View>
            </View>
        </View>)
    }

    const supportedIssuesData = [{"issue":"Protection of Unborn Lives", "votes":40},
                                 {"issue":"Immigration Reform", "votes":30},
                                 {"issue":"Voting Rights", "votes":30},
                                 {"issue":"Startups and Business Innovations", "votes":30},
                                 {"issue":"Quality Education", "votes":30},
                                 {"issue":"Regulations to Education Institutions Fees", "votes":30}];
    const opposedIssuesData = [{"issue":"Lower Taxes", "votes":40},
                                 {"issue":"Privatization in Healthcare", "votes":30},
                                 {"issue":"Corruption in Govt Organizations", "votes":30},
                                 {"issue":"Increase in Petrol, Diesel and Oil Prices", "votes":30},
                                 {"issue":"Election Fraud", "votes":30},
                                 {"issue":"Increasing Military Forces for National Security", "votes":30},
                                ];
    return (<View style={styles.trendSection}>
        <PIBadge/>
        <PIHeader/>

        
        <View style={styles.PISupportOpposeView}>
            <View style={styles.PISupportView}>
                <View><Text style={styles.PISupportTitle}>Supported Issues</Text></View>
                {supportedIssuesData.map((data,index)=>{
                    return <PISupportIssue key={index} index={index} issue={data.issue} votes={data.votes} />
                })}
                
            </View>
            <View style={styles.PISupportView}>
                <View><Text style={styles.PIOpposeTitle}>Opposed Issues</Text></View>
                {opposedIssuesData.map((data,index)=>{
                    return <PIOpposeIssue key={index} index={index} issue={data.issue} votes={data.votes} />
                })}
            </View>
        </View>
    </View>)
}


const styles = StyleSheet.create({ 
trendSection:{margin:15,borderWidth:1,borderColor:'#ccc',borderRadius:8,padding:15,backgroundColor:'#f1f1f1'},
trendSectionHeaderView:{marginTop:10,alignItems:'center',justifyContent:'center'},
trendSectionHeader:{fontWeight:'bold',fontSize:15,lineHeight:22,color:'blue'},
trendSectionBadge:{borderRadius:8,paddingTop:5,paddingBottom:5, paddingLeft:10,paddingRight:10, fontWeight:'bold', alignSelf: "flex-start", fontSize:11, backgroundColor:'black',letterSpacing:1,color:'#fff'},
PISupportOpposeView:{flex:2,flexDirection:'row',marginTop:10},
PISupportView:{flex:1},
PISupportTitle:{textAlign:'center',fontSize:12,padding:5,fontWeight:'bold',color:'#fff',backgroundColor:'green'},
PISupportOpposeData:{flex:2,flexDirection:'row',marginTop:5},
PISupportOpposeIndexView:{flex:0.30,marginLeft:5},
PISupportOpposeIndex:{fontSize:12,fontWeight:'bold'},
PISupportOpposeInfoView:{flex:1.70},
PISupportOpposeInfo:{fontSize:12,fontWeight:'bold'},
PISupportOpposeProgressView:{flex:2,flexDirection:'row'},
PISupportOpposeProgressBarView:{flex:1, marginTop:5},
PISupportOpposeProgressBarTitleView:{flex:1},
PISupportProgressBarTitle:{fontSize:11,textAlign:'center',fontWeight:'bold',color:'green'},
PIOpposeTitle:{textAlign:'center',fontSize:12,padding:5,fontWeight:'bold',color:'#fff',backgroundColor:'#b52a25'},
PIOpposeProgressBarTitle:{fontSize:11,textAlign:'center',fontWeight:'bold',color:'#b52a25'},
});