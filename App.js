/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Provider } from 'react-redux';

import DetailPage from './src/DetailPage'
import HomePage from './src/HomePage'
import FavouritePage from './src/FavouritePage'
import store from './src/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTab () {
  return (
    <Tab.Navigator headerMode="none"
    tabBarOptions={{
      activeTintColor: "#f4511e",
      labelStyle:{
        fontSize: 12,
        fontWeight:"bold"
      }
    }}
    >
      <Tab.Screen name ="Home"
        component={HomePage}
        options = {{
          tabBarIcon: ({ focused}) => (
            <MaterialIcons name="home" color={focused? "#f4511e" : "#999999"} size={focused? 35: 25} />
          ),
          tabBarLabel: "Home Page"
        }}
      />
      <Tab.Screen name ="Favourite"
        component={FavouritePage}
        options = {{
          tabBarIcon: ({ focused}) => (
            <MaterialIcons name="favorite-border" color={focused? "#f4511e" : "#999999"} size={focused? 35: 25} />
          ),
          tabBarLabel: "My Favourite(s)"
        }}  
      />
    </Tab.Navigator>
  )
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={MainTab} 
          options={{
            title: 'Flickrr',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf:'center',
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Detail" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store = {store}>
      <App/>
    </Provider>
  )
}
