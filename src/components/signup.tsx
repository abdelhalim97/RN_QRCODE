import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { ButtonGradient, Gradient, InputGradient } from '../commons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'


const image = require('../assets/images/laptop.jpg')

const Signup = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [username, setUsername] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const navigation = useNavigation<StackNavigationProp<any>>()
    return (
        <Gradient fromColor='#285CA3' toColor='#516AD3'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image resizeMode='cover' source={image} style={styles.halfCircle} />
                <View style={{ alignItems: 'center', paddingHorizontal: 25 }}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.paragraph}>Create an account</Text>
                    <InputGradient text='Username' onChangeText={text => setUsername(text)} autoFocus />
                    <InputGradient text='Email' onChangeText={text => setEmail(text)} keyboardType='email-address' />
                    <InputGradient text='Password' onChangeText={text => setConfirmPass(text)} secureTextEntry />
                    <InputGradient text='Confirm password' onChangeText={text => setPass(text)} secureTextEntry />
                    <ButtonGradient text='Signup' fnc={() => navigation.navigate('Login')} />
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Text style={styles.paragraph}>You have an account?{' '}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Gradient>
    )
}
const styles = StyleSheet.create({
    title: { fontSize: 40, color: '#fff', textAlign: 'center' },
    paragraph: { fontSize: 20, color: '#fff', textAlign: 'center' },
    halfCircle: {
        borderBottomLeftRadius: 1000, height: 220,
        borderBottomRightRadius: 1000, width: '100%'
    },
})
export default Signup
