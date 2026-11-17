import type { IGetPersonsWithDepartments } from "../../domain/interfaces/usecases/IGetPersonsWithDepartments";
import type { IDomainToUIMapper } from "../mappers/IDomainToUIMapper";
import type { PersonUIModel } from "../models/PersonUIModel";

export class PersonListModel {
  private _persons: PersonUIModel[] = [];

  /**
   * Construye el ViewModel y carga los datos iniciales para la vista.
   * Precondiciones: el caso de uso y el mapper cumplen sus contratos.
   * Postcondiciones: almacena las dependencias y deja la lista preparada mediante `loadPersons`.
   * @param getPersonsWithDepartments Caso de uso que proporciona los DTO.
   * @param mapper Convierte los DTO en modelos UI.
   */
  constructor(
    private readonly getPersonsWithDepartments: IGetPersonsWithDepartments,
    private readonly mapper: IDomainToUIMapper,
  ) {
    this.loadPersons();
  }

  /**
   * Expone la lista de personas preparada para la vista.
   * Precondiciones: el ViewModel ha sido construido correctamente.
   * @returns La lista actual de modelos UI, vacía si no contiene personas.
   */
  public get persons(): PersonUIModel[] {
    return this._persons;
  }

  /**
   * Consulta las personas y reemplaza la lista por sus modelos UI.
   * Precondiciones: el caso de uso y el mapper siguen disponibles.
   * @returns No devuelve valor; actualiza `persons` con el resultado de la consulta.
   */
  public loadPersons(): void {
    this._persons = this.getPersonsWithDepartments
      .execute()
      .map((person) => this.mapper.map(person));
  }
}