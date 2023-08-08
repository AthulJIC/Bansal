
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import NavigationLinks from './App/NavigationLinks/NavigationLinks';



function App(): JSX.Element {
  return (
  <NavigationLinks/>
  );
} 

export default App;
