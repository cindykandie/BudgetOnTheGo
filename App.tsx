import React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import BudgetScreen from './screens/BudgetScreen';
import TrackExpenseScreen from './screens/TrackExpenseScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ title: 'Hey There!' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Hey There! Welcome Back' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Hey There! Welcome' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Budget" component={BudgetScreen} options={{ title: 'Budget' }} />
        <Stack.Screen name="TrackExpense" component={TrackExpenseScreen} options={{ title: 'Track Your expenses' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;