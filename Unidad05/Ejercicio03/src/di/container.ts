import "reflect-metadata";
import { Container } from "inversify";
import { UseCasesPersonas } from "../application/useCasesClasses/UseCasesPersonas";
import { RepositoryPersona } from "../data/repositories/RepositoryPersona";
import type { IRepositoryPersonas } from "../domain/interfaces/repositories/IRepositoryPersonas";
import type { IUsesCasesPersonas } from "../domain/interfaces/useCases/IUsesCasesPersonas";
import { VMPersona } from "../presentation/viewModels/VMPersona";
import { TYPES } from "./types";

/** Contenedor raíz con los bindings de repositorio, caso de uso y ViewModel.
 * Precondiciones: los módulos registrados están disponibles para importar.
 * Postcondiciones: permite resolver las dependencias de la pantalla por sus identificadores.
 */
export const container = new Container();

// Binding: permite resolver el repositorio mock por su contrato; devuelve la misma instancia.
container
  .bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas)
  .to(RepositoryPersona)
  .inSingletonScope();

// Binding: crea el caso de uso con el repositorio resuelto desde el contenedor.
container
  .bind<IUsesCasesPersonas>(TYPES.IUsesCasesPersonas)
  .toDynamicValue(
    /** Construye el caso de uso con el repositorio resuelto desde el contenedor.
     * Precondiciones: el binding `TYPES.IRepositoryPersonas` está registrado.
     * Postcondiciones: devuelve un caso de uso listo para consultar personas del día.
     */
    (context) =>
      new UseCasesPersonas(
        context.get<IRepositoryPersonas>(TYPES.IRepositoryPersonas),
      ),
  )
  .inSingletonScope();

// Binding: construye el ViewModel con el caso de uso registrado.
container
  .bind<VMPersona>(TYPES.VMPersona)
  .toDynamicValue(
    /** Construye el ViewModel con el caso de uso registrado.
     * Precondiciones: el binding `TYPES.IUsesCasesPersonas` está disponible.
     * Postcondiciones: devuelve un ViewModel inicializado con la persona actual.
     */
    (context) =>
      new VMPersona(
        context.get<IUsesCasesPersonas>(TYPES.IUsesCasesPersonas),
      ),
  );