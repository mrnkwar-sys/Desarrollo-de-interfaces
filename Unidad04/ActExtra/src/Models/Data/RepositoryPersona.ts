import { Persona } from '../Entities/Persona';

/** Gestiona el conjunto de personas ficticias y sus departamentos. */
export class RepositoryPersona {
  /** Datos locales de ejemplo compartidos por las consultas del repositorio. */
  private static readonly personas: Persona[] = [
    new Persona(1, 'Lucía', 'Herrera Soto', 1),
    new Persona(2, 'Andrés', 'Molina Ríos', 1),
    new Persona(3, 'Valentina', 'Cruz Vega', 2),
    new Persona(4, 'Mateo', 'Navarro León', 2),
    new Persona(5, 'Sofía', 'Campos Gil', 2),
    new Persona(6, 'Diego', 'Fuentes Rey', 2),
    new Persona(7, 'Clara', 'Iglesias Marín', 3),
    new Persona(8, 'Hugo', 'Romero Vidal', 3),
    new Persona(9, 'Emma', 'Santos Pardo', 3),
    new Persona(10, 'Nicolás', 'Cano Prieto', 4),
    new Persona(11, 'Alba', 'Méndez Soler', 4),
    new Persona(12, 'Marcos', 'Ortega Luna', 5),
    new Persona(13, 'Irene', 'Delgado Mora', 5),
    new Persona(14, 'Pablo', 'Calvo Núñez', 5),
    new Persona(15, 'Rita', 'Cabrera Moya', 2),
    new Persona(16, 'Sergio', 'Prieto Solís', 2),
    new Persona(17, 'Óscar', 'Pons Calatayud', 3),
    new Persona(18, 'Sara', 'Blasco Moreno', 4),
    new Persona(19, 'Joel', 'Gimeno Martín', 5),
    new Persona(20, 'Eva', 'Alonso Campos', 6),
    new Persona(21, 'Daniel', 'Rueda Vidal', 6),
    new Persona(22, 'Laura', 'Cortés Sanz', 6),
    new Persona(23, 'Bruno', 'Castillo Ríos', 7),
    new Persona(24, 'Noelia', 'Vázquez Marín', 7),
    new Persona(25, 'Adrián', 'Soler Gil', 7),
    new Persona(26, 'Marina', 'Peña Torres', 7),
    new Persona(27, 'Inés', 'Bravo Cano', 8),
    new Persona(28, 'Samuel', 'Rey Molina', 8),
    new Persona(29, 'Carmen', 'Sáez León', 8),
    new Persona(30, 'Gael', 'Núñez Ferrer', 8),
    new Persona(31, 'Aitana', 'Lozano Pérez', 9),
    new Persona(32, 'Eric', 'Díaz Muñoz', 9),
    new Persona(33, 'Rocío', 'Vidal Ramos', 9),
    new Persona(34, 'Mónica', 'Sáez Pastor', 1),
    new Persona(35, 'Álvaro', 'Beltrán Gil', 1),
    new Persona(36, 'Teresa', 'Rico Marín', 1),
    new Persona(37, 'Iván', 'Pascual León', 2),
    new Persona(38, 'Nerea', 'Garrido Soler', 2),
    new Persona(39, 'Pol', 'Aguirre Vidal', 2),
    new Persona(40, 'Marta', 'Esteban Ríos', 2),
    new Persona(41, 'Carla', 'Lara Montes', 3),
    new Persona(42, 'Raúl', 'Ibáñez Rey', 4),
    new Persona(43, 'Alicia', 'Soto Ferrer', 4),
    new Persona(44, 'Jaime', 'Paredes Cano', 5),
    new Persona(45, 'Verónica', 'Mora Prieto', 6),
    new Persona(46, 'Luis', 'Carrasco Peña', 6),
    new Persona(47, 'Patricia', 'Sanz Rubio', 7),
    new Persona(48, 'Fernando', 'López Vera', 8),
    new Persona(49, 'Beatriz', 'Herrero Soler', 9),
    new Persona(50, 'Tomás', 'Crespo Gil', 9),
  ];

  /** Devuelve las personas asignadas al departamento indicado.
   * @param idDept Identificador del departamento que se consulta.
   * @returns Personas pertenecientes al departamento; vacío si no hay coincidencias.
   */
  public static getListadoPersonasPorDept(idDept: number): Persona[] {
    return this.personas.filter((persona) => persona.idDep === idDept);
  }

  /** Devuelve una copia del listado completo de personas.
   * @returns Copia del conjunto de personas almacenado.
   */
  public static getListadoCompletoPersonas(): Persona[] {
    return [...this.personas];
  }

  /** Elimina una persona del conjunto local si existe.
   * @param idPer Identificador de la persona que se quiere eliminar.
   * @returns `true` si se encontró y eliminó; `false` en caso contrario.
   */
  public static deletePersona(idPer: number): boolean {
    const index = this.personas.findIndex((persona) => persona.idPer === idPer);

    if (index === -1) {
      return false;
    }

    this.personas.splice(index, 1);
    return true;
  }
}