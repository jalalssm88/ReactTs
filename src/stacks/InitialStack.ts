import { exp } from 'react-native-reanimated';
import {SplashScreen, SignupScreen, LoginScreen} from '../containers';

export const InitialStack = [
    {
        name:'SplashScreen',
        component: SplashScreen,
        key: 'SplashScreen'
    },
    {
        name:'SignupScreen',
        component: SignupScreen,
        key: 'SignupScreen'
    },
    {
        name:'LoginScreen',
        component: LoginScreen,
        key: 'LoginScreen'
    }
]