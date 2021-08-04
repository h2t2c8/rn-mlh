import React, {useState} from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; 
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';


function AddressSection(props){
    return (<Drawer.Section style={styles.addressSection}>
        <View>
            <Caption style={styles.address}>Location, Locality, State, Country - 501510</Caption>
        </View>
        <View style={props.accountStatus==='VERIFIED'?styles.accountStatusSuccessView:styles.accountStatusPendingView}>
           <Icons name={props.accountStatus==='VERIFIED'?'checkbox-multiple-marked-circle-outline':'alert-circle'} size={16} color='#555' />
           <Text style={styles.accountStatusText}>{props.accountStatus==='VERIFIED'?'Account Verified':'Pending Account Verification'}</Text>
        </View>
    </Drawer.Section>);
}
export function DrawerContent(props){
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <View style={{marginTop:10}}>
                            <Avatar.Image 
                                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg'}} 
                                size={50} />
                        </View>
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>Narendra Modi</Title>
                            <Text style={styles.userType}>Party Leader</Text>
                        </View>
                    </View>
                </View>

                <AddressSection accountStatus="PENDING" />
                <Drawer.Section>
                    <DrawerItem 
                        icon={({color, size})=><Icons name="home-outline" color={color} size={size} />}
                        label="Home">
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size})=><Icons name="account-outline" color={color} size={size} />}
                        label="Profile">
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size})=><Icons name="bookmark-outline" color={color} size={size} />}
                        label="Bookmarks">
                    </DrawerItem>
                    <DrawerItem  onPress={()=>{props.navigation.navigate('MyBadgeInfo')}}
                        icon={({color, size})=><Icons name="account-outline" color={color} size={size} />}
                        label="My Badges Info">
                    </DrawerItem>
                    <DrawerItem onPress={()=>{props.navigation.navigate('AboutApp')}}
                        icon={({color, size})=><Icons name="cellphone-iphone" color={color} size={size} />}
                        label="About App">
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size})=><Icons name="cog-outline" color={color} size={size} />}
                        label="Settings">
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size})=><Icons name="account-check-outline" color={color} size={size} />}
                        label="Support">
                    </DrawerItem>
                    
                </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size})=><Icons name="exit-to-app" color={color} size={size} />}
                    label="Signout">
                </DrawerItem>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
  drawerContent:{ flex:1 },
  userInfoSection: { paddingLeft:20 },
  title:{ fontSize:16, marginTop:3, fontWeight:'bold' },
  userType:{ fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#b50541', color:'#fff',fontSize:12,lineHeight:14 },
  accountStatusSuccessView:{ marginRight:8,flexDirection:'row',marginLeft:15,alignSelf: 'flex-end',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#d2fda0',borderWidth:1,borderColor:'#555' },
  accountStatusPendingView:{ marginRight:8,flexDirection:'row',marginLeft:15,alignSelf: 'flex-end',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#fdd69d',borderWidth:1,borderColor:'#555' },
  accountStatusText:{marginLeft:5,fontWeight:'bold',color:'#555',fontSize:12,lineHeight:14},
  row:{ marginTop:20, flexDirection:'row', alignItems:'center' },
  column:{ marginTop:20, paddingLeft:10,flexDirection:'column', alignItems:'flex-end' },
  section:{ flexDirection:'row', alignItems:'center', marginRight:15 },
  paragraph:{ fontWeight:'bold',marginRight:3,fontSize:14, lineHeight:14 },
  caption:{fontSize:14, lineHeight:14, padding:5},
  address:{fontSize:14, lineHeight:22, paddingLeft:10},
  addressSection: { marginTop:8 },
  bottomDrawerSection:{ marginBottom:15,borderTopColor:'#f4f4f4',borderTopWidth:1 },
  preferences:{ flexDirection:'row', justifyContent:'space-between', paddingVertical:12, paddingHorizontal:16 }
});