import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen} from './screens/HomeScreen'
import { DetailsScreen} from './screens/DetailsScreen.js'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'

const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
      <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle: {
          fontWeight:'bold',
        }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Overview',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress ={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }} />
      </HomeStack.Navigator>
        
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle: {
      fontWeight:'bold',
    }
  }}>
    <Stack.Screen name="Details" component={DetailsScreen} options={{
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress ={() => navigation.openDrawer()}
            ></Icon.Button>
          )
     }} />
  </DetailsStack.Navigator> 
);

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>

     

      
    </NavigationContainer>
  );
}

export default App;