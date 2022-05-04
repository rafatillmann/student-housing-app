import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home'
import HomeListScreen from './src/screens/HomeList';
import HomeDetailsScreen from './src/screens/HomeDetails';

export default function App(){

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HomeList" component={HomeListScreen} />
          <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}