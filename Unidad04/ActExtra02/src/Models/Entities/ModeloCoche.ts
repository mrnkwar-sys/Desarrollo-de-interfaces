export class ModeloCoche {
  private readonly _idModelo: number;
  private _nombreModelo: string;
  private readonly _idMarca: number;
  private _alto: number;
  private _ancho: number;
  private _urlFoto: string;

  constructor(
    idModelo: number,
    nombreModelo: string,
    idMarca: number,
    alto: number,
    ancho: number,
    urlFoto: string,
  ) {
    this._idModelo = idModelo;
    this._nombreModelo = nombreModelo;
    this._idMarca = idMarca;
    this._alto = alto;
    this._ancho = ancho;
    this._urlFoto = urlFoto;
  }

  public get idModelo(): number {
    return this._idModelo;
  }

  public get nombreModelo(): string {
    return this._nombreModelo;
  }

  public set nombreModelo(value: string) {
    this._nombreModelo = value;
  }

  public get idMarca(): number {
    return this._idMarca;
  }

  public get alto(): number {
    return this._alto;
  }

  public set alto(value: number) {
    this._alto = value;
  }

  public get ancho(): number {
    return this._ancho;
  }

  public set ancho(value: number) {
    this._ancho = value;
  }

  public get urlFoto(): string {
    return this._urlFoto;
  }

  public set urlFoto(value: string) {
    this._urlFoto = value;
  }
}