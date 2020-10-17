import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationProps } from 'movie-night';
import Home from '../screens/Home';
import ScreenOptions from '../components/Navigation';

const Stack = createStackNavigator<NavigationProps>();

const Navigation: React.FC = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={ScreenOptions}>
    <Stack.Screen
      name="Home"
      component={Home}
    />
  </Stack.Navigator>
);
export default Navigation;
