import type { Persona } from "../../entities/Persona";

/** Contrato de las operaciones de aplicación relacionadas con personas. */
export interface IUseCasesPersonas {
  /**
   * Obtiene las personas cuyo sexo corresponde al día actual.
   * @returns Hombres en días pares o mujeres en días impares.
   */
  getListadoPersonasPorSexo(): Persona[];
}