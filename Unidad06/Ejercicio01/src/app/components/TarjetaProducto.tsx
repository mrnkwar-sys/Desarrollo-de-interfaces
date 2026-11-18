import React from 'react';
import { Image, View, Text, StyleSheet, Pressable } from 'react-native';

type Props = {
    name: string
    price: number
    image: string
    onAddToCart: () => void
}

export function TarjetaProducto({name, price, image, onAddToCart}: Props){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/images/image-removebg-preview.png')}/>
            <Pressable onPress={onAddToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#dd6f93'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        width: '25%',
        margin: 20,
        padding: 20
    }
})