import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

interface ISignupForm {
    first_name:string;
    last_name:string;
    email:string;
    gender:string;
    phone_no:number;
    terms_and_condition:boolean;
}

export const SignupScreen: React.FC <ISignupForm> = (props:object)=>{

    const signupData = {
        first_name : '',
        last_name : '',
        email : '',
        gender : '',
        phone_no : '',
        terms_and_condition : ''
    }

    const [signup_data, setSignupForm] = useState (signupData);

    return(
        <View style={{
            flex:1,
            backgroundColor:'gray'
        }}>
            <View style={{
                height:80,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>Logo Here</Text>
            </View>
            <View>
                <View>
                    <Text>First Name</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:350,
                            borderRadius:5,
                            borderWidth:1,
                            borderColor:'#000'
                        }}
                        placeholder="First Name"
                        value = {signup_data.first_name}
                        onChangeText={first_name=>{
                            setSignupForm({...signup_data, first_name:first_name})
                        }}
                    />
                </View>
                <View>
                    <Text>Last Name</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:350,
                            borderRadius:5,
                            borderWidth:1,
                            borderColor:'#000'
                        }}
                        placeholder="First Name"
                        value = {signup_data.last_name}
                        onChangeText={last_name=>{
                            setSignupForm({...signup_data, last_name:last_name})
                        }}
                    />
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:350,
                            borderRadius:5,
                            borderWidth:1,
                            borderColor:'#000'
                        }}
                        placeholder="First Name"
                        value = {signup_data.email}
                        onChangeText={email=>{
                            setSignupForm({...signup_data, email})
                        }}
                    />
                </View>
                <View>
                    <Text>Gender</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:350,
                            borderRadius:5,
                            borderWidth:1,
                            borderColor:'#000'
                        }}
                        placeholder="Gender"
                        value = {signup_data.gender}
                        onChangeText={gender=>{
                            setSignupForm({...signup_data, gender})
                        }}
                    />
                </View>
                <View>
                    <Text>Phone No</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width:350,
                            borderRadius:5,
                            borderWidth:1,
                            borderColor:'#000'
                        }}
                        placeholder="Phone No"
                        value = {signup_data.phone_no}
                        onChangeText={phone_no=>{
                            setSignupForm({...signup_data, phone_no})
                        }}
                    />
                </View>

            </View>
            <Text>Hello signup screen</Text>
        </View>
    )
}