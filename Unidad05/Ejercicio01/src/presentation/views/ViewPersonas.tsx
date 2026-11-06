import { useState } from "react";
import {
  FlatList,
  type ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { Persona } from "../../domain/entities/Persona";
import { container } from "../../di/container";
import { TYPES } from "../../di/types";
import { VMPersonas } from "../viewModels/VMPersonas";

/** Resuelve el ViewModel principal desde el contenedor de dependencias.
 * @returns ViewModel configurado con el caso de uso y el repositorio activos.
 */
function crearViewModel(): VMPersonas {
  return container.get<VMPersonas>(TYPES.VMPersonas);
}

/** Convierte una persona en la clave estable que necesita FlatList.
 * @param persona Persona que se va a mostrar.
 * @returns Identificador convertido a texto.
 */
function obtenerClavePersona(persona: Persona): string {
  return persona.id.toString();
}

/** Crea el separador visual entre dos filas de personas.
 * @returns Elemento visual horizontal usado como separador.
 */
function renderizarSeparador() {
  return <View style={styles.separator} />;
}

/** Representa una fila de la lista con el nombre, apellidos y sexo.
 * @param info Datos de la persona y posición proporcionados por FlatList.
 * @returns Fila visual correspondiente a la persona.
 */
function renderizarPersona({ item, index }: ListRenderItemInfo<Persona>) {
  return (
    <View style={styles.personRow}>
      <Text style={styles.personNumber}>{String(index + 1).padStart(2, "0")}</Text>
      <View style={styles.personInfo}>
        <Text style={styles.personName}>{item.nombre}</Text>
        <Text style={styles.personSurname}>{item.apellidos}</Text>
      </View>
      <View style={styles.sexBadge}>
        <Text style={styles.sexBadgeText}>{item.sexo}</Text>
      </View>
    </View>
  );
}

/** Presenta el listado y el resumen preparados por el ViewModel.
 * @returns Pantalla con la lista diaria de personas o su estado vacío.
 */
export function ViewPersonas() {
  const [viewModel] = useState(crearViewModel);
  const personas = viewModel.listadoPersonas;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.eyebrow}>UNIDAD 05 / CLEAN ARCHITECTURE</Text>
        <Text style={styles.title}>Personas</Text>
        <Text style={styles.subtitle}>
          Día {viewModel.diaActual}: {viewModel.descripcionListado}
        </Text>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>LISTADO DEL DÍA</Text>
        <Text style={styles.count}>{personas.length.toString().padStart(2, "0")}</Text>
      </View>

      <FlatList
        data={personas}
        keyExtractor={obtenerClavePersona}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={renderizarSeparador}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No hay personas para mostrar.</Text>
        }
        renderItem={renderizarPersona}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F3EF",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
    backgroundColor: "#183B36",
  },
  eyebrow: {
    color: "#B8D5C9",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  title: {
    marginTop: 16,
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 5,
    color: "#E6C16B",
    fontSize: 16,
    fontWeight: "600",
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 12,
  },
  sectionTitle: {
    color: "#66716D",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },
  count: {
    color: "#183B36",
    fontSize: 14,
    fontWeight: "700",
    fontVariant: ["tabular-nums"],
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 28,
  },
  separator: {
    height: 1,
    backgroundColor: "#DADDD7",
  },
  personRow: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 12,
  },
  personNumber: {
    width: 28,
    color: "#8B9690",
    fontSize: 12,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    color: "#202B27",
    fontSize: 16,
    fontWeight: "700",
  },
  personSurname: {
    marginTop: 3,
    color: "#68736D",
    fontSize: 14,
  },
  sexBadge: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#E6C16B",
  },
  sexBadgeText: {
    color: "#183B36",
    fontSize: 13,
    fontWeight: "800",
  },
  emptyMessage: {
    paddingVertical: 24,
    color: "#68736D",
    fontSize: 15,
  },
});