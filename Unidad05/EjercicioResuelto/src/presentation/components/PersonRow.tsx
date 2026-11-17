import { StyleSheet, Text, View } from "react-native";
import type { PersonUIModel } from "../models/PersonUIModel";

/**
 * Renderiza visualmente la tarjeta de una persona.
 * Precondiciones: `person` incluye los textos de presentación y el color de departamento.
 * @param person Modelo UI ya preparado para su representación.
 * @returns La tarjeta de la persona con su nombre, departamento y fecha.
 */
export function PersonRow({ person }: { person: PersonUIModel }) {
  return (
    <View style={[styles.row, { backgroundColor: person.departmentColor }]}>
      <View style={styles.personInfo}>
        <Text style={styles.personName}>
          {person.name} {person.surname}
        </Text>
        <Text style={styles.department}>{person.departmentName}</Text>
      </View>
      <Text style={styles.birthDate}>{person.birthDateLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingRight: 14,
    borderWidth: 1,
    borderColor: "#E4E8E3",
    borderRadius: 5,
    overflow: "hidden",
  },
  personInfo: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  personName: {
    color: "#20302E",
    fontSize: 15,
    fontWeight: "600",
  },
  department: {
    marginTop: 4,
    color: "#66736F",
    fontSize: 13,
  },
  birthDate: {
    color: "#6E7975",
    fontSize: 12,
  },
});