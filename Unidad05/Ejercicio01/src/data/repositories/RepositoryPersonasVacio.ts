import { injectable } from "inversify";
import type { Persona } from "../../domain/entities/Persona";
import type { IPersonasRepository } from "../../domain/interfaces/repositories/IPersonasRepository";

@injectable()
/** Repositorio en memoria sin datos, útil para probar el estado vacío. */
export class RepositoryPersonasVacio implements IPersonasRepository {
  private readonly personas: Persona[] = [];

  /**
   * Devuelve una copia del listado vacío del repositorio.
   * @returns Un arreglo vacío de personas.
   */
  public getListadoPersonas(): Persona[] {
    return [...this.personas];
  }
}