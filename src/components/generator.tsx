import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import RNQRGenerator from 'rn-qr-generator';
import { ButtonGradient, Gradient, InputGradient } from '../commons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { API_URL } from '@env';
import { TokenContext } from '../contexts/token-context';

const Generator = () => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [uri, setUri] = useState('')
    const [id, setId] = useState('')
    const [base64, setBase64] = useState<string | undefined>('')
    const { token, setToken } = useContext(TokenContext)
    const generate = () => {
        const v4 = uuidv4()
        setId(v4)
        RNQRGenerator.generate({
            value: id,
            height: 100, width: 100, correctionLevel: 'H', base64: true
        })
            .then(response => {
                const { uri, base64 } = response;
                setUri(uri);
                setBase64(base64)
            }).catch(error => console.log('Cannot create QR code', error));
    }
    const createProduct = async () => {
        try {
            const res = await fetch(API_URL + '/products/create', {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify({ name, quantity, id, base64 }),
            })
            console.log('front');
            const json = await res.json();
            if (res.status == 201) console.log('added')
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Gradient fromColor='#285CA3' toColor='#516AD3'>
            <View style={{ alignItems: 'center', paddingHorizontal: 25, width: '100%' }}>
                <InputGradient text='Name' onChangeText={text => setName(text)} autoFocus />
                <InputGradient text='Quantity' onChangeText={text => setQuantity(Number(text))} keyboardType='number-pad' />
                <ButtonGradient text='Generate QRCode' fnc={() => generate()} />
                {uri && <Image style={{ width: 200, height: 200 }} source={{ uri }} />}
                {uri && <ButtonGradient text='Create Product' fnc={() => createProduct()} />}
            </View>
        </Gradient>
    )
}

export default Generator

const styles = StyleSheet.create({})