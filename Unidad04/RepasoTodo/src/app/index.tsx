import { Text, Image, View, StyleSheet, Pressable, ScrollView, useWindowDimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  //count es la variable de estado que guarda el valor actual
  //setCount es la funcion que permite cambiar el valor de count
  //useState(0) es un Hook que inicializa el estado con el valor 0
  const[count, setCount] = useState(0);

  //Guarda todos la cantidad de veces que se hayan pulsado ambos botones
  const[countClicks, setCountClicks] = useState(0);

  //Cada vez que se ejecuta esta funcion, llama a setCount y le suma 1 al valor de count
  const handlePress = () => {
    setCount(count + 1);
    setCountClicks(countClicks + 1);
  };

  const handlePressLess = () => {
    setCount(count - 1);
    setCountClicks(countClicks + 1);
  }

  //useEffect se utiliza para ejecutar "efectos secundarios", ejecutandose tras cada renderizado (por eso es conveniente ahora)
  //Se ejecuta cada vez que la variable countClicks cambia (especificada en los corchetes del final)
  useEffect(() => {
    if (countClicks > 0 && countClicks % 10 === 0) {
      if (countClicks === 10) {
        alert("Has cambiado el contador 10 veces");
      } else {
        alert("Has cambiado el contador 10 veces más");
      }
    }
  }, [countClicks]);

  //Ejercicio 04
  // Guarda las dimensiones actuales de la pantalla del dispositivo 
  // Ponerlo entre llaves permite extraer la propiedad del ancho de la pantalla
  //Cada vez que el usuario redimensiona la venta, el valor se actualiza automaticamente
  const {width} = useWindowDimensions();

  //Variable booleana que comprueba si width es menor a 768 pix (estandar que diferencia moviles de tablets/PCs) 
  const isMobile = width < 768;

  return (
    <View style={styles.screenContainer}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.randomText}>HEADER</Text>
      </View>

      <View style={styles.bodyContainer}>

        {/* BARRA LATERAL IZQUIERDA */}
        {/* Las llaves permiten ejecutar expresiones JavaScript
        * Si isMobile es verdadero, muestra la barra lateral.'
        * Si es falso, significa que se esta viendo la app desde un movil
        */}
        {!isMobile && <View style={styles.leftSideBar}/>}

        <ScrollView style={styles.screenContainer} contentContainerStyle={styles.scrollContent}>
          
          {/* TARJETA CON NOMBRE */}
          <View style={styles.cardContainer}>
            <Image source={require('../../assets/images/sticker-smash.jpeg')} style={styles.image}/>
            <Text style={styles.name}>Raquel Nkwar</Text>
          </View>

          {/* CONTADOR */}
          <View style={styles.cardContainer}>
            <Text style={styles.name}>Contador</Text>
            <Text style={styles.randomText}>{count}</Text>
            <Pressable onPress={handlePress} style={styles.button}>
              <Text style={styles.buttonText}>Incrementar</Text>
              <Ionicons name="add-circle" size={24} color="white"/>
            </Pressable>
            <Pressable onPress={handlePressLess} style={styles.button}>
              <Text style={styles.buttonText}>Decrementar</Text>
              <Ionicons name="remove-circle" size={24} color="white"/>
            </Pressable>
          </View>

        </ScrollView>

        {/* BARRA LATERAL DERECHA */}
        {!isMobile && <View style={styles.rightSideBar}/>}
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.randomText}>FOOTER</Text>
      </View>

    </View>
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
    borderRadius: 8,
    margin: 10
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
  },
  header: {
    height: 50,
    backgroundColor: '#aee2be',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 50,
    backgroundColor: '#c2edf3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  leftSideBar: {
    width: '10%',
    backgroundColor: '#e3bbdd'
  },
  rightSideBar: {
    width: '10%',
    backgroundColor: '#e9f299'
  }
});
