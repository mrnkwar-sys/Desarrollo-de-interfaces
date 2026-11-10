import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { container } from "../../di/container";
import { TYPES } from "../../di/types";
import { VMPersona } from "../viewModels/VMPersona";

const diasSemana = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

/** Resuelve el ViewModel de la pantalla desde el contenedor de dependencias.
 * Precondiciones: el contenedor registró el binding `TYPES.VMPersona`.
 * Postcondiciones: devuelve una instancia configurada de `VMPersona`.
 */
function crearViewModel(): VMPersona {
  return container.get<VMPersona>(TYPES.VMPersona);
}

/** Renderiza la inicial abreviada de un día y marca el día seleccionado.
 * Precondiciones: `nombreDia` pertenece a `diasSemana` y `indice` está entre 0 y 6.
 * Postcondiciones: devuelve el elemento visual con estilo activo cuando coincide con hoy.
 */
function renderizarDia(nombreDia: string, indice: number, diaActual: number) {
  return (
    <View
      key={nombreDia}
      style={[styles.weekItem, indice === diaActual && styles.weekItemActive]}
    >
      <Text
        style={[
          styles.weekLabel,
          indice === diaActual && styles.weekLabelActive,
        ]}
      >
        {nombreDia.slice(0, 1).toUpperCase()}
      </Text>
    </View>
  );
}

/** Presenta los datos de la persona asignada al día actual.
 * Precondiciones: Expo Router monta la pantalla y el contenedor tiene sus dependencias registradas.
 * Postcondiciones: devuelve una vista con nombre, apellidos, nacimiento y día seleccionado.
 */
export function PersonaView() {
  const [viewModel] = useState(crearViewModel);
  const persona = viewModel.persona;
  const dia = new Date().getDay();
  const fechaNacimiento = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(persona.fechaNac);
  const iniciales = `${persona.nombre[0]}${persona.apellidos[0]}`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.page}>
        <View style={styles.topline}>
          <Text style={styles.kicker}>UNIDAD 05</Text>
          <Text style={styles.day}>{diasSemana[dia]}</Text>
        </View>

        <View style={styles.intro}>
          <Text style={styles.eyebrow}>TU PERSONA DE HOY</Text>
          <Text style={styles.title}>Una historia, cada día.</Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{iniciales}</Text>
          </View>
          <View style={styles.rule} />
          <Text style={styles.name}>{persona.nombre}</Text>
          <Text style={styles.surname}>{persona.apellidos}</Text>
          <View style={styles.birthBlock}>
            <Text style={styles.birthLabel}>FECHA DE NACIMIENTO</Text>
            <Text style={styles.birthDate}>{fechaNacimiento}</Text>
          </View>
          <Text style={styles.personNumber}>PERSONA {String(persona.id).padStart(2, "0")} / 07</Text>
        </View>

        <View style={styles.week} accessibilityLabel="Persona asignada a cada día">
          {diasSemana.map((nombreDia, indice) =>
            renderizarDia(nombreDia, indice, dia),
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F1EB",
  },
  page: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 28,
  },
  topline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  kicker: {
    color: "#557263",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  day: {
    color: "#557263",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  intro: {
    marginTop: 28,
    marginBottom: 20,
  },
  eyebrow: {
    color: "#B6533C",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.4,
  },
  title: {
    marginTop: 8,
    color: "#202B25",
    fontSize: 28,
    fontWeight: "700",
  },
  profile: {
    flex: 1,
    maxHeight: 470,
    minHeight: 330,
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#DCE7DE",
    borderRadius: 8,
  },
  avatar: {
    width: 96,
    height: 96,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 48,
    backgroundColor: "#B6533C",
  },
  avatarText: {
    color: "#FFF9F1",
    fontSize: 30,
    fontWeight: "700",
  },
  rule: {
    width: 36,
    height: 2,
    marginTop: 24,
    marginBottom: 20,
    backgroundColor: "#B6533C",
  },
  name: {
    color: "#202B25",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
  surname: {
    marginTop: 4,
    color: "#41574A",
    fontSize: 19,
    textAlign: "center",
  },
  birthBlock: {
    alignItems: "center",
    marginTop: 28,
  },
  birthLabel: {
    color: "#557263",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  birthDate: {
    marginTop: 8,
    color: "#202B25",
    fontSize: 16,
    fontWeight: "600",
  },
  personNumber: {
    position: "absolute",
    bottom: 20,
    color: "#718477",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  weekItem: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: "#E4E2D9",
  },
  weekItemActive: {
    backgroundColor: "#202B25",
  },
  weekLabel: {
    color: "#68746A",
    fontSize: 13,
    fontWeight: "700",
  },
  weekLabelActive: {
    color: "#FFFFFF",
  },
});