import React, { useState, useRef } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Index = () => {

  const [count, setCount] = useState(0);
  const totalCalls = useRef(0);

   const handlePress = () => {
    setCount(count + 1);
    totalCalls.current += 1;
    clickAlert();
  };

  const handleDecrease = () => {
    if (count > 0){
      setCount(count - 1);
      totalCalls.current += 1;
      clickAlert();
    }
  };

  const clickAlert = () => {
    if (totalCalls.current%10 == 0 && totalCalls.current == 10){
      alert('¡Ya has hecho 10 clicks!');
    } else if (totalCalls.current%10 == 0){
      alert('¡Has pulsado el botón 10 veces más!');
    }
  };
  
  return (
   <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {count}
      </Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>
      <Pressable onPress={handleDecrease} style={styles.button}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
});


export default Index;
