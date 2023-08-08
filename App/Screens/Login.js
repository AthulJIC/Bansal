// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground,Text, 
    TouchableOpacity,ScrollView} from 'react-native';
    import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const [isSelected, setSelection] = useState(false);
   const [rememberSelect,setrememberSelect]=useState(false)

  const handleLogin = () => {
    // Perform your login logic here
    // For example, check credentials and set isLoggedIn state to true
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../Assets/Images/Login.gif')} // Replace with your actual GIF path
        style={styles.backgroundImage}
      >
    <View style={styles.inputContainer}>
       <Text style={styles.LoginText}>Log In</Text>
        <View>
      <TextInput
        placeholder="Unique ID/Login ID"
        placeholderTextColor="rgba(255, 255, 255, 0.3)" 
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="rgba(255, 255, 255, 0.3)" 
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          boxType='square'
        />
        <Text style={styles.label}>I agree to the <Text>Terms And Condition</Text></Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberSelect}
          onValueChange={setrememberSelect}
          style={[styles.checkbox, rememberSelect && { backgroundColor: '#2B59C3' }]}
          boxType='square'
         
        />
        <Text style={styles.label}>Remember me</Text>
        </View>
      </View>
      <View style={{marginTop:12,flexDirection:'column', justifyContent:'center'}}>
      <TouchableOpacity style={styles.button}>
      <Text onPress={handleLogin} style={styles.buttonText}>Login</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{ alignItems:'center'}}>
       <Text style={styles.forgotPassword}>Forgot Password</Text>
       </TouchableOpacity>
       </View>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'Poppins'
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderColor: '#848484',
    borderBottomWidth:2,
    padding:10,
    color:'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the resizeMode as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width:'100%',
    height:'50%',
    marginTop:450,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    paddingLeft:16,
    paddingTop:32,
    paddingRight:16,
    paddingBottom:16
 },
  LoginText:{
   color:'white',
   fontWeight:500,
   fontFamily:'Poppins',
   padding:5,
   fontSize:19.2,
   lineHeight:28,
   height:34,
   marginBottom:10,
   width:328,
},

button: {
    backgroundColor: '#B1292C',
    borderRadius: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems:'center',
    
  },
  checkbox: {
    width:24,
    height:24,
    alignSelf: 'center',
  },
  label: {
    fontFamily:'Poppins',
    margin: 8,
    color:'white',
  },
  forgotPassword:{
    fontFamily:'Poppins',
    fontWeight:500,
    color:'#2B59C3',
    fontSize:16,
    lineHeight:24,
    height:24,
    marginTop:8
  }
});

export default LoginScreen;
