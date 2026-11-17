export class PersonWithDeparDTO {
  /**
   * Crea la estructura de respuesta con los datos de una persona y su departamento.
   * Precondiciones: los campos de persona son válidos y `departmentName` corresponde a `departmentId`.
   * Postcondiciones: la instancia expone todos los campos recibidos como propiedades de solo lectura.
   * @param id Identificador de la persona.
   * @param name Nombre de la persona.
   * @param surname Apellidos de la persona.
   * @param birthDate Fecha de nacimiento en formato ISO.
   * @param departmentId Identificador del departamento.
   * @param departmentName Nombre del departamento.
   */
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly surname: string,
    public readonly birthDate: string,
    public readonly departmentId: number,
    public readonly departmentName: string,
  ) {}
}