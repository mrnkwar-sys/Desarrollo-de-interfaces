import type { Persona } from "../../domain/entities/Persona";
import type { IRepositoryPersonas } from "../../domain/interfaces/repositories/IRepositoryPersonas";
import type { IUsesCasesPersonas } from "../../domain/interfaces/useCases/IUsesCasesPersonas";

/** Caso de uso que determina qué persona corresponde al día actual.
 * Precondiciones: recibe un repositorio que contiene siete personas ordenadas desde el domingo.
 * Postcondiciones: puede resolver la persona del día mediante el contrato de aplicación.
 */
export class UseCasesPersonas implements IUsesCasesPersonas {
  /** Crea el caso de uso con la abstracción del repositorio requerido.
   * Precondiciones: `repositoryPersonas` implementa `IRepositoryPersonas`.
   * Postcondiciones: conserva el repositorio para las consultas posteriores.
   */
  constructor(private readonly repositoryPersonas: IRepositoryPersonas) {}

  /** Selecciona la persona cuyo índice coincide con el día de la semana.
   * Precondiciones: el repositorio devuelve siete personas en orden domingo-sábado.
   * Postcondiciones: devuelve la persona del día; lanza un error si el índice no existe.
   */
  public getPersonaDelDia(): Persona {
    const personas = this.repositoryPersonas.getPersonas();
    const indiceDelDia = new Date().getDay();
    const persona = personas[indiceDelDia];

    if (!persona) {
      throw new Error("El repositorio no contiene una persona para el día actual.");
    }

    return persona;
  }
}