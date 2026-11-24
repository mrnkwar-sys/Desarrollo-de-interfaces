export type SexoEquino = "Macho" | "Hembra";

export class Equino {
  public constructor(
    private readonly _id: number,
    private _nombre: string,
    private _sexo: SexoEquino,
    private readonly _idRaza: number,
    private _fechaEntrega: Date,
  ) {}

  public get id(): number { return this._id; }
  public get nombre(): string { return this._nombre; }
  public set nombre(value: string) { this._nombre = value; }
  public get sexo(): SexoEquino { return this._sexo; }
  public set sexo(value: SexoEquino) { this._sexo = value; }
  public get idRaza(): number { return this._idRaza; }
  public get fechaEntrega(): Date { return this._fechaEntrega; }
  public set fechaEntrega(value: Date) { this._fechaEntrega = value; }
}
