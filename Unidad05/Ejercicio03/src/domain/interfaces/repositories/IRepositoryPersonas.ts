import type { Persona } from "../../entities/Persona";

/** Contrato de acceso a la fuente de datos de personas.
 * Precondiciones: la implementación debe proporcionar un origen de personas.
 * Postcondiciones: expone una operación para recuperar sus registros.
 */
export interface IRepositoryPersonas {
  /** Recupera las personas disponibles en el repositorio.
   * Precondiciones: el repositorio está inicializado.
   * Postcondiciones: devuelve una lista de entidades `Persona`, que puede estar vacía.
   */
  getPersonas(): Persona[];
}