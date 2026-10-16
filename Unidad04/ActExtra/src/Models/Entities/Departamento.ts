/** Representa un departamento identificable dentro de la organización. */
export class Departamento {
  private readonly _idDept: number;
  private _nombre: string;

  /** Crea un departamento con su identificador y nombre iniciales.
   * @param idDept Identificador único del departamento.
   * @param nombre Nombre visible del departamento.
   */
  constructor(idDept: number, nombre: string) {
    this._idDept = idDept;
    this._nombre = nombre;
  }

  /** Devuelve el identificador inmutable del departamento. */
  public get idDept(): number {
    return this._idDept;
  }

  /** Devuelve el nombre actual del departamento. */
  public get nombre(): string {
    return this._nombre;
  }

  /** Actualiza el nombre visible del departamento.
   * @param value Nuevo nombre del departamento.
   */
  public set nombre(value: string) {
    this._nombre = value;
  }
}