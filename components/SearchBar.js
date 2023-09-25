import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  
  return (
    <View style={styles.inputContainer}>
        <TouchableOpacity >
        <Icon
          name={ 'search'}
          size={24}
          color="#555"
          style={{marginLeft:10}}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
     
      />
      <TouchableOpacity >
        <Icon
          name={ 'sliders'}
          size={24}
          color="#555"
          style={{marginRight:10}}
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
  searchInput: {
    flex: 1,
    height: 48,
    padding: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    padding: 15,
  },
});

export default SearchBar;
