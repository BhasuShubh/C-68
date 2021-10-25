import * as React from 'react';
import {View, Text} from 'react-native' ;
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer}  from 'react-navigation'
import Fb from './screens/Fb';
import In from './screens/In';
export default class App extends React.Component{
  render()
  {
    return(
      <AppContainer/>
    )
  }
}
const Navigator = createBottomTabNavigator({
  Ds:{screen : Fb},
  Ign : {screen : In}
})
const AppContainer = createAppContainer(Navigator)