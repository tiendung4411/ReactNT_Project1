import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { Component, useState } from 'react';
import  CheckBox  from 'react-native-check-box';
import CustomCheckbox from '../components/CheckBoxCustom';
import GoogleButton from '../components/GoogleButton';
import { Button } from 'react-native-elements';
import PasswordInput from '../components/PasswordInput';
import FacebookButton from '../components/FacebookButton';
import PasswordText from '../components/PasswordText';
import UsernameText from '../components/UsernameText';
import { useNavigation } from '@react-navigation/native'; 

const FirstLogin = (props) => {
  const [isChecked, setIsChecked] =  useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={[styles.hello, styles.title]}>Hello</Text> */}
        <Text style={[styles.again, styles.title]}>Hello</Text>
      </View>
      <View>
        <Text style={styles.welcome}>Sign up to get started</Text>
      </View>
      <View style={styles.usernameContainer}>
        {/* <Text style={styles.usernameLabel}>Username*</Text> */}
        <UsernameText/>
        <TextInput style={styles.usernameInput} placeholder="Username" />

      </View>
      <View style={styles.passwordContainer}>
        {/* <Text style={styles.passwordLabel}>Password*</Text> */}
        <PasswordText/>
        <PasswordInput/>
        {/* <TextInput style={styles.passwordInput} placeholder='Password' secureTextEntry={true} />
         */}
      </View>
      <View style={styles.checkBoxContainer}>
        <CustomCheckbox isChecked={isChecked} onToggle={() => setIsChecked(!isChecked)} />
        <Text style={styles.textSmall}>Forgot the password ?</Text>

      </View>
      <View style={styles.buttonContainer}>
      <Button style={styles.loginButton} title={"Login"} onPress={() => navigation.navigate('Login')}>
        </Button>
      </View>
      <Text style={{textAlign:'center', color:'#4E4B66'}}>or continue with</Text>
      <View style={styles.socialButtonContainer}>
       <FacebookButton/>
        <GoogleButton/>
      </View>
      <Text style={{textAlign:'center', color:'#4E4B66', marginTop:12}}>don’t have an account ?</Text>
    </View>
  )
}

export default FirstLogin

const styles = StyleSheet.create({
  buttonContainer:{
    width:349,
    minHeight:50,
    marginTop:16,
    gap:10
  },
  loginButton:{
    minHeight:50,
    borderRadius : 6,
    backgroundColor:'#1877F2'
},
socialButtonContainer:{
  marginTop: 8,
  height: 48,
  marginLeft:20,
  flexDirection: 'row',
  width: 305, // Adjusted to minWidth to allow for dynamic content
    justifyContent: 'space-between',
  alignItems: 'center'
},
  textSmall: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21, // This value corresponds to 150% line height
    letterSpacing: 0.12,
    color: '#5890FF',
  },
  checkBoxContainer: {
    marginTop: 8,
    height: 25,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    minWidth: 349, // Adjusted to minWidth to allow for dynamic content
      justifyContent: 'space-between',
    alignItems: 'center'
  },
  
    usernameInput: {
        height: 48,
        marginTop: 4,
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderColor: '#4e4b66',
    },
    usernameLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
    },
    usernameContainer: {
        marginTop: 48
    },
    welcome: {
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4e4b66',
        width: 222
    },
    title: {
        fontSize: 48,
        fontWeight: '700',
        lineHeight: 72,
        letterSpacing: 0.12
    },
    again: {
        color: '#1877f2'
    },
    hello: {
        color: '#050505'
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#fff",
        width: '100%',
        height: '100%',
    },
    passwordContainer:{
        marginTop: 16

    },
    passwordLabel:{

    },
    passwordInput:{
        height: 48,
        marginTop: 4,
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#fff',
        borderColor: '#4e4b66',
    }
})