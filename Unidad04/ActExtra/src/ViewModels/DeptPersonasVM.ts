import { RepositoryDept } from '../Models/Data/RepositoryDept';
import { RepositoryPersona } from '../Models/Data/RepositoryPersona';
import { Departamento } from '../Models/Entities/Departamento';
import { Persona } from '../Models/Entities/Persona';

/** Coordina los datos de departamentos y empleados que consume la vista. */
export class DeptPersonasVM {
  private readonly _listadoDepartamentos: Departamento[];
  private _listadoPersonasPorDept: Persona[];
  private _numPersonasPorDept: number;
  private _departamentoSeleccionado: Departamento | null;

  /** Carga los departamentos y selecciona Tecnología para mostrar un equipo inicial. */
  constructor() {
    this._listadoDepartamentos = RepositoryDept.getDepartamentos();
    this._listadoPersonasPorDept = [];
    this._numPersonasPorDept = 0;
    this._departamentoSeleccionado =
      this._listadoDepartamentos.find((departamento) => departamento.idDept === 2) ?? null;
    this.rellenarListadoPersonas();
    this.calcularNumeroPersonas();
  }

  /** Devuelve los departamentos disponibles para la vista. */
  public get listadoDepartamentos(): Departamento[] {
    return this._listadoDepartamentos;
  }

  /** Devuelve las personas del departamento seleccionado. */
  public get listadoPersonasPorDept(): Persona[] {
    return this._listadoPersonasPorDept;
  }

  /** Devuelve el número de personas del departamento seleccionado. */
  public get numPersonasPorDept(): number {
    return this._numPersonasPorDept;
  }

  /** Devuelve el departamento seleccionado, si existe. */
  public get departamentoSeleccionado(): Departamento | null {
    return this._departamentoSeleccionado;
  }

  /** Selecciona un departamento y actualiza sus personas y contador.
   * @param value Departamento seleccionado o `null` para limpiar la selección.
   */
  public set departamentoSeleccionado(value: Departamento | null) {
    this._departamentoSeleccionado = value;
    this.rellenarListadoPersonas();
    this.calcularNumeroPersonas();
  }

  /** Consulta el repositorio y reemplaza la lista de personas seleccionada. */
  private rellenarListadoPersonas(): void {
    this._listadoPersonasPorDept = this._departamentoSeleccionado
      ? RepositoryPersona.getListadoPersonasPorDept(this._departamentoSeleccionado.idDept)
      : [];
  }

  /** Recalcula el contador a partir de la lista de personas actual. */
  private calcularNumeroPersonas(): void {
    this._numPersonasPorDept = this._listadoPersonasPorDept.length;
  }
}