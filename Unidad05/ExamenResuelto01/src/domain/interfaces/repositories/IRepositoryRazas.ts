import { Raza } from "../../entities/Raza";

export interface IRepositoryRazas {
  getListadoRazas(): Raza[];
}
