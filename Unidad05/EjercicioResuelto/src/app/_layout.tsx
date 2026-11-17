import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * Define el layout raíz de las rutas de Expo Router.
 * Precondiciones: Expo Router está inicializado en la aplicación.
 * @returns El navegador de pila sin cabecera y la configuración de la barra de estado.
 */
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}