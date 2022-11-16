import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    width: '80%',
    height: 32,

    padding: 5,

    borderColor: '#c1d891',
    borderWidth: 0.2,
    borderRadius: 50,
    marginVertical: '2%',
    marginLeft: '11%',
  },

  input: {
    padding: 5,
  },
});

export default CustomInput;
