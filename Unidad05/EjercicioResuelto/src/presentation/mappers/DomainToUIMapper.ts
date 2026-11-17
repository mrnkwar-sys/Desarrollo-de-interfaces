import type { PersonWithDeparDTO } from "../../domain/DTO/PersonWithDeparDTO";
import type { IDomainToUIMapper } from "./IDomainToUIMapper";
import { PersonUIModel } from "../models/PersonUIModel";

const DEPARTMENT_COLORS: Record<string, string> = {
  Tecnología: "#C9E9DF",
  Diseño: "#E6D9F3",
  Personas: "#F6D8C8",
  Operaciones: "#F4E8B8",
};

export class DomainToUIMapper implements IDomainToUIMapper {
  /**
  * Prepara los datos visuales de la persona, localizando su fecha y asignando el color departamental.
  * Precondiciones: `person` contiene una fecha ISO y el nombre del departamento.
  * @returns Un `PersonUIModel` listo para la vista; usa un color neutro si no hay color configurado.
   */
  public map(person: PersonWithDeparDTO): PersonUIModel {
    const birthDateLabel = new Date(`${person.birthDate}T00:00:00`).toLocaleDateString(
      "es-ES",
      { day: "numeric", month: "short", year: "numeric" },
    );

    return new PersonUIModel(
      person.id,
      person.name,
      person.surname,
      person.birthDate,
      birthDateLabel,
      person.departmentId,
      person.departmentName,
      DEPARTMENT_COLORS[person.departmentName] ?? "#DCE5E1",
    );
  }
}