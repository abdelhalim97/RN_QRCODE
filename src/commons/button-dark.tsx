import { View, Text, Button } from 'react-native'
import React from 'react'
import { ButtonDarkInt } from '../utils/main.utils'
import LinearGradient from 'react-native-linear-gradient'

const ButtonDark = ({ text, fnc }: ButtonDarkInt) => {
    return (
        <LinearGradient colors={['#26364E', '#3B5197']}
            style={{ borderRadius: 20, width: '100%' }}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <Button
                // style={{
                //     borderRadius: 20, width: '100%',
                //     textAlign: 'center', color: '#fff'
                // }}
                title={text}
                onPress={fnc}
            />
        </LinearGradient>
        // <Button
        //     onPress={fnc}
        //     title={text}
        //     color="#841584" />
    )
}
export default ButtonDark