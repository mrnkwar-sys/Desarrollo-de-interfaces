export class Person {
  /**
   * Crea una persona de dominio inmutable.
   * Precondiciones: el identificador es positivo y la fecha usa el formato ISO `AAAA-MM-DD`.
   * Postcondiciones: la instancia conserva los cinco datos recibidos como propiedades de solo lectura.
   * @param id Identificador único de la persona.
   * @param name Nombre de la persona.
   * @param surname Apellidos de la persona.
   * @param birthDate Fecha de nacimiento en formato ISO.
   * @param departmentId Identificador del departamento al que pertenece.
   */
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly surname: string,
    public readonly birthDate: string,
    public readonly departmentId: number,
  ) {}
}