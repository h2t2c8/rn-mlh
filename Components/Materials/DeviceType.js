import { Dimensions } from 'react-native';

export default function DeviceType(){
    let deviceLayout = { width:Dimensions.get('screen').width, height:Dimensions.get('screen').height };
    if(deviceLayout.width<=480){
        return "MOBILE";
    }
    else if(deviceLayout.width>480 && deviceLayout.width<=768){
        return "TABLET";
    }
    else if(deviceLayout.width>768 && deviceLayout.width<=1024){
        return "SMALL_SCREEN";
    }
    else if(deviceLayout.width>1024 && deviceLayout.width<=1200){
        return "LARGE_SCREEN";
    }
    else if(deviceLayout.width>1200 ){
        return "EXTRA_LARGE_SCREEN";
    }
}