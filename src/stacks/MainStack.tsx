import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {InitialStack} from './InitialStack';
import { View, Text } from 'react-native';


export const MainStack = () => {
    const Stack = createStackNavigator();
    const AppStacks = [...InitialStack];
    return(
      <Stack.Navigator 
        initialRouteName={"SplashScren"}
        screenOptions={{
          headerShown:false,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        {AppStacks.map(stack => (
          <Stack.Screen {...stack} />
        ))}
      </Stack.Navigator>
    )
  };
  