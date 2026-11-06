import type { Persona } from "../../domain/entities/Persona";
import type { IPersonasRepository } from "../../domain/interfaces/repositories/IPersonasRepository";
import type { IUseCasesPersonas } from "../../domain/interfaces/useCases/IUseCasesPersonas";

/** Implementa las reglas de aplicación para consultar personas por día. */
export class UseCasesPersonas implements IUseCasesPersonas {
  /**
   * Crea el caso de uso con el repositorio que proporciona los datos.
   * @param repositoryPersonas Implementación del contrato de repositorio.
   */
  constructor(private readonly repositoryPersonas: IPersonasRepository) {}

  /**
   * Filtra las personas según la paridad del día del mes actual.
   * @returns Personas `H` si el día es par o `M` si es impar.
   */
  public getListadoPersonasPorSexo(): Persona[] {
    const sexoDelDia = new Date().getDate() % 2 === 0 ? "H" : "M";
    return this.repositoryPersonas
      .getListadoPersonas()
      .filter((persona) => persona.sexo === sexoDelDia);
  }
}