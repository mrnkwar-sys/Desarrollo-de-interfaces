import { PersonaView } from "../presentation/views/PersonaView";

/** Define la ruta inicial y delega su presentación a `PersonaView`.
 * Precondiciones: Expo Router resuelve la ruta raíz de la aplicación.
 * Postcondiciones: devuelve la pantalla con la persona del día.
 */
export default function Index() {
  return <PersonaView />;
}