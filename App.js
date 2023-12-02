import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import MainTabScreen from './screens/MainTabScreen.js';


import { HomeScreen} from './screens/HomeScreen'
import { DetailsScreen} from './screens/DetailsScreen.js'

// const HomeStack = createNativeStackNavigator();
// const DetailsStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>

     

      
    </NavigationContainer>
  );
}

export default App;