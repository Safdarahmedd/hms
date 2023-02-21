import 'react-native-gesture-handler'
import React from 'react'
import {View ,Text,Button, TouchableOpacity,StyleSheet} from 'react-native'
import Home from './src/Home'
import {Scene, Router } from 'react-native-router-flux'
import UserHome from './src/Users/Home'
import UserRegister from './src/Users/Register'
import UserLogin from './src/Users/LoginIn'
import Calories from './src/Users/Activities/Calories'
import Reminders from './src/Users/Activities/Reminders'

// import fs from 'fs'r
import * as firebase from 'firebase'

import Config from './config'
import Axios from 'axios'

firebase.initializeApp(Config);
export default class App extends React.Component{


  render(){

  return (
 

    <Router>
      <Scene key="root">
      <Scene key='Home' component={Home} title='Home' initial hideNavBar />
      <Scene key='UserHome' component={UserHome} hideNavBar />
      <Scene key='UserReg' component={UserRegister} hideNavBar />
      <Scene key='UserLogin' component={UserLogin} hideNavBar />
      <Scene key='Reminders' component={Reminders} hideNavBar />
      </Scene>
      </Router>
   

    )

}
}