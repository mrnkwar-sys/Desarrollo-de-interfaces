import { Tarea } from "../Models/Entities/Tarea";
import { RepositoryTareas } from "../Models/Data/RepositoryTarea";

export class TareasVM {
    private _listadoTareas: Tarea[]

    constructor(){
        this._listadoTareas = RepositoryTareas.getTareas();
    }

    public get listado(): Tarea[] {
        return this._listadoTareas;
    }
}