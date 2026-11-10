import type { Persona } from "../../entities/Persona";

/** Contrato de las operaciones de aplicación para consultar personas.
 * Precondiciones: debe existir una implementación con acceso al repositorio de personas.
 * Postcondiciones: ofrece la operación que determina la persona del día.
 */
export interface IUsesCasesPersonas {
  /** Obtiene la persona asignada al día de la semana actual.
   * Precondiciones: el repositorio contiene al menos siete personas ordenadas desde el domingo.
   * Postcondiciones: devuelve la entidad correspondiente al día actual.
   */
  getPersonaDelDia(): Persona;
}