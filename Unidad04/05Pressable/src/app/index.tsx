import { StyleSheet, Text, View } from "react-native";
import { BotonPressable } from "../components/BotonPressable";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Botones reutilizables</Text>
      <View style={styles.buttonList}>
        <BotonPressable texto="Aceptar" />
        <BotonPressable texto="Cancelar" />
        <BotonPressable texto="Continuar" />
        <BotonPressable texto="Ver detalles" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F8FAFC",
  },
  title: {
    marginBottom: 24,
    color: "#1E293B",
    fontSize: 22,
    fontWeight: "700",
  },
  buttonList: {
    alignItems: "center",
    gap: 12,
  },
});
