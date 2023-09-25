import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordInput = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.passwordInput}
        placeholder="Password"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
        <Icon
          name={isPasswordVisible ? 'eye' : 'eye-slash'}
          size={24}
          color="#555"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#4e4b66',
  },
  passwordInput: {
    flex: 1,
    height: 48,
    padding: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    padding: 10,
  },
});

export default PasswordInput;
