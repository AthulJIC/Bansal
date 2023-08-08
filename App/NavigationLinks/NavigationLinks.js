// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/Login';
import Home from '../Screens/Home';
import Order from '../Screens/Order';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Orders" component={Order} />
    {/* Add more screens here */}
  </Tab.Navigator>
);

const NavigationLinks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <HomeTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} 
          options={{
          headerShown: false, // Hide the header for Login screen
          }}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default NavigationLinks;
