export class Department {
  /**
   * Crea una entidad de departamento inmutable.
   * Precondiciones: `id` identifica de forma única al departamento y `name` no está vacío.
   * Postcondiciones: la instancia conserva su identificador y nombre como propiedades de solo lectura.
   * @param id Identificador único del departamento.
   * @param name Nombre visible del departamento.
   */
  constructor(
    public readonly id: number,
    public readonly name: string,
  ) {}
}