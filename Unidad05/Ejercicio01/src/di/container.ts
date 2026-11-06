import "reflect-metadata";
import { Container } from "inversify";
import { RepositoryPersonas } from "../data/repositories/RepositoryPersonas";
import type { IPersonasRepository } from "../domain/interfaces/repositories/IPersonasRepository";
import type { IUseCasesPersonas } from "../domain/interfaces/useCases/IUseCasesPersonas";
import { UseCasesPersonas } from "../application/useCasesClasses/UseCasesPersonas";
import { VMPersonas } from "../presentation/viewModels/VMPersonas";
import { TYPES } from "./types";

/** Contenedor compartido que configura las dependencias de la aplicación. */
export const container = new Container();

/** Registra el repositorio de ejemplo como implementación activa del contrato. */
container
  .bind<IPersonasRepository>(TYPES.IPersonasRepository)
  .to(RepositoryPersonas)
  .inSingletonScope();
/** Construye el caso de uso e inyecta el repositorio registrado. */
container
  .bind<IUseCasesPersonas>(TYPES.IUseCasesPersonas)
  .toDynamicValue((context) =>
    new UseCasesPersonas(
      context.get<IPersonasRepository>(TYPES.IPersonasRepository),
    ),
  )
  .inSingletonScope();
/** Construye el ViewModel e inyecta el caso de uso registrado. */
container
  .bind<VMPersonas>(TYPES.VMPersonas)
  .toDynamicValue((context) =>
    new VMPersonas(context.get<IUseCasesPersonas>(TYPES.IUseCasesPersonas)),
  );