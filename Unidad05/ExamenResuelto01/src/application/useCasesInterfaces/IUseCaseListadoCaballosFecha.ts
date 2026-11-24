import { Equino } from "../../domain/entities/Equino";

export interface IUseCaseListadoCaballosFecha {
  execute(fecha: Date): Equino[];
}
