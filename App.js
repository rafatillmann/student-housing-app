import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home'
import ContactListScreen from './HomeList';
import ContactDetailsScreen from './HomeDetails';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ContactList: {screen: ContactListScreen},
  ContactDetails: {screen: ContactDetailsScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;