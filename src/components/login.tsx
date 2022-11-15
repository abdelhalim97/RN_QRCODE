import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { InputGradient, Gradient } from '../commons'
const image = require('../assets/images/laptop.jpg')

const Login = () => {

    return (
        <Gradient fromColor='#285CA3' toColor='#516AD3'>
            <Image source={image} style={styles.halfCircle} />
            <View style={{ justifyContent: 'center', paddingHorizontal: 25 }}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.paragraph}>Login to your account</Text>
                <InputGradient />
                <Text style={styles.paragraph}>Don't have an account? signup</Text>
            </View>
        </Gradient>
    )
}

export default Login
const styles = StyleSheet.create({
    title: { fontSize: 40, color: '#fff', textAlign: 'center' },
    paragraph: { fontSize: 20, color: '#fff', textAlign: 'center' },
    halfCircle: {
        borderBottomLeftRadius: 1000, height: "33%", borderBottomRightRadius: 1000, width: '100%'
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    imageWrapper: {
        width: 125, // half of the image width
        height: 250,
        backgroundColor: 'transparent',
        overflow: 'hidden'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125, // half of the image width
        backgroundColor: 'transparent'
    }
});