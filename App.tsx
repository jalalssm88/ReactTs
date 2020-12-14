import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {MainStack} from './src/stacks/MainStack';
import {NavigationService} from './src/config'
const App = () => {
  const ref = React.createRef()
  return (
    <>
     <NavigationContainer ref={ref=>NavigationService.setTopLevelNavigator(ref)}>
        <MainStack />
     </NavigationContainer>
    </>
  );
};


export default App;
