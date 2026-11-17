import type { PersonWithDeparDTO } from "../../domain/DTO/PersonWithDeparDTO";
import type { PersonUIModel } from "../models/PersonUIModel";

export interface IDomainToUIMapper {
  /**
   * Convierte un DTO de dominio en el modelo consumido por la vista.
   * Precondiciones: `person` contiene datos completos de persona y departamento.
   * @returns Un modelo UI equivalente con los campos y el color de departamento.
   */
  map(person: PersonWithDeparDTO): PersonUIModel;
}