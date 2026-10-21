import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { SymbolView } from "expo-symbols";

export default function Index() {
  const [cargando, setCargando] = useState(false);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    if (!cargando) {
      return;
    }

    const temporizador = setTimeout(() => {
      setCargando(false);
      setCargado(true);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, [cargando]);

  const recargar = () => {
    setCargado(false);
    setCargando(true);
  };

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Recargar"
        accessibilityState={{ disabled: cargando }}
        disabled={cargando}
        onPress={recargar}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <SymbolView
          name={{ ios: "arrow.clockwise", android: "refresh", web: "refresh" }}
          tintColor="#FFFFFF"
          size={24}
        />
        <Text style={styles.buttonText}>Recargar</Text>
      </Pressable>

      {cargando && <ActivityIndicator accessibilityLabel="Cargando" size="large" color="#2563EB" />}
      {cargado && <Text style={styles.successText}>Cargado con éxito</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 24,
    backgroundColor: "#F8FAFC",
  },
  button: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: "#2563EB",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  successText: {
    color: "#166534",
    fontSize: 16,
    fontWeight: "600",
  },
});
