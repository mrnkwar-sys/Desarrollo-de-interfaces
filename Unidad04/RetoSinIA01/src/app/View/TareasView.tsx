import React from 'react';
import { FlatList, ListRenderItemInfo, View, StyleSheet } from 'react-native';
import { Tarea } from '../Models/Entities/Tarea';
import { TareasVM } from '../ViewModels/TareasVM';
import { TarjetaTarea } from '../components/TarjetaTarea';

const viewModel = new TareasVM();

export const TareasView = () => {
    const renderItemTarea = ({ item }: ListRenderItemInfo<Tarea>) => (
        <View>
            <TarjetaTarea titulo={item.titulo} textoBoton='Completada'></TarjetaTarea>
        </View>
    );

    return (
        <FlatList
            data={viewModel.listado}
            renderItem={renderItemTarea}
            contentContainerStyle={styles.listPadding}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

const styles = StyleSheet.create({
    listPadding: {
        padding: 16,
    },
    separator: {
        height: 10,
    },
})