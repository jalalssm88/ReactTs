import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationService } from '../../config';

export const SplashScreen = ()=>{
    useEffect(()=>{
        setTimeout(() => {
            NavigationService.reset_0('LoginScreen')
        }, 3000);
    }, [])
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'blue'
        }}>
            <Text style={{
                color:'#fff',
                fontSize: 20
            }}>Splash Screen</Text>
        </View>
    )
}