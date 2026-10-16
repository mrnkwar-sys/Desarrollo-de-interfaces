export class Persona {
  private _id: string;
  private _nombre: string;
  private _apellidos: string;

  constructor(id: string, nombre: string, apellidos: string) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
  }

  // Getters y Setters
  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }

  public get apellidos(): string {
    return this._apellidos;
  }

  public set apellidos(value: string) {
    this._apellidos = value;
  }
}