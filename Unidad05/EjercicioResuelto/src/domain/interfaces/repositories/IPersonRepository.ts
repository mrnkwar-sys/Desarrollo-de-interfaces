import type { PersonWithDeparDTO } from "../../DTO/PersonWithDeparDTO";

export interface IPersonRepository {
  /**
   * Recupera personas acompañadas por el nombre de su departamento.
   * Precondiciones: el origen de datos puede resolver un departamento para cada persona.
   * @returns Una lista de DTO; puede estar vacía si no hay personas.
   */
  getPersonsWithDepartments(): PersonWithDeparDTO[];
}