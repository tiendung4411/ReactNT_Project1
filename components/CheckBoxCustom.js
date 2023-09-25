import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Button } from 'react-native-elements';

const CustomCheckbox = ({ isChecked, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={styles.container}>
        <CheckBox
          style={styles.checkbox}
          isChecked={isChecked}
          onClick={() => onToggle()} // Pass the onToggle function as onClick
          checkBoxColor="#5890FF"
        />
        <Text style={styles.label}>Remember me</Text>
      </View>
    
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
    color: 'black',
  },
});

export default CustomCheckbox;
