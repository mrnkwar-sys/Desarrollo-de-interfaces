import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container } from "../../di/container";
import { TYPES } from "../../di/types";
import { PersonRow } from "../components/PersonRow";
import { PersonListModel } from "../viewmodels/PersonListModel";

/**
 * Presenta el directorio de personas con un diseño adaptable al ancho disponible.
 * Precondiciones: el contenedor DI tiene registrado `PersonListModel`.
 * @returns El árbol de componentes nativos con la cabecera y el listado de personas.
 */
export function PersonListScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;
  const [viewModel] = useState(() =>
    container.get<PersonListModel>(TYPES.PersonListModel),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View
          style={[styles.headerContent, isDesktop && styles.headerContentDesktop]}
        >
          <View>
            <Text style={styles.eyebrow}>EQUIPO · DIRECTORIO</Text>
            <Text style={styles.title}>Personas</Text>
          </View>
          <Text style={[styles.subtitle, isDesktop && styles.subtitleDesktop]}>
            {viewModel.persons.length} personas en 4 departamentos
          </Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={[styles.list, isDesktop && styles.desktopList]}
        data={viewModel.persons}
        keyExtractor={(person) => String(person.id)}
        renderItem={({ item }) => <PersonRow person={item} />}
        ListHeaderComponent={
          <Text style={styles.listHeading}>DIRECTORIO DE LA ORGANIZACIÓN</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F5F1",
  },
  header: {
    paddingVertical: 24,
    backgroundColor: "#E2EBE6",
    borderBottomWidth: 1,
    borderBottomColor: "#D3DFD8",
  },
  headerContent: {
    width: "100%",
    maxWidth: 1600,
    alignSelf: "center",
    paddingHorizontal: 24,
  },
  headerContentDesktop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyebrow: {
    color: "#35736C",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  title: {
    marginTop: 10,
    color: "#172A2A",
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 6,
    color: "#526562",
    fontSize: 14,
  },
  subtitleDesktop: {
    marginTop: 0,
    fontSize: 15,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 32,
  },
  desktopList: {
    width: "100%",
    maxWidth: 1600,
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  listHeading: {
    marginBottom: 10,
    color: "#687873",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
});