import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ onPress }){
  return(
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
        <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})