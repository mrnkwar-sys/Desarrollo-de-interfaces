import { injectable } from "inversify";
import { Persona, type Sexo } from "../../domain/entities/Persona";
import type { IPersonasRepository } from "../../domain/interfaces/repositories/IPersonasRepository";

const nombresPorSexo: ReadonlyArray<{ nombres: readonly string[]; sexo: Sexo }> = [
  {
    sexo: "H",
    nombres: ["Carlos", "Alejandro", "Javier", "David", "Miguel"],
  },
  {
    sexo: "M",
    nombres: ["María", "Lucía", "Elena", "Paula", "Sofía"],
  },
];

const apellidos = [
  "García Pérez",
  "López Fernández",
  "Martínez Ruiz",
  "Gómez Sánchez",
  "Navarro Torres",
  "Serrano Moreno",
  "Molina Castro",
  "Romero Díaz",
  "Ortega Martín",
  "Delgado Gil",
];

/**
 * Genera las combinaciones de nombres y apellidos de ejemplo.
 * @returns 100 personas con identificadores únicos: 50 `H` y 50 `M`.
 */
function crearListadoPersonas(): Persona[] {
  let siguienteId = 1;

  return nombresPorSexo.flatMap(({ nombres, sexo }) =>
    nombres.flatMap((nombre) =>
      apellidos.map(
        (apellido) => new Persona(siguienteId++, nombre, apellido, sexo),
      ),
    ),
  );
}

@injectable()
/** Repositorio en memoria con el conjunto de 100 personas de ejemplo. */
export class RepositoryPersonas implements IPersonasRepository {
  private readonly personas = crearListadoPersonas();

  /**
   * Devuelve una copia del listado para proteger el arreglo interno.
   * @returns Las 100 personas almacenadas.
   */
  public getListadoPersonas(): Persona[] {
    return [...this.personas];
  }
}