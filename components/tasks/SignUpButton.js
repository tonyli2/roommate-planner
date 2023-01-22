
import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

function SUButton({ onPress }) {
  return (
  <TouchableHighlight activeOpacity={1}>
    <View style={styles.signUpButton}>
      <Text style={styles.defaultText}>Sign Up for Task</Text>
    </View>
  </TouchableHighlight>
  );
  }

const styles = StyleSheet.create({
  signUpButton: {
    backgroundColor: 'white',
    borderColor: "#B29BC3",
    borderWidth: '2',
    borderRadius: '20',
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.90,
  },
  defaultText: {
    fontSize: 20,
    color: "#B29BC3",
  }

});

export default SUButton;