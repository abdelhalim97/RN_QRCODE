import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { ButtonGradient } from '../commons';
const Scanner = () => {
    const [URL, setURL] = useState('')
    const onSuccess = (e: any) => {
        setURL(e.data)
    };
    return (
        <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            showMarker reactivate
            bottomContent={
                <ButtonGradient text='Confirm Product' fnc={() => console.log(URL)} />
            }
        />
    )
}
// {"bounds": {"height": 960, "origin": [[Object], [Object], [Object], [Object]], "width": 1280}, "data": "https://www.youtube.com/watch?v=Uw626lSuwW4&ab_channel=ReticentShadow", "rawData": "44568747470733a2f2f7777772e796f75747562652e636f6d2f77617463683f763d55773632366c53757757342661625f6368616e6e656c3d5265746963656e74536861646f770ec11ec11ec11ec11ec", "target": 189, "type": "QR_CODE"}    
export default Scanner

const styles = StyleSheet.create({})