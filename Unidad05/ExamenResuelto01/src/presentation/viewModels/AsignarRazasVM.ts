import { Equino } from "../../domain/entities/Equino";
import { Raza } from "../../domain/entities/Raza";
import { IUseCaseActualizarEquino } from "../../application/useCasesInterfaces/IUseCaseActualizarEquino";
import { IUseCaseListadoCaballosFecha } from "../../application/useCasesInterfaces/IUseCaseListadoCaballosFecha";
import { IUseCaseListadoCompletoRazas } from "../../application/useCasesInterfaces/IUseCaseListadoCompletoRazas";
import { EquinoConColor } from "../models/EquinoConColor";
import { EquinoConColorMapper } from "../models/mappers/EquinoConColorMapper";

export class AsignarRazasVM {
  private readonly _fecha = new Date();
  private _listadoEquinoConColor: EquinoConColor[] = [];
  private _listadoRazas: Raza[] = [];
  private _mensaje = "";
  private _numActualizaciones = 0;
  private _isLoading = false;

  public constructor(
    private readonly useCaseListadoFecha: IUseCaseListadoCaballosFecha,
    private readonly useCaseActualizar: IUseCaseActualizarEquino,
    private readonly useCaseListadoRazas: IUseCaseListadoCompletoRazas,
  ) {
    this.cargarDatos();
  }

  public get fecha(): Date { return this._fecha; }
  public get listadoEquinoConColor(): EquinoConColor[] { return this._listadoEquinoConColor; }
  public get listadoRazas(): Raza[] { return this._listadoRazas; }
  public get mensaje(): string { return this._mensaje; }
  public get numActualizaciones(): number { return this._numActualizaciones; }
  public get isLoading(): boolean { return this._isLoading; }

  private cargarDatos(): void {
    this._isLoading = true;
    const equinos: Equino[] = this.useCaseListadoFecha.execute(this._fecha);
    this._listadoEquinoConColor = equinos.map(EquinoConColorMapper.toPresentation);
    this._listadoRazas = this.useCaseListadoRazas.execute();
    this._isLoading = false;
  }

  public actualizarRazas(): void {
    this._isLoading = true;
    this._numActualizaciones = 0;
    for (const equino of this._listadoEquinoConColor) {
      if (equino.idRazaSeleccionada > 0) {
        if (this.useCaseActualizar.execute(equino.idEquino, equino.idRazaSeleccionada)) {
          this._numActualizaciones++;
        }
      }
    }
    this._mensaje = `Se han actualizado ${this._numActualizaciones} registros.`;
    this.cargarDatos();
  }
}
