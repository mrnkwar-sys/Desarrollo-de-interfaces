import type { Persona } from "../../entities/Persona";

/** Contrato para obtener personas desde una fuente de datos. */
export interface IPersonasRepository {
  /**
   * Recupera el listado disponible en el repositorio.
   * @returns Personas almacenadas; puede ser un arreglo vacío.
   */
  getListadoPersonas(): Persona[];
}