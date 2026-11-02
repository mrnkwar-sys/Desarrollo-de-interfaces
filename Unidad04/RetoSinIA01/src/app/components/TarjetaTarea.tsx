import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tarea } from '../Models/Entities/Tarea';

interface TarjetaTareaProps {
  tarea: Tarea;
  onToggle: () => void;
}

export function TarjetaTarea({ tarea, onToggle }: TarjetaTareaProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.button, tarea.estado && styles.textoCompletado]}>
                {tarea.titulo}
            </Text>

            <Pressable
                style={[styles.button, tarea.estado ? styles.buttonCompletado : styles.buttonPendiente]}
                onPress={onToggle}
            >
                <Text>
                    {tarea.estado ? 'Pendiente' : 'Completada'}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#000000',
  },
  textoCompletado: {
    textDecorationLine: 'line-through', // Tacha el texto si está completada
    color: '#888888',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonPendiente: {
    backgroundColor: '#507dc0',
  },
  buttonCompletado: {
    backgroundColor: '#e05050',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

