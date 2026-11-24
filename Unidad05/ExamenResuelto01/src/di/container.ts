import "reflect-metadata";
import { Container } from "inversify";
import { RepositoryEquino } from "../data/repositories/RepositoryEquino";
import { RepositoryRaza } from "../data/repositories/RepositoryRaza";
import { IRepositoryEquino } from "../domain/interfaces/repositories/IRepositoryEquino";
import { IRepositoryRazas } from "../domain/interfaces/repositories/IRepositoryRazas";
import { UseCaseListadoCaballosFecha } from "../application/useCasesClasses/UseCaseListadoCaballosFecha";
import { UseCaseActualizarEquino } from "../application/useCasesClasses/UseCaseActualizarEquino";
import { UseCaseListadoCompletoRazas } from "../application/useCasesClasses/UseCaseListadoCompletoRazas";
import { IUseCaseListadoCaballosFecha } from "../application/useCasesInterfaces/IUseCaseListadoCaballosFecha";
import { IUseCaseActualizarEquino } from "../application/useCasesInterfaces/IUseCaseActualizarEquino";
import { IUseCaseListadoCompletoRazas } from "../application/useCasesInterfaces/IUseCaseListadoCompletoRazas";
import { AsignarRazasVM } from "../presentation/viewModels/AsignarRazasVM";
import { TYPES } from "./types";

export const container = new Container();

container.bind<IRepositoryEquino>(TYPES.IRepositoryEquino).to(RepositoryEquino).inSingletonScope();
container.bind<IRepositoryRazas>(TYPES.IRepositoryRazas).to(RepositoryRaza).inSingletonScope();
container.bind<IUseCaseListadoCaballosFecha>(TYPES.IUseCaseListadoCaballosFecha).toDynamicValue((context) =>
  new UseCaseListadoCaballosFecha(context.get<IRepositoryEquino>(TYPES.IRepositoryEquino)),
).inSingletonScope();
container.bind<IUseCaseActualizarEquino>(TYPES.IUseCaseActualizarEquino).toDynamicValue((context) =>
  new UseCaseActualizarEquino(context.get<IRepositoryEquino>(TYPES.IRepositoryEquino)),
).inSingletonScope();
container.bind<IUseCaseListadoCompletoRazas>(TYPES.IUseCaseListadoCompletoRazas).toDynamicValue((context) =>
  new UseCaseListadoCompletoRazas(context.get<IRepositoryRazas>(TYPES.IRepositoryRazas)),
).inSingletonScope();
container.bind<AsignarRazasVM>(TYPES.AsignarRazasVM).toDynamicValue((context) =>
  new AsignarRazasVM(
    context.get<IUseCaseListadoCaballosFecha>(TYPES.IUseCaseListadoCaballosFecha),
    context.get<IUseCaseActualizarEquino>(TYPES.IUseCaseActualizarEquino),
    context.get<IUseCaseListadoCompletoRazas>(TYPES.IUseCaseListadoCompletoRazas),
  ),
).inSingletonScope();
