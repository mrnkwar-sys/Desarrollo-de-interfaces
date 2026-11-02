import { Tarea } from "../Models/Entities/Tarea";
import { RepositoryTareas } from "../Models/Data/RepositoryTarea";

//El VM debe ofrecer a View dos cosas:
//1. Los datos que la vista necesita mostrar (lista de tareas)
//2. Las acciones que la vista necesita ejecutar cuando el usuario interactua (cambiar el estado a completada/pendiente)
export class TareasVM {
    private _listadoTareas: Tarea[]

    constructor(){
        this._listadoTareas = RepositoryTareas.getTareas();
    }

    public get listado(): Tarea[] {
        return this._listadoTareas;
    }

    //Cambia el estado de la tarea de completada o pendiente o viceversa
    public cambiarEstadoTarea(id: number){
        //Guarda la tarea cuyo id coincide con el id introducido en la funcion
        const tarea = this._listadoTareas.find(tarea => tarea.idTarea === id);

        //Si dicho id es encontrado (true) se cambia el estado a su contrario
        if (tarea) {
            tarea.estado = !tarea.estado;
        }
    }
}