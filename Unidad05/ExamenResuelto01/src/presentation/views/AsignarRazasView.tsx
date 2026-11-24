import { useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container } from "../../di/container";
import { TYPES } from "../../di/types";
import { AsignarRazasVM } from "../viewModels/AsignarRazasVM";
import { EquinoConColor } from "../models/EquinoConColor";

export function AsignarRazasView() {
  const [viewModel] = useState(() => container.get<AsignarRazasVM>(TYPES.AsignarRazasVM));
  const [, forzarRender] = useState(0);

  const fecha = viewModel.fecha.toLocaleDateString("es-ES", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  const renderEquino = ({ item }: { item: EquinoConColor }) => (
    <View style={[styles.row, { backgroundColor: item.colorFondo }]}>
      <View style={styles.nameBlock}>
        <Text style={styles.equinoName}>{item.nombreEquino}</Text>
        <Text style={styles.sex}>{item.sexo}</Text>
      </View>
      <View style={styles.selectWrap}>
        {viewModel.listadoRazas.map((raza) => (
          <Pressable
            key={raza.id}
            onPress={() => { item.idRazaSeleccionada = raza.id; forzarRender((value) => value + 1); }}
            style={[styles.option, item.idRazaSeleccionada === raza.id && styles.optionSelected]}
          >
            <Text style={[styles.optionText, item.idRazaSeleccionada === raza.id && styles.optionTextSelected]}>
              {raza.nombre}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Asignación de razas</Text>
        <Text style={styles.date}>{fecha}</Text>
      </View>
      {viewModel.isLoading ? <ActivityIndicator size="large" color="#2F6F4E" /> : (
        <FlatList
          contentContainerStyle={styles.list}
          data={viewModel.listadoEquinoConColor}
          keyExtractor={(item) => String(item.idEquino)}
          renderItem={renderEquino}
          ListEmptyComponent={<Text style={styles.empty}>No quedan caballos o yeguas por clasificar hoy.</Text>}
        />
      )}
      <View style={styles.footer}>
        {viewModel.mensaje ? <Text style={styles.message}>{viewModel.mensaje}</Text> : null}
        <Pressable style={styles.saveButton} onPress={() => { viewModel.actualizarRazas(); forzarRender((value) => value + 1); }}>
          <Text style={styles.saveText}>Guardar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F5F2EA" },
  header: { padding: 20, backgroundColor: "#2F6F4E" },
  title: { color: "#FFFFFF", fontSize: 28, fontWeight: "800" },
  date: { color: "#DDEADF", fontSize: 15, marginTop: 6, textTransform: "capitalize" },
  list: { padding: 16, gap: 10 },
  row: { borderRadius: 12, borderWidth: 1, borderColor: "#D5D9D1", padding: 14, flexDirection: "row", alignItems: "flex-start", gap: 12 },
  nameBlock: { width: 110 },
  equinoName: { fontSize: 18, fontWeight: "700", color: "#20352A" },
  sex: { marginTop: 4, color: "#6B756F", fontSize: 13 },
  selectWrap: { flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 6 },
  option: { borderWidth: 1, borderColor: "#AEB8B1", borderRadius: 8, paddingHorizontal: 8, paddingVertical: 7, backgroundColor: "#FFFFFF" },
  optionSelected: { backgroundColor: "#2F6F4E", borderColor: "#2F6F4E" },
  optionText: { color: "#405148", fontSize: 12 },
  optionTextSelected: { color: "#FFFFFF", fontWeight: "700" },
  empty: { textAlign: "center", color: "#68766F", padding: 30, fontSize: 16 },
  footer: { padding: 16, borderTopWidth: 1, borderTopColor: "#DDE1DB", backgroundColor: "#FFFFFF" },
  message: { textAlign: "center", color: "#2F6F4E", fontWeight: "700", marginBottom: 10 },
  saveButton: { backgroundColor: "#C78732", borderRadius: 10, paddingVertical: 15, alignItems: "center" },
  saveText: { color: "#FFFFFF", fontSize: 17, fontWeight: "800" },
});
