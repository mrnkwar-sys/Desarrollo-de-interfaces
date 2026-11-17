export class PersonUIModel {
  /**
   * Crea el modelo de presentación de una persona.
   * Precondiciones: los datos recibidos provienen de un DTO válido y el color es un valor utilizable por la vista.
   * Postcondiciones: conserva los datos y el color como propiedades de solo lectura.
   * @param id Identificador de la persona.
   * @param name Nombre de la persona.
   * @param surname Apellidos de la persona.
   * @param birthDate Fecha de nacimiento en formato ISO.
  * @param birthDateLabel Fecha de nacimiento lista para mostrar en la interfaz.
   * @param departmentId Identificador del departamento.
   * @param departmentName Nombre del departamento.
   * @param departmentColor Color de fila asociado al departamento.
   */
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly surname: string,
    public readonly birthDate: string,
    public readonly birthDateLabel: string,
    public readonly departmentId: number,
    public readonly departmentName: string,
    public readonly departmentColor: string,
  ) {}
}