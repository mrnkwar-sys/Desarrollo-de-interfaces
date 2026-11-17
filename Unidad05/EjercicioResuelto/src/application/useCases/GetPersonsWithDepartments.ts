import type { IPersonRepository } from "../../domain/interfaces/repositories/IPersonRepository";
import type { IGetPersonsWithDepartments } from "../../domain/interfaces/usecases/IGetPersonsWithDepartments";
import type { PersonWithDeparDTO } from "../../domain/DTO/PersonWithDeparDTO";

export class GetPersonsWithDepartments implements IGetPersonsWithDepartments {
  /**
   * Construye el caso de uso con el repositorio que consulta personas y departamentos.
   * Precondiciones: `personRepository` implementa `IPersonRepository`.
   * Postcondiciones: conserva el repositorio para las ejecuciones posteriores.
   * @param personRepository Repositorio que proporciona los DTO requeridos.
   */
  constructor(private readonly personRepository: IPersonRepository) {}

  /**
   * Obtiene el listado de personas con el nombre de su departamento.
   * Precondiciones: el repositorio conserva su disponibilidad y sus datos relacionados son coherentes.
   * @returns Los DTO proporcionados por el repositorio; la lista puede estar vacía.
   */
  public execute(): PersonWithDeparDTO[] {
    return this.personRepository.getPersonsWithDepartments();
  }
}