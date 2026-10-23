export class Tarea {
    private _idTarea: number;
    private _titulo: string;
    private _estado: boolean;

    constructor(idTarea: number, titulo: string, estado: boolean){
        this._idTarea = idTarea;
        this._titulo = titulo;
        this._estado = estado;
    }

    public get idTarea(): number {
        return this._idTarea;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get estado(): number {
        return this.estado;
    }

    public set titulo(value: string) {
        this._titulo = value;
    }

    public set estado(value: boolean) {
        this._estado = value;
    }
}