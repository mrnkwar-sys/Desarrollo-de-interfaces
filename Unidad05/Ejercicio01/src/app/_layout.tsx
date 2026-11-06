import { Stack } from "expo-router";

/** Define la navegación raíz de la aplicación sin encabezado automático. */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}