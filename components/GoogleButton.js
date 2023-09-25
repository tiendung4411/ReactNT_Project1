import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const GoogleButton = () => {
  const handleButtonPress = () => {

    console.log('Button pressed'); // Replace with your logic
  };


  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <View style={styles.buttonContainer}>
        <Image
          source={require('../media/img/GGButton.png')}
          style={styles.buttonImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 100, // Adjust the width as needed
        height: 100, // Adjust the height as needed
        alignItems: 'center', // Center the image horizontally
        justifyContent: 'center', // Center the image vertically
        borderRadius:6
      },
  buttonImage: {
    width: 144,
    height: 100,
    resizeMode: 'contain', // Adjust the image's aspect ratio

   
  },
});

export default GoogleButton;
