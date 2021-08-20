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
    TabHeader:{flexDirection:'row'},
    TabContent:{flexDirection: "row",flexWrap:'wrap',backgroundColor:'#fff',marginTop:-1},
    TabHeadingHgl:{borderTopLeftRadius:8,borderLeftWidth:1,borderLeftColor:'#fff',backgroundColor:'#fff',
    borderTopRightRadius:8,borderRightWidth:1,borderRightColor:'#fff',
                    borderTopWidth:1,borderTopColor:'#fff',color:'#333',paddingTop:10,paddingBottom:10,flex:2,textAlign:'center', fontWeight:'bold'},
    TabHeading:{borderBottomWidth:2,borderBottomColor:'#fff',paddingTop:10,paddingBottom:10,flex:2,textAlign:'center',color:'#000', fontWeight:'bold' }
});