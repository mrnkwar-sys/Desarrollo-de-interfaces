import { Raza } from "../../domain/entities/Raza";
import { IRepositoryRazas } from "../../domain/interfaces/repositories/IRepositoryRazas";
import { IUseCaseListadoCompletoRazas } from "../useCasesInterfaces/IUseCaseListadoCompletoRazas";

export class UseCaseListadoCompletoRazas implements IUseCaseListadoCompletoRazas {
  public constructor(private readonly repository: IRepositoryRazas) {}

  public execute(): Raza[] { return this.repository.getListadoRazas(); }
}