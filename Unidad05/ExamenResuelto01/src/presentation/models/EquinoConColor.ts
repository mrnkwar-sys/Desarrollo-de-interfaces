import { SexoEquino } from "../../domain/entities/Equino";

export class EquinoConColor {
  private _colorFondo: string;
  private _idRazaSeleccionada = 0;

  public constructor(
    private readonly _nombreEquino: string,
    private readonly _idEquino: number,
    private readonly _sexo: SexoEquino,
  ) {
    this._colorFondo = this.asignarColor();
  }

  public get nombreEquino(): string { return this._nombreEquino; }
  public get idEquino(): number { return this._idEquino; }
  public get idRazaSeleccionada(): number { return this._idRazaSeleccionada; }
  public set idRazaSeleccionada(value: number) { this._idRazaSeleccionada = value; }
  public get colorFondo(): string { return this._colorFondo; }
  public get sexo(): SexoEquino { return this._sexo; }

  private asignarColor(): string {
    return this._sexo === "Hembra" ? "#D8ECFF" : "#FFFFFF";
  }
}
