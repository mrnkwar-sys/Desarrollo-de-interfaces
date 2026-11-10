import { Stack } from "expo-router";

/** Configura el navegador raíz de Expo Router.
 * Precondiciones: Expo Router carga este archivo como layout raíz.
 * Postcondiciones: devuelve un Stack sin cabecera visible para las rutas.
 */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}