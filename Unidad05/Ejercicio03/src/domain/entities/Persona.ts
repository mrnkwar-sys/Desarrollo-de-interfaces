/** Entidad de dominio con los datos personales de una persona.
 * Precondiciones: el identificador es numérico y los datos recibidos son válidos.
 * Postcondiciones: conserva el identificador y permite consultar o actualizar los demás datos.
 */
export class Persona {
  private readonly _id: number;
  private _nombre: string;
  private _apellidos: string;
  private _fechaNac: Date;

  /** Crea una persona con su identificador, nombre, apellidos y nacimiento.
   * Precondiciones: `id`, `nombre`, `apellidos` y `fechaNac` representan datos válidos.
   * Postcondiciones: inicializa todos los atributos; `id` queda inmutable.
   */
  constructor(id: number, nombre: string, apellidos: string, fechaNac: Date) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._fechaNac = fechaNac;
  }

  /** Devuelve el identificador inmutable de la persona.
   * Precondiciones: la instancia fue construida.
   * Postcondiciones: devuelve el identificador asignado en el constructor sin modificar el estado.
   */
  public get id(): number {
    return this._id;
  }

  /** Devuelve el nombre de la persona.
   * Precondiciones: la instancia fue construida.
   * Postcondiciones: devuelve el nombre actual sin modificar el estado.
   */
  public get nombre(): string {
    return this._nombre;
  }

  /** Actualiza el nombre de la persona.
   * Precondiciones: `value` contiene el nombre que se desea asignar.
   * Postcondiciones: `nombre` devuelve el valor recibido.
   */
  public set nombre(value: string) {
    this._nombre = value;
  }

  /** Devuelve los apellidos de la persona.
   * Precondiciones: la instancia fue construida.
   * Postcondiciones: devuelve los apellidos actuales sin modificar el estado.
   */
  public get apellidos(): string {
    return this._apellidos;
  }

  /** Actualiza los apellidos de la persona.
   * Precondiciones: `value` contiene los apellidos que se desean asignar.
   * Postcondiciones: `apellidos` devuelve el valor recibido.
   */
  public set apellidos(value: string) {
    this._apellidos = value;
  }

  /** Devuelve la fecha de nacimiento de la persona.
   * Precondiciones: la instancia fue construida.
   * Postcondiciones: devuelve la fecha actual almacenada sin modificar el estado.
   */
  public get fechaNac(): Date {
    return this._fechaNac;
  }

  /** Actualiza la fecha de nacimiento de la persona.
   * Precondiciones: `value` es la fecha que se desea almacenar.
   * Postcondiciones: `fechaNac` devuelve el valor recibido.
   */
  public set fechaNac(value: Date) {
    this._fechaNac = value;
  }
}