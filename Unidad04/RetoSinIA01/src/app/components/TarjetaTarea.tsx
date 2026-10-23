import { Pressable, StyleSheet, Text, View } from 'react-native';

interface TarejtaProps {
  titulo: string;
  textoBoton: string
}

export function TarjetaTarea({ titulo, textoBoton }: TarejtaProps) {
    return (
        <View>
            <Text>{titulo}</Text>
            <Pressable
                accessibilityRole="button"
                style={styles.button}
            >
                <Text style={styles.buttonText}>{textoBoton}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#507dc0',
        borderRadius: 6,
    }, 
    buttonText:{
       color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600', 
    },
});

