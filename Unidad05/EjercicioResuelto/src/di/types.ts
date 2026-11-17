export const TYPES = {
  IPersonRepository: Symbol.for("IPersonRepository"),
  IDepartmentRepository: Symbol.for("IDepartmentRepository"),
  IGetPersonsWithDepartments: Symbol.for("IGetPersonsWithDepartments"),
  IDomainToUIMapper: Symbol.for("IDomainToUIMapper"),
  PersonListModel: Symbol.for("PersonListModel"),
} as const;