import React, { useState } from 'react';
import { View, Text, TextInput , ScrollView, TouchableOpacity} from 'react-native';
import { NavigationService } from '../../config';

interface ILoginForm {
    email: string;
    password: string;
}

export const LoginScreen: React.FC <ILoginForm> = ()=>{
    const loginData = {
        email:'',
        password:''
    }

    const [login_data, setLoginData] = useState(loginData)
    return(
        <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'gray',
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    height:80,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Logo Here</Text>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:330,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:'#000',
                            paddingHorizontal:15
                        }}
                        placeholder="Email"
                        value = {login_data.email}
                        onChangeText={email=>{
                            setLoginData({...login_data, email})
                        }}
                    />
                </View>

                <View style={{
                    marginTop:15
                }}>
                    <Text>Password</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:330,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:'#000',
                            paddingHorizontal:15
                        }}
                        placeholder="Password"
                        value = {login_data.password}
                        onChangeText={password=>{
                            setLoginData({...login_data, password})
                        }}
                    />
                </View>

                <View style={{
                    marginTop:200
                }}>
                    <TouchableOpacity 
                        style={{
                            height:50,
                            width:330,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:'#000',
                            paddingHorizontal:15,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'blue'
                        }}
                    >
                        <Text style={{
                            color:'white'
                        }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{alignSelf:'center', color:'white'}}>Dont haave account</Text>
                <View style={{
                    marginTop:5,
                    marginBottom:20
                }}>
                    <TouchableOpacity 
                        onPress={()=>{
                            NavigationService.navigate('SignupScreen')
                        }}
                        style={{
                            height:50,
                            width:330,
                            borderRadius:10,
                            borderWidth:1,
                            borderColor:'#000',
                            paddingHorizontal:15,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <Text style={{
                            color:'white'
                        }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}