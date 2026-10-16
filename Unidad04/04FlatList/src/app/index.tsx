import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';

// 1. Definimos la interfaz del tipo de dato para las personas
interface Persona {
  id: string;
  nombre: string;
  apellidos: string;
}

// 2. Creamos la lista de personas inventadas con id único
const listaPersonas: Persona[] = [
  { id: '1', nombre: 'Carlos', apellidos: 'García Pérez' },
  { id: '2', nombre: 'María', apellidos: 'López Fernández' },
  { id: '3', nombre: 'Alejandro', apellidos: 'Martínez Ruiz' },
  { id: '4', nombre: 'Lucía', apellidos: 'Gómez Sánchez' },
  { id: '5', nombre: 'Javier', apellidos: 'Navarro Torres' },
  { id: '6', nombre: 'Elena', apellidos: 'Díaz Romero' },
  { id: '7', nombre: 'David', apellidos: 'Serrano Moreno' },
  { id: '8', nombre: 'Paula', apellidos: 'Molina Castro' },
  { id: '9', nombre: 'Gonzalo', apellidos: 'Ortega Marín' },
  { id: '10', nombre: 'Carmen', apellidos: 'Delgado Gil' },
];

export default function App() {
  // 3. Función que renderiza cada ítem de la lista
  const renderItemPersona = ({ item }: ListRenderItemInfo<Persona>) => (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{item.nombre.charAt(0)}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.apellidos}>{item.apellidos}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Título de la aplicación */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>04FlatList - Directorio</Text>
      </View>

      {/* Componente FlatList principal */}
      <FlatList
        data={listaPersonas}
        renderItem={renderItemPersona}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

// 4. Estilos de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    padding: 20,
    backgroundColor: '#1E293B',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listPadding: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatarContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  apellidos: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
  separator: {
    height: 10,
  },
});