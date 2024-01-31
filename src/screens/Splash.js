import React from 'react';
import { ActivityIndicator, View } from "react-native";

const Splash =()=>{
    return(
        <View style={{flex:1,justifyContent:'center',backgroundColor:'#06bcee'}}>
   <ActivityIndicator size='large' color="#fff" />
        </View>
    )
}
export default Splash;