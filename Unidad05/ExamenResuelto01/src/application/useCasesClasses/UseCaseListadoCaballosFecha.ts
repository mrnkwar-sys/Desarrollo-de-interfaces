import { Equino } from "../../domain/entities/Equino";
import { IRepositoryEquino } from "../../domain/interfaces/repositories/IRepositoryEquino";
import { IUseCaseListadoCaballosFecha } from "../useCasesInterfaces/IUseCaseListadoCaballosFecha";

export class UseCaseListadoCaballosFecha implements IUseCaseListadoCaballosFecha {
  public constructor(private readonly repository: IRepositoryEquino) {}

  public execute(fecha: Date): Equino[] {
    return this.repository.getListadoFecha(fecha).filter((equino) => equino.idRaza === 0);
  }
}
