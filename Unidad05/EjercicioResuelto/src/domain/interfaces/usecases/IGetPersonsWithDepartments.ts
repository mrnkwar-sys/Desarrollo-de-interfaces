import type { PersonWithDeparDTO } from "../../DTO/PersonWithDeparDTO";

export interface IGetPersonsWithDepartments {
  /**
   * Ejecuta la consulta de personas con sus departamentos.
   * Precondiciones: el repositorio requerido está disponible y cumple su contrato.
   * @returns Una lista de DTO con los datos de persona y el nombre del departamento; puede estar vacía.
   */
  execute(): PersonWithDeparDTO[];
}