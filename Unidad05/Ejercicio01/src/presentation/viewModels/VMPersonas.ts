import type { Persona } from "../../domain/entities/Persona";
import type { IUseCasesPersonas } from "../../domain/interfaces/useCases/IUseCasesPersonas";

/** Prepara los datos de personas y etiquetas que consume la vista. */
export class VMPersonas {
  private readonly _diaActual: number;
  private readonly _listadoPersonas: Persona[];

  /**
   * Obtiene la fecha visible y el listado preparado por el caso de uso.
   * @param useCasesPersonas Servicio de aplicación que proporciona el listado.
   */
  constructor(useCasesPersonas: IUseCasesPersonas) {
    this._diaActual = new Date().getDate();
    this._listadoPersonas = useCasesPersonas.getListadoPersonasPorSexo();
  }

  /** Devuelve las personas que la vista debe presentar. */
  public get listadoPersonas(): Persona[] {
    return this._listadoPersonas;
  }

  /** Devuelve el día del mes capturado al crear este ViewModel. */
  public get diaActual(): number {
    return this._diaActual;
  }

  /**
   * Describe el sexo presente en el listado para mostrarlo en pantalla.
   * @returns `hombres`, `mujeres` o `personas` si el listado está vacío.
   */
  public get descripcionListado(): string {
    const sexo = this._listadoPersonas[0]?.sexo;
    return sexo === "H" ? "hombres" : sexo === "M" ? "mujeres" : "personas";
  }
}