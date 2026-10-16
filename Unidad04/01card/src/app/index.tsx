import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.avatar} source={require("../../assets/images/gato.webp")}/>
        <Text style={styles.text}>Raquel Nkwar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,            // Bordes redondeados
    borderWidth: 1,               // Borde sólido
    borderColor: "#050505",          // Color del borde
    padding: 20,                  // Espaciado interno
    alignItems: "center",
    width: 300,         // Centra el contenido horizontalmente
  },
  avatar: {
    width: 100,                   // Ancho reducido
    height: 100,                  // Alto reducido
    borderRadius: 50,             // Hace que sea un círculo perfecto (mitad del ancho/alto)
    marginBottom: 10,             // Espacio entre la imagen y el texto
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
