import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/Home'
import HomeListScreen from './src/screens/HomeList';
import HomeDetailsScreen from './src/screens/HomeDetails';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  HomeList: {screen: HomeListScreen},
  HomeDetails: {screen: HomeDetailsScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;