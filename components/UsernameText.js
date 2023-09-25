
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  redText: {
    color: 'red',
  },
});

function UsernameText() {
  const password = 'Username*';

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

export default UsernameText;
