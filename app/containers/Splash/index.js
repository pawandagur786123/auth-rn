/**
 * @flow
 */

import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {View, Text,StyleSheet} from 'react-native';
// import {NavigationActions,StackActions } from 'react-navigation';
import { CommonActions, StackActions } from '@react-navigation/native';

function SplashScreen(props){
  const navigation = useNavigation()
  console.log("navigation")
  console.log(navigation)
  useEffect(()=>{
      setTimeout( () => {_navigateTo('Login')}, 2000);     
    },[])

  const _navigateTo = (routeName: string) => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { 
                name: routeName
               },
             
            ],
          })
        );  
  }

  // const _navigateTo = (routeName: string) => {
  //   navigation.navigate(routeName)
  // }

    return (
          <View style={styles.container}>
            <View style={styles.textcont}>
            <Text style={{alignSelf:'center',fontFamily:'Arial',fontWeight:'bold',color:'#11137C',fontSize:20}}>Welcome to Wealth Runner Task</Text>
            </View>
          </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        flex:1,
        padding: 30,
    },
    textcont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})


export default SplashScreen;
