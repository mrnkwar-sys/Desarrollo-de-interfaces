import { Stack } from 'expo-router';

/** Configura el navegador raíz sin cabecera, dejando el diseño a la vista. */
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}