import { Departamento } from '../Entities/Departamento';

/** Proporciona los datos de ejemplo de los departamentos de la empresa. */
export class RepositoryDept {
  /** Crea y devuelve el listado completo de departamentos.
   * @returns Departamentos disponibles para seleccionar.
   */
  public static getDepartamentos(): Departamento[] {
    return [
      new Departamento(1, 'Dirección'),
      new Departamento(2, 'Tecnología'),
      new Departamento(3, 'Diseño'),
      new Departamento(4, 'Recursos Humanos'),
      new Departamento(5, 'Marketing'),
      new Departamento(6, 'Finanzas'),
      new Departamento(7, 'Operaciones'),
      new Departamento(8, 'Atención al Cliente'),
      new Departamento(9, 'Calidad'),
      new Departamento(10, 'Archivo'),
    ];
  }
}