import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonDarkInt } from '../utils/main.utils'
import LinearGradient from 'react-native-linear-gradient'

const ButtonGradient = ({ text, fnc, colorFrom = '#26364E', colorTo = '#3B5197' }: ButtonDarkInt) => {
    return (
        <LinearGradient colors={[colorFrom, colorTo]}
            style={{ borderRadius: 20, width: '60%', height: 40, marginTop: 20 }}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Text onPress={fnc} style={styles.buttonText}>
                {text}
            </Text>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    buttonText: {
        width: '100%', fontSize: 25,
        color: '#fff', textAlign: 'center',
    }
})

export default ButtonGradient