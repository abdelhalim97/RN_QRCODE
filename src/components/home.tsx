import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonGradient, Gradient } from '../commons'
import { useNavigation } from '@react-navigation/native';

const image = require('../assets/images/card.png')
const Home = () => {
    const navigation = useNavigation();

    return (
        <Gradient fromColor='#285CA3' toColor='#516AD3'>
            <View style={styles.container}>
                <Image source={image} />
                <View>
                    <Text style={styles.title}>Quickscan</Text>
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <ButtonGradient text='Login' fnc={() => navigation.navigate('Login')} />
                    <ButtonGradient text='Signup' fnc={() => navigation.navigate('Signup')} />
                </View>
            </View>
        </Gradient>
    )
}
export default Home
const styles = StyleSheet.create({
    title: { fontSize: 40, color: '#fff' },
    container: {
        flex: 1, justifyContent: 'space-around', paddingHorizontal: 25, alignItems: 'center'
    }
})