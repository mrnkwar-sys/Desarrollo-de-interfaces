import { Department } from "../../domain/Entities/Department";
import type { IDepartmentRepository } from "../../domain/interfaces/repositories/IDepartmentRepository";

export class DepartmentRepositoryMock implements IDepartmentRepository {
  private readonly departments = [
    new Department(1, "Tecnología"),
    new Department(2, "Diseño"),
    new Department(3, "Personas"),
    new Department(4, "Operaciones"),
  ];

  /**
   * Devuelve los departamentos mock sin exponer el arreglo interno.
   * Precondiciones: la instancia contiene los datos mock inicializados.
   * @returns Una copia del listado de departamentos; en este mock contiene cuatro elementos.
   */
  public getDepartments(): Department[] {
    return [...this.departments];
  }
}