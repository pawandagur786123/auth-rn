/**
 * @flow
 */

import React, { useState } from 'react';
import {TextInput, TouchableHighlight, View, Text,StyleSheet } from 'react-native';
// import {CommonActions,StackActions } from 'react-navigation/native';
import { useNavigation } from '@react-navigation/native';
// import {NavigationActions,StackActions } from 'react-navigation';
import { useSelector } from 'react-redux';



function LoginScreen(props){
    const [userName, setUsername] = useState('')
    const [psswd, setPsswd] = useState('')
    const selector = useSelector(state => state)
    const navigation = useNavigation()
    
    const onSignupPress = () =>{
        var login_cred = selector.login
        if(userName == login_cred.username && psswd == login_cred.password){
            _navigateTo('Root')
        }
        else{
            alert("Incorret Password!! Try Again")
        }
    }
    const _navigateTo = (routeName: string) => {
        navigation.navigate(routeName)
    }

    return (
        <View style={styles.container}>
        <View style={styles.textcont}>
            <TextInput
                style={styles.textinput}
                autoFocus={false}
                placeholderTextColor={'black'}
                selectionColor={'#7070D8'}
                placeholder={'Enter your User Name'}
                keyboardType='text'
                maxLength={20}
                onChangeText={(userName) => setUsername(userName)}
            />
            <TextInput 
                secureTextEntry={true} 
                placeholder="Password"
                placeholderTextColor={'black'}
                style={styles.textinput} 
                onChangeText={(psswd) => { setPsswd(psswd)}}
            />
            <TouchableHighlight underlayColor='#fff' style ={styles.button} onPress={() =>onSignupPress()}>
                <Text style={styles.buttontext}>Login</Text>
            </TouchableHighlight>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex:1,
        padding: 30,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    textcont:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textinput: {
        height: 40,
        width: 200,
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:'black',
        fontSize:14,
        margin:10
    },
    button: {
        marginTop:20,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffcc00',
        width: 200,
        padding: 10,
    },
    buttontext:{
        color: '#11127c',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: '#fff',
        textShadowOffset: {width: 4, height: 1},
        textShadowRadius: 10
    },
})




export default LoginScreen;
