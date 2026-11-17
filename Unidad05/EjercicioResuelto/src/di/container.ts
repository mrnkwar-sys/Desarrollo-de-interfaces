import "reflect-metadata";
import { Container } from "inversify";
import { GetPersonsWithDepartments } from "../application/useCases/GetPersonsWithDepartments";
import { DepartmentRepositoryMock } from "../data/repositories/DepartmentRepositoryMock";
import { PersonRepositoryMock } from "../data/repositories/PersonRepositoryMock";
import type { IDepartmentRepository } from "../domain/interfaces/repositories/IDepartmentRepository";
import type { IPersonRepository } from "../domain/interfaces/repositories/IPersonRepository";
import type { IGetPersonsWithDepartments } from "../domain/interfaces/usecases/IGetPersonsWithDepartments";
import { DomainToUIMapper } from "../presentation/mappers/DomainToUIMapper";
import type { IDomainToUIMapper } from "../presentation/mappers/IDomainToUIMapper";
import { PersonListModel } from "../presentation/viewmodels/PersonListModel";
import { TYPES } from "./types";

/** Contenedor raíz de dependencias de la aplicación. */
export const container = new Container();

container
  .bind<IDepartmentRepository>(TYPES.IDepartmentRepository)
  .to(DepartmentRepositoryMock)
  .inSingletonScope();

container
  .bind<IPersonRepository>(TYPES.IPersonRepository)
  .toDynamicValue(
    /**
     * Construye el repositorio de personas con su dependencia de departamentos.
     * Precondiciones: existe un binding para `IDepartmentRepository`.
     * @returns Un repositorio mock listo para producir los DTO del directorio.
     */
    (context) =>
      new PersonRepositoryMock(
        context.get<IDepartmentRepository>(TYPES.IDepartmentRepository),
      ),
  )
  .inSingletonScope();

container
  .bind<IGetPersonsWithDepartments>(TYPES.IGetPersonsWithDepartments)
  .toDynamicValue(
    /**
     * Construye el caso de uso con el repositorio de personas resuelto.
     * Precondiciones: existe un binding para `IPersonRepository`.
     * @returns El caso de uso de consulta de personas y departamentos.
     */
    (context) =>
      new GetPersonsWithDepartments(
        context.get<IPersonRepository>(TYPES.IPersonRepository),
      ),
  )
  .inSingletonScope();

container
  .bind<IDomainToUIMapper>(TYPES.IDomainToUIMapper)
  .to(DomainToUIMapper)
  .inSingletonScope();

container
  .bind<PersonListModel>(TYPES.PersonListModel)
  .toDynamicValue(
    /**
     * Construye el ViewModel con el caso de uso y el mapper registrados.
     * Precondiciones: existen bindings para `IGetPersonsWithDepartments` e `IDomainToUIMapper`.
     * @returns Un ViewModel inicializado con la lista de personas preparada para la vista.
     */
    (context) =>
      new PersonListModel(
        context.get<IGetPersonsWithDepartments>(
          TYPES.IGetPersonsWithDepartments,
        ),
        context.get<IDomainToUIMapper>(TYPES.IDomainToUIMapper),
      ),
  )
  .inSingletonScope();