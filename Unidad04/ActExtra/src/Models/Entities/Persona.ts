/** Representa a una persona y su asignación a un departamento. */
export class Persona {
  private readonly _idPer: number;
  private _nombre: string;
  private _apellidos: string;
  private readonly _idDep: number;

  /** Crea una persona con sus datos y el departamento al que pertenece.
   * @param idPer Identificador único de la persona.
   * @param nombre Nombre de pila.
   * @param apellidos Apellidos de la persona.
   * @param idDep Identificador del departamento asignado.
   */
  constructor(idPer: number, nombre: string, apellidos: string, idDep: number) {
    this._idPer = idPer;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._idDep = idDep;
  }

  /** Devuelve el identificador inmutable de la persona. */
  public get idPer(): number {
    return this._idPer;
  }

  /** Devuelve el nombre actual de la persona. */
  public get nombre(): string {
    return this._nombre;
  }

  /** Actualiza el nombre de la persona.
   * @param value Nuevo nombre.
   */
  public set nombre(value: string) {
    this._nombre = value;
  }

  /** Devuelve los apellidos actuales de la persona. */
  public get apellidos(): string {
    return this._apellidos;
  }

  /** Actualiza los apellidos de la persona.
   * @param value Nuevos apellidos.
   */
  public set apellidos(value: string) {
    this._apellidos = value;
  }

  /** Devuelve el identificador inmutable del departamento asignado. */
  public get idDep(): number {
    return this._idDep;
  }
}