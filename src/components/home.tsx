import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ButtonDark, Gradient } from '../commons'
import { useNavigation } from '@react-navigation/native';

const image = require('../assets/images/1.png')
const Home = () => {
    const navigation = useNavigation();

    return (
        <Gradient fromColor='#285CA3' toColor='#516AD3' >
            <View style={styles.container}>
                <Image source={image} />
                <View>
                    <Text style={{ fontSize: 40, color: '#fff' }}>Quickscan</Text>
                </View>
                <View>
                    <ButtonDark text='Login' fnc={() => navigation.navigate('Login')} />
                </View>
            </View>
        </Gradient>
    )
}
export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'space-around', paddingHorizontal: 25, alignItems: 'center'
    }
})