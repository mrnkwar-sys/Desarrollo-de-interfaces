/** Valores permitidos para identificar el sexo usado por el ejercicio. */
export type Sexo = "H" | "M";

/** Entidad de dominio que contiene los datos de una persona. */
export class Persona {
  private readonly _id: number;
  private _nombre: string;
  private _apellidos: string;
  private _sexo: Sexo;

  /**
   * Crea una persona con su identificador y datos personales.
   * @param id Identificador numérico de la persona.
   * @param nombre Nombre de pila.
   * @param apellidos Apellidos.
   * @param sexo Valor permitido de sexo: `H` o `M`.
   */
  constructor(id: number, nombre: string, apellidos: string, sexo: Sexo) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._sexo = sexo;
  }

  /** Devuelve el identificador inmutable de la persona. */
  public get id(): number {
    return this._id;
  }

  /** Devuelve el nombre actual de la persona. */
  public get nombre(): string {
    return this._nombre;
  }

  /**
   * Actualiza el nombre de la persona.
   * @param value Nuevo nombre.
   */
  public set nombre(value: string) {
    this._nombre = value;
  }

  /** Devuelve los apellidos actuales de la persona. */
  public get apellidos(): string {
    return this._apellidos;
  }

  /**
   * Actualiza los apellidos de la persona.
   * @param value Nuevos apellidos.
   */
  public set apellidos(value: string) {
    this._apellidos = value;
  }

  /** Devuelve el sexo actual de la persona. */
  public get sexo(): Sexo {
    return this._sexo;
  }

  /**
   * Actualiza el sexo de la persona.
   * @param value Nuevo sexo, limitado al tipo `H` o `M`.
   */
  public set sexo(value: Sexo) {
    this._sexo = value;
  }
}