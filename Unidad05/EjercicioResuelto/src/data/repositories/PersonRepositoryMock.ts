import { Person } from "../../domain/Entities/Person";
import { PersonWithDeparDTO } from "../../domain/DTO/PersonWithDeparDTO";
import type { IDepartmentRepository } from "../../domain/interfaces/repositories/IDepartmentRepository";
import type { IPersonRepository } from "../../domain/interfaces/repositories/IPersonRepository";

export class PersonRepositoryMock implements IPersonRepository {
  private readonly persons = [
    new Person(1, "Lucía", "Serrano Vidal", "1998-04-12", 1),
    new Person(2, "Mateo", "Fuentes Ríos", "1995-09-24", 4),
    new Person(3, "Inés", "Calderón Mora", "2001-02-07", 2),
    new Person(4, "Daniel", "Paredes León", "1992-07-19", 1),
    new Person(5, "Nora", "Campos Soler", "1999-11-03", 3),
    new Person(6, "Hugo", "Benítez Costa", "1996-05-28", 4),
    new Person(7, "Clara", "Méndez Alba", "2000-12-15", 2),
    new Person(8, "Eva", "Navarro Gil", "1997-08-02", 3),
  ];

  /**
   * Crea el repositorio mock con acceso a los departamentos.
   * Precondiciones: `departmentRepository` implementa `IDepartmentRepository`.
   * Postcondiciones: conserva el repositorio requerido para completar los DTO.
   * @param departmentRepository Origen de los departamentos relacionados con las personas.
   */
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  /**
   * Combina cada persona mock con el nombre de su departamento.
   * Precondiciones: cada `departmentId` de persona existe en el repositorio de departamentos.
   * @returns Una lista nueva de DTO con todos los datos de persona y departamento.
   * @throws Error si alguna persona referencia un departamento inexistente.
   */
  public getPersonsWithDepartments(): PersonWithDeparDTO[] {
    const departments = new Map(
      this.departmentRepository
        .getDepartments()
        .map((department) => [department.id, department]),
    );

    return this.persons.map((person) => {
      const department = departments.get(person.departmentId);

      if (!department) {
        throw new Error(`No existe el departamento ${person.departmentId}.`);
      }

      return new PersonWithDeparDTO(
        person.id,
        person.name,
        person.surname,
        person.birthDate,
        person.departmentId,
        department.name,
      );
    });
  }
}