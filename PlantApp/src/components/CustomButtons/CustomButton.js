import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

export default function Button(props) {
  const {onPress, title = 'sign up'} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c1d891',
    width: 100,
    height: 32,
    marginHorizontal: '37%',
    marginTop: '15%',
  },
  text: {
    fontSize: 10,
    letterSpacing: 0.25,
    color: '#131313',
  },
});
