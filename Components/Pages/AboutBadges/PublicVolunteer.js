import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Avatar, Caption } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DeviceType from './../../Materials/DeviceType';

export function PublicVolunteerModal(props){
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}>
           <View style={defaultStyles.modalView}>
            <View style={defaultStyles.modalTitleHeader}>
                <View style={defaultStyles.modalTitleView}>
                    <Text style={defaultStyles.modalTitle}>Public Volunteer</Text>
                </View>
                <View style={defaultStyles.modalIconView}>
                    <FontAwesomeIcon name="close" size={26} color="#000" 
                    onPress={()=>props.setVisible(!props.visible)}/>
                </View>
                
            </View>
            <View style={defaultStyles.modalContent}>
                <View style={{flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16,lineHeight:22}}>
                    What to be done to get "Public Volunteer" Badge Title?
                    </Text>
                </View>
                <View>
                    <Text style={{paddingTop:8,lineHeight:22}}>
                    It is the title provided by the Users based on their activities 
                    performed by them on the platform. The following are the Badge Titles exists 
                    in the platform:
                    </Text>
                </View>
                </View>
            </View>
        </View>
        </Modal>
    );      
}

export default function PublicVolunteer(){
    const [modalVisibility, setModalVisibility] = useState(false);
    return (
    <View style={styles.cardView}>
        <PublicVolunteerModal visible={modalVisibility} setVisible={setModalVisibility} />
    <View style={styles.cardViewContent}>
        <View style={styles.cardViewHeader}>
            <Text style={styles.cardViewTitle}>Public Volunteer</Text>
        </View>
        <View style={styles.cardViewBody}>
            <View style={styles.cardViewIconLayout}>
                <Avatar.Icon size={44} icon="emoticon-excited-outline" />
            </View>
            <View style={styles.cardViewBodyContent}>
                <Caption style={styles.cardViewBodyContentCaption}>
                Individual or a Group of people joining hands together in making a 
                Service Event in an Area will get this "Public Volunteer" Badge Title.
                {/**such as Medical, Education or any Emergency Issue */}
                </Caption>
                <Text style={{fontStyle: 'italic',color:'blue', textAlign:'right'}} 
                onPress={()=>setModalVisibility(!modalVisibility)}>See How it Works?&nbsp;&nbsp;</Text>
            </View>
        </View>
    </View>
    </View>);
}

const defaultStyles = StyleSheet.create({
 modalView:{ flex: 20,flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 20, 
             backgroundColor: "white", borderRadius: 20, padding: 15, alignItems: "center", 
             shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, 
             shadowRadius: 4, elevation: 5 },
 modalTitleHeader:{ flex:1, flexDirection:'row',borderBottomWidth:1, borderBottomColor:'#ccc'},
 modalTitleView:{flex:0.7,alignItems:'center',justifyContent:'flex-start'},
 modalTitle:{fontSize:16,fontWeight:'bold'},
 modalIconView:{flex:0.3,alignItems:'flex-end',justifyContent:'flex-start'},
 modalContent:{ flex:19, padding:10 }
});
let styles;
if(DeviceType()==='MOBILE'){
    styles = StyleSheet.create({
        cardView:{flex:1, margin:8},
        cardViewContent:{borderWidth:1,borderRadius:8,marginTop:5,marginBottom:5,backgroundColor:'#fff'},
        cardViewHeader:{alignItems:'center',justifyContent:'flex-start',marginTop:15},
        cardViewTitle:{fontWeight:'bold',fontSize:16},
        cardViewBody:{flex:1, padding:10, flexDirection:'row'},
        cardViewIconLayout:{flex:0.2,alignItems:'center',justifyContent:'flex-start',paddingTop:10,paddingBottom:10},
        cardViewBodyContent:{flex:0.8},
        cardViewBodyContentCaption:{lineHeight:22,marginBottom:10,fontSize:14}
    });
} else {
    styles = StyleSheet.create({
        cardView:{flex:0.6, margin:8},
        cardViewContent:{borderWidth:1,borderRadius:8,marginTop:5,marginBottom:5,backgroundColor:'#fff'},
        cardViewHeader:{alignItems:'center',justifyContent:'flex-start',marginTop:15},
        cardViewTitle:{fontWeight:'bold',fontSize:16},
        cardViewBody:{flex:1, padding:10, flexDirection:'row'},
        cardViewIconLayout:{flex:0.4,alignItems:'center',justifyContent:'flex-start',paddingTop:10,paddingBottom:10},
        cardViewBodyContent:{flex:0.6},
        cardViewBodyContentCaption:{lineHeight:22,marginBottom:10,fontSize:14}
    });
}