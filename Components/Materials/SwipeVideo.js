import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Title } from 'react-native-paper';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

function ScreenVideo(props){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [buttonStatus, setButtonStatus] = React.useState(true);

  useEffect(() => {
     console.log(props.index+" "+props.currentVideoIndex);
      let timer1 = setTimeout(() => setButtonStatus(false), 5000);
      return () => { clearTimeout(timer1); };
  },[buttonStatus]);

  return (<View style={styles.videoContainer}>
    <TouchableOpacity onPress={()=>setButtonStatus(true)}>
    <Video ref={video} style={styles.video}
      source={{ uri: props.url }}
      resizeMode="cover"
      isLooping
      shouldPlay={(props.index===props.currentVideoIndex)?true:false}
      onPlaybackStatusUpdate={status =>setStatus(() => status)}
    />  
    </TouchableOpacity>
    {buttonStatus &&(<View style={{ position:'absolute',width:'100%', flex:6 }}>
    <View style={{flexDirection:'row', flex:2 }}>
      <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
        {(status.isPlaying ?
        <FontAwesomeIcon name="pause" size={48} color="#eee" style={{paddingLeft:50,paddingTop:50,paddingBottom:50}}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }/> : 
        <FontAwesomeIcon name="play" size={48} color="#eee"  style={{paddingLeft:50,paddingTop:50,paddingBottom:50}}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }/>)}
      </View>
      <View style={{flex:0.8, flexDirection:'column',justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <View style={{padding:30}}><FontAwesomeIcon name="arrow-left" size={36} color="#eee" /></View>
        <View style={{padding:30}}><FontAwesomeIcon name="volume-up" size={36} color="#eee" /></View>
        <View style={{padding:30}}><FontAwesomeIcon name="heart" size={36} color="#eee" /></View>
        <View style={{padding:30}}><FontAwesomeIcon name="wechat" size={36} color="#eee" /></View>
        <View style={{padding:30}}><FontAwesomeIcon name="share-alt" size={36} color="#eee" /></View>
      </View>
    </View>  
    <View style={{ flex:4 }}>
      
      <View style={{flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
        <View style={{alignItems:'center',justifyContent:'center',padding:10}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:16}}>
            What is Badge Title? kjkj jhbjhb mnbkjb bkjbk kjnkj knkjn bkj 
            </Text>
        </View>
      </View>

      <View style={{flex: 1, flexWrap: 'wrap',flexShrink: 1}}>
        <View style={{alignItems:'center',justifyContent:'center',paddingLeft:15, paddingRight:15, paddingBottom:10}}>
          <Text style={{color:'white',textAlign:'center',fontSize:14}}>
            What is Badge Title? kjkj jhbjhb mnbkjb bkjbk kjnkj knkjn bkj 
            </Text>
        </View>
      </View>

      <View style={{flex: 2, flexDirection:'row'}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{margin:20}}>

        <Avatar.Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg'}} 
                                size={50} />
                                </View>
            <View style={{ marginLeft:5,marginTop:10, flexDirection:'column', alignItems:'flex-start'}}>
                            <Title style={{color:'white',fontSize:14}}>Narendra Modi</Title>
                            <Text style={styles.userType}>Party Leader</Text>
                        </View>
        </View>
        <View style={{flex: 0.5, margin:15}}>
          <TouchableOpacity></TouchableOpacity>
          <Button title="Subscribe"/>
        </View>
      </View>
      
    </View> 
    </View>)}
    </View>);
}


export default function SwipeVideo(props){
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [scroller, setScroller] = useState();
  const [scrollContentOffset, setScrollContentOffset] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
  const isCloseToTop = ({layoutMeasurement, contentOffset, contentSize}) =>{
    return contentOffset.y == 0;
  };
  return (
    // Change it to FlatList (Dynamic Loading)
    <ScrollView onPress={()=>{ setScrollCount(scrollCount+1);alert(scrollCount);}}
      onScrollBeginDrag={(event)=>{
          setScrollContentOffset(event.nativeEvent.contentOffset.y);
      }}
      onScrollEndDrag={(event)=>{  }}
      ref={(scrollView) => { setScroller(scrollView); }}
      style={styles.container}
      decelerationRate={0}
      snapToInterval={screenHeight}
      snapToAlignment={"center"}
      contentInset={styles.contentInset}>
      {props.data.map((video,index)=><ScreenVideo index={index} 
                                                  currentVideoIndex={currentVideoIndex} 
                                                  url={video} scroller={scroller}/>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  videoContainer:{ flex: 1, justifyContent:'center', backgroundColor:'#000' },
  video: { position:'relative', alignSelf:'center', width:'100%', height:Dimensions.get('screen').height },
  view: { backgroundColor:'blue', width: screenWidth, height: screenHeight },
  view2: { backgroundColor:'red', width: screenWidth, height: screenHeight },
  userType:{ fontWeight:'bold',alignSelf:'flex-start',borderRadius:4, paddingLeft:8, 
              paddingRight:8, paddingTop:5,paddingBottom:5,backgroundColor:'#b50541', 
              color:'#fff',fontSize:12,lineHeight:14 },
  contentInset:{ top: 0, left: 30, bottom: 0, right: 30 }
});
