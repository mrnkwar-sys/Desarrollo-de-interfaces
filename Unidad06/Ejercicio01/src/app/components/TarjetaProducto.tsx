import React from 'react';
import { Image, View, Text, StyleSheet, Pressable, ImageSourcePropType } from 'react-native';

type Props = {
    name: string
    price: number
    image: ImageSourcePropType
    onAddToCart: () => void
}

export function TarjetaProducto({name, price, image, onAddToCart}: Props){
    return(
        <View style={styles.container}>
            <Image 
                source={image}
                style={styles.image}
            />
            <Text style={styles.text}>
                {name}{'\n'}
            </Text>
            <Text style={styles.text}>
                €{price} EUR
            </Text>
            <Pressable onPress={onAddToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#dd6f93',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        width: '40%',
        margin: 10,
        padding: 15,
        backgroundColor: '#e1eef0'
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
        marginBottom: 8
    },
    text: {
        margin: 3,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }
});