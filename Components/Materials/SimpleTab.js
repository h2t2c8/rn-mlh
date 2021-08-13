import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet,Text, Dimensions, ScrollView } from 'react-native';



export default function SimpleTab(props){
let htmlHead =[];
let htmlBody =[];
const [currentIndex, setCurrentIndex] = useState(0);

    props.info.map((data, index)=>{
        htmlHead.push(<Text key={index} 
            style={(index===currentIndex)?styles.TabHeadingHgl:styles.TabHeading}
            onPress={()=>setCurrentIndex(index)}>{data.name}</Text>);
        htmlBody.push(<Text key={index}>{data.value}</Text>);
    })
  //  useEffect(()=>{
  //      htmlHead=[];htmlBody=[];
  //  },[currentIndex]);
    return (
    <View>
        <View style={{paddingTop:15}}>
        <View style={styles.TabHeader}>{htmlHead}</View>
        </View>
        <View style={styles.TabContent}>
       {htmlBody[currentIndex]}
        </View>
    </View>);
}


const styles = StyleSheet.create({
    TabHeader:{flexDirection:'row',borderBottomWidth:1,borderTopWidth:2,borderColor:'#ccc'},
    TabContent:{flexDirection: "row",flexWrap:'wrap'},
    TabHeadingHgl:{color:'blue',paddingTop:10,paddingBottom:10,flex:2,textAlign:'center', fontWeight:'bold',borderBottomWidth:2,borderColor:'blue'},
    TabHeading:{paddingTop:10,paddingBottom:10,flex:2,textAlign:'center',color:'#000', fontWeight:'bold' }
});