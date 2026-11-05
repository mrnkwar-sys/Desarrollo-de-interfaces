import { Text, Image, View, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  //count es la variable de estado que guarda el valor actual
  //setCount es la funcion que permite cambiar el valor de count
  //useState(0) es un Hook que inicializa el estado con el valor 0
  const[count, setCount] = useState(0);

  //Cada vez que se ejecuta esta funcion, llama a setCount y le suma 1 al valor de count
  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <ScrollView style={styles.screenContainer} contentContainerStyle={styles.scrollContent}>
      <View style={styles.cardContainer}>
        <Image source={require('../../assets/images/sticker-smash.jpeg')} style={styles.image}/>
        <Text style={styles.name}>Raquel Nkwar</Text>
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.name}>Contador</Text>
        <Text style={styles.randomText}>{count}</Text>
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Incrementar</Text>
          <Ionicons name="add-circle" size={24} color="white"/>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
  },
  scrollContent: {
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 2,
    width: '45%',
    margin: 20,
    padding: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20
  },
  name: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 32
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#f68da1',
    padding: 15,
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginRight: 8
  },
  randomText: {
    fontSize: 20,
    color: '#4891e7',
    margin: 10
  }
});
