import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Card1 from './src/Cards/Card1';
import MoreCardDetails from './src/Cards/MoreCardDetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Card1' component={Card1} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='MoreCardDetails' component={MoreCardDetails} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App