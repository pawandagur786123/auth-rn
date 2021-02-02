import React from 'react';
import { Provider } from 'react-redux';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../containers/Splash'
import LoginScreen from '../containers/Login'
import HomeScreen from '../containers/Home'
import store from'../store'

const Stack = createStackNavigator();

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator initialRouteName = "Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Root" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}

export default App;