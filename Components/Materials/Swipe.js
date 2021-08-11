import React,{ useState} from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Title } from 'react-native-paper';

export default function Swipe(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageCurrent, setPageCurrent] = useState(1);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [buttonStatus, setButtonStatus] = React.useState(true);
    useEffect(()=>{
        setIsLoading(true);
        getData();
    },[pageCurrent]);

    getData = async() =>{
        const apiURL = "http://192.168.1.5/rest-api/data/info.php";
        fetch(apiURL).then((res)=>res.json())
        .then((resJson)=>{
            console.log(resJson);
            setData(data.concat(resJson));
            setIsLoading(false);
        }).catch(function(error) {
            console.log(error);
        });
    }

    renderItem = ({item}) => {
        console.log(item.url);
  return (<View style={styles.videoContainer}>
    <Video ref={video} style={styles.video}
      source={{ uri: item.url }}
      resizeMode="contain"
      isLooping
      shouldPlay={false}
      onPlaybackStatusUpdate={status =>setStatus(() => status)}
    />
    </View>);
    }

    handleLoadMore = () => {
        alert("handleMore");
        
        setIsLoading(true)
        /* return (isLoading?
        <View style={styles.loader}>
            <ActivityIndicator size="large"  color="#00ff00"/>
        </View>:null) */
    }

    
    renderFooter = () =>{
       // setPageCurrent(pageCurrent+1);
        return (isLoading?
            <View style={styles.loader}>
                <ActivityIndicator size="large"  color="#00ff00"/>
            </View>:null)
    }

    return (<View>
    <FlatList
    style={styles.container}
    data={data}
    renderItem={renderItem}
    keyExtractor={(item, index)=>index.toString()} 
    ListFooterComponent={renderFooter}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={0} />
    </View>);
}

const styles = StyleSheet.create({
    container:{ marginTop: 20, backgroundColor:'#f5fcff' },
    loader:{ marginTop:10, alignItems:'center' },
    videoContainer:{flex: 1, justifyContent: 'center', backgroundColor: '#000' },
    video: { position:'relative', alignSelf: 'center', width:'100%', height:Dimensions.get('screen').height },
  

})