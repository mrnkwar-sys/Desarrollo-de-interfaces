import { IRepositoryEquino } from "../../domain/interfaces/repositories/IRepositoryEquino";
import { IUseCaseActualizarEquino } from "../useCasesInterfaces/IUseCaseActualizarEquino";

export class UseCaseActualizarEquino implements IUseCaseActualizarEquino {
  public constructor(private readonly repository: IRepositoryEquino) {}

  public execute(idEquino: number, idRaza: number): boolean {
    return this.repository.actualizarEquino(idEquino, idRaza);
  }
}
