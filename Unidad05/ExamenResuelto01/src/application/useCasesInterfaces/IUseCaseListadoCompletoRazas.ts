import { Raza } from "../../domain/entities/Raza";

export interface IUseCaseListadoCompletoRazas {
  execute(): Raza[];
}
