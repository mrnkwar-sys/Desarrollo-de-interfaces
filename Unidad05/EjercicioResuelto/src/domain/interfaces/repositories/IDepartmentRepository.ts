import type { Department } from "../../Entities/Department";

export interface IDepartmentRepository {
  /**
   * Recupera los departamentos disponibles.
   * Precondiciones: el repositorio está inicializado y puede consultar su fuente de datos.
   * @returns Una lista de departamentos; puede estar vacía si no hay registros.
   */
  getDepartments(): Department[];
}