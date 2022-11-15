import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { InputGradiesnt } from '../utils/main.utils'
import LinearGradient from 'react-native-linear-gradient'

const inputGradient = ({ text, onChangeText, keyboardType = 'default', autoFocus = false, secureTextEntry = false }: InputGradiesnt) => {
  return (
    <View style={{ alignItems: 'center', width: '100%', marginTop: 20 }}>
      <LinearGradient colors={['#C6CEF1', '#8898E3']} style={styles.LinearGradientStyle}
        start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <View style={styles.ChildViewStyle}>
          <TextInput placeholder={text}
            underlineColorAndroid='transparent' keyboardType={keyboardType} autoFocus={autoFocus}
            style={styles.TextInputStyleClass} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
        </View>
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  LinearGradientStyle: {
    height: 50,
    borderRadius: 10,
    width: '80%'
  },
  ChildViewStyle: {
    width: '100%',
    height: 50,
    borderRadius: 10,
  },
  TextInputStyleClass: {
    color: '#000',
    textAlign: 'center',
    height: 50,
    width: '90%',
    fontSize: 22
  }
});
export default inputGradient