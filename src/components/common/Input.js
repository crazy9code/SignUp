import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, maxLength }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        maxLength={maxLength}
        underlineColorAndroid="#2e2a26"
        placeholder={placeholder}
        placeholderTextColor='#D3D3D3'
        keyboardType={keyboardType}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    // paddingRight: 5,
    // paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    // paddingLeft: 20,
    color: '#2e2a26',
    flex: 1
  },
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
