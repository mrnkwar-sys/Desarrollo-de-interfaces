import { Persona } from "../../domain/entities/Persona";
import type { IRepositoryPersonas } from "../../domain/interfaces/repositories/IRepositoryPersonas";

/** Repositorio en memoria con las siete personas mock del ejercicio.
 * Precondiciones: no requiere una fuente externa de datos.
 * Postcondiciones: mantiene un registro ordenado de domingo a sábado.
 */
export class RepositoryPersona implements IRepositoryPersonas {
  private readonly personas: Persona[] = [
    new Persona(1, "Lucía", "Serrano Vidal", new Date(1998, 3, 12)),
    new Persona(2, "Mateo", "Fuentes Ríos", new Date(1995, 8, 24)),
    new Persona(3, "Inés", "Calderón Mora", new Date(2001, 1, 7)),
    new Persona(4, "Daniel", "Paredes León", new Date(1992, 6, 19)),
    new Persona(5, "Nora", "Campos Soler", new Date(1999, 10, 3)),
    new Persona(6, "Hugo", "Benítez Costa", new Date(1996, 4, 28)),
    new Persona(7, "Clara", "Méndez Alba", new Date(2000, 11, 15)),
  ];

  /** Devuelve el listado mock sin exponer el arreglo interno.
   * Precondiciones: la instancia contiene los registros mock inicializados.
   * Postcondiciones: devuelve una copia del arreglo con las siete personas.
   */
  public getPersonas(): Persona[] {
    return [...this.personas];
  }
}