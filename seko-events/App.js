import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './app/screens/LogInScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import DetailScreen from './app/screens/DetailScreen';


const Stack = createStackNavigator();

const App = () => {
return (
<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown: false }} >
  <Stack.Screen name='logIn' initialRouteName='signIn'  component={LogInScreen}/>
    <Stack.Screen name='signUp' component={SignUpScreen}/>
    <Stack.Screen name='Dashboard' component={DashboardScreen}/>
    <Stack.Screen name='DetailScreen' component={DetailScreen}/>
  </Stack.Navigator>
</NavigationContainer>
     
)
}

export default App






