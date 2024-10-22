import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/navigation';
import Login from './src/pages/Login';
import ContactAdmin from './src/pages/ContactAdmin';
import Home from './src/pages/Home';
import SetPassword from './src/pages/SetPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator<RootStackParamList>();


const App : React.FC = () => {


  // Load the stored name when the component mounts

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Login' component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name='ContactAdmin' component={ContactAdmin}  options={{ headerShown: false }}/>
        <Stack.Screen name="SetPassword" component={SetPassword}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
