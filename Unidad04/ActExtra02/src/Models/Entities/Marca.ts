export class Marca {
  private readonly _idMarca: number;
  private _nombre: string;

  constructor(idMarca: number, nombre: string) {
    this._idMarca = idMarca;
    this._nombre = nombre;
  }

  public get idMarca(): number {
    return this._idMarca;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }
}