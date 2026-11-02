import React from 'react';
import { FlatList, ListRenderItemInfo, View, StyleSheet } from 'react-native';
import { Tarea } from '../Models/Entities/Tarea';
import { TareasVM } from '../ViewModels/TareasVM';
import { TarjetaTarea } from '../components/TarjetaTarea';

export const TareasView = () => {
    const [viewModel] = React.useState(() => new TareasVM());
    const [tareas, setTareas] = React.useState<Tarea[]>(viewModel.listado);

    const gestionCambioEstado = (id: number) => {
        viewModel.cambiarEstadoTarea(id);
        setTareas([...viewModel.listado]);
    };

    const renderItemTarea = ({item}: ListRenderItemInfo<Tarea>) => (
        <TarjetaTarea
            tarea={item}
            onToggle={() => gestionCambioEstado(item.idTarea)}
        />
    );

    return (
        <FlatList
            data={viewModel.listado}
            renderItem={renderItemTarea}
            keyExtractor={(item) => item.idTarea.toString()}
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