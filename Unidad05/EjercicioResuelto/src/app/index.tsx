import { PersonListScreen } from "../presentation/views/PersonListScreen";

/**
 * Resuelve la ruta inicial y muestra el directorio de personas.
 * Precondiciones: Expo Router carga la ruta raíz de la aplicación.
 * @returns La pantalla `PersonListScreen` como contenido de la ruta.
 */
export default function Index() {
  return <PersonListScreen />;
}