import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ListRenderItemInfo,
} from 'react-native';
import { Persona } from '../Models/Entities/Persona';
import { PersonasViewModel } from '../ViewModels/PersonasViewModel';

// Instanciamos el ViewModel
const viewModel = new PersonasViewModel();

export const PersonasView = () => {
  const handlePressPersona = (persona: Persona) => {
    viewModel.personaSeleccionada = persona;
  };

  const renderItemPersona = ({ item }: ListRenderItemInfo<Persona>) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => handlePressPersona(item)}
    >
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{item.nombre.charAt(0)}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.apellidos}>{item.apellidos}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Personas (MVVM)</Text>
      </View>

      <FlatList
        data={viewModel.listado}
        renderItem={renderItemPersona}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

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
    backgroundColor: '#2563EB',
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