import React from 'react';
import { View, Text, StyleSheet, Modal, SafeAreaView, Dimensions, FlatList , ScrollView  } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableRipple, Avatar, Caption, Card, Title, Paragraph } from 'react-native-paper'
import StackPage from './../Materials/StackPage';
import SimpleTab from './../Materials/SimpleTab';
import PublicVolunteer from './AboutBadges/PublicVolunteer';
import DeviceType from './../Materials/DeviceType';
import CitizenCard from './AboutBadges/Citizen';

let tabInfo = [{name:'My Badges', value:<Tab1Content/>},
               { name:'About Badges', value:<AboutBadgeContent/>}];

function Tab1Content(props){
    return(<View>
        <Text>Hi, This is Tab-1 Content</Text>
    </View>);
}

function SocialActivist(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>Social Activist</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}

function RisingLeader(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>Rising Leader</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}


function PartyVolunteer(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>Party Volunteer</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}

function PartyLeader(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>PartyLeader</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}

function LocalLeader(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>Local Leader</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}

function StateLeader(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>State Leader</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}

function NationalLeader(){
    return (<View style={styles.cardView}>
    <View style={styles.cardTitleView}>
        <Text style={styles.cardTitle}>National Leader</Text>
    </View>
    <View style={styles.cardContentView}>
        <View style={styles.cardIconView}>
        <Avatar.Icon size={44} icon="emoticon-excited-outline" />  
        </View>
        <View style={styles.cardSubTitleView}>
           <Caption style={styles.cardSubTitle}>
            It is a basic level Badge {'\n'}
            Title (Default) given to {'\n'}
            the Users who joined the {'\n'}
            MyLocalHook platform.{'\n'}
            </Caption>
        </View>
    </View>
</View>);
}




function AboutBadgeContent(props){
    return (
    <ScrollView style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').height, flexGrow: 0.95}}>
        <View style={{paddingLeft:15,paddingRight:15}}>
            <View style={{flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>What is Badge Title?</Text>
                </View>
                <View>
                    <Text style={{paddingTop:8,lineHeight:22}}>
                    It is the title provided by the Users based on their activities 
                    performed by them on the platform. The following are the Badge Titles exists 
                    in the platform:
                    </Text>
                </View>
                <View style={styles.badges}>
                    <CitizenCard/>
                    <PublicVolunteer/>
                </View>
                <View style={styles.badges}>
                    <CitizenCard/>
                    <PublicVolunteer/>
                </View>
                
                
                



            </View>
        </View>
    </ScrollView>
    );
    {/*return(
    <View style={{backgroundColor:'blue'}}>
        <Text style={styles.badgeTitle}>What is a Badge Title?</Text>
        <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
            <Text>
            It is the title provided by the Users based on their activities 
            performed by them on the platform. The following are the Badge Titles exists 
            in the platform:
            {/*It is the title provided by the Users based on their {'\n'}activities 
            performed by them on the platform. {'\n'}{'\n'}The following are the Badge Titles exists 
            in the  {'\n'}platform:
            </Text>
            <View style={{marginBottom:350}}>
                <CitizenCard/>
                <PublicVolunteer/>
                <SocialActivist/>
                <RisingLeader/>
                <PartyVolunteer/>
                <PartyLeader/>
                <LocalLeader/>
                <StateLeader/>
                <NationalLeader/>
            </View>
       </View>   
        </View>);*/}
}

function PageContent(props){
   return (<SimpleTab info={tabInfo}/>);
}

export default function MyBadgeInfo(props){
    return (<StackPage title="MyBadgeInfo" content={<PageContent/>} {...props} />);
} 


let styles;
if(DeviceType()==='MOBILE'){
    styles = StyleSheet.create({
         badges:{flex:1,flexDirection:'column'}
    });
} else {
    styles = StyleSheet.create({
        badges:{flex:1,flexDirection:'row'}
    });
}


{/*badgeTitle:{marginTop:15,textAlign:'center',fontSize:16,fontWeight:'bold'},
    badgeDescView:{marginTop:8},
    badgeDesc:{lineHeight:22},
    cardView:{marginTop:15,flexDirection:'column',borderWidth:1,borderColor:'#ccc',backgroundColor:'#fff', borderRadius:8},
    cardTitleView:{alignItems:'center',justifyContent:'flex-start',marginTop:15},
    cardTitle:{fontWeight:'bold',fontSize:16},
    cardContentView:{flex:6,flexDirection:'row',padding:10},
    cardIconView:{flex:3,alignItems:'center',justifyContent:'flex-start',paddingTop:10,paddingBottom:10},
    cardSubTitleView:{flex:3, marginBottom:15},
    cardSubTitle:{fontSize:14} */}