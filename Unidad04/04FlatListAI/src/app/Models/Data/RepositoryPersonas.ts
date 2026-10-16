import { Persona } from '../Entities/Persona';

export class RepositoryPersonas {
  /**
   * Funcion que devuelve un array de personas. El array es estático de prueba
   * Pre: ninguna
   * Post: el array nunca va a estar vacio
   * @returns Persona[]
   */
  public static getPersonas(): Persona[] {
    return [
      new Persona('1', 'Carlos', 'García Pérez'),
      new Persona('2', 'María', 'López Fernández'),
      new Persona('3', 'Alejandro', 'Martínez Ruiz'),
      new Persona('4', 'Lucía', 'Gómez Sánchez'),
      new Persona('5', 'Javier', 'Navarro Torres'),
      new Persona('6', 'Elena', 'Díaz Romero'),
      new Persona('7', 'David', 'Serrano Moreno'),
      new Persona('8', 'Paula', 'Molina Castro'),
      new Persona('9', 'Gonzalo', 'Ortega Marín'),
      new Persona('10', 'Carmen', 'Delgado Gil'),
    ];
  }
}