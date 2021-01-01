import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../containers/Splash'
import LoginScreen from '../containers/Login'
import HomeScreen from '../containers/Home'

import store from'../store'



const StacksOverTabs = createStackNavigator({

    Splash: {
      screen: SplashScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Root: {
        screen: HomeScreen,
    },
    },
    {
      headerMode: 'screen',
    }
);

const AppContainer = createAppContainer(StacksOverTabs);

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;
