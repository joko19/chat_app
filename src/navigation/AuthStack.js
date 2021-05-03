import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './../component/Register';
import LoginScreen from './../component/Login';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator initialRouteName='Login' headerMode='none'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
      </Stack.Navigator>
    );
  }
