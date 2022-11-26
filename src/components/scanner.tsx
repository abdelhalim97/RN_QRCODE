import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const Scanner = () => {
    const onSuccess = (e: any) => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };
    return (
        <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.auto}
            topContent={
                <Text >
                    Go to{' '}
                    <Text >wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
            }
            bottomContent={
                <TouchableOpacity >
                    <Text >OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    )
}

export default Scanner

const styles = StyleSheet.create({})