
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  redText: {
    color: 'red',
  },
});

function PasswordText() {
  const password = 'Password*';

  return (
    <View>
      <Text>
        {password.split('*').map((part, index) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <Text>{part}</Text>
            ) : (
              <Text style={styles.redText}>*</Text>
            )}
          </React.Fragment>
        ))}
      </Text>
    </View>
  );
}

export default PasswordText;
