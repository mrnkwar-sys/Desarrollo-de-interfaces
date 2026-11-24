import { Equino } from "../../entities/Equino";

export interface IRepositoryEquino {
  getListadoFecha(fecha: Date): Equino[];
  actualizarEquino(idEquino: number, idRaza: number): boolean;
}
