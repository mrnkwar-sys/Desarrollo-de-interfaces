import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Index() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Escribe algo..."
      />
      <Text style={styles.output}>
        {text.length > 0 ? text : 'Nada escrito aún'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    minWidth: 200,
  },
  output: {
    fontSize: 18,
    marginTop: 20,
  },
});
