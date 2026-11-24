import { Equino } from "../../domain/entities/Equino";
import { IRepositoryEquino } from "../../domain/interfaces/repositories/IRepositoryEquino";

export class RepositoryEquino implements IRepositoryEquino {
  private equinos: Equino[];

  public constructor() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    this.equinos = [
      new Equino(1, "Tormenta", "Macho", 0, hoy),
      new Equino(2, "Estrella", "Hembra", 0, hoy),
      new Equino(3, "Niebla", "Hembra", 0, hoy),
      new Equino(4, "Relámpago", "Macho", 2, hoy),
      new Equino(5, "Azabache", "Macho", 0, new Date(hoy.getTime() - 86400000)),
    ];
  }

  public getListadoFecha(fecha: Date): Equino[] {
    const dia = new Date(fecha); dia.setHours(0, 0, 0, 0);
    return this.equinos.filter((equino) => {
      const entrega = new Date(equino.fechaEntrega); entrega.setHours(0, 0, 0, 0);
      return entrega.getTime() === dia.getTime();
    });
  }

  public actualizarEquino(idEquino: number, idRaza: number): boolean {
    const index = this.equinos.findIndex((equino) => equino.id === idEquino);
    if (index < 0) return false;
    const actual = this.equinos[index];
    this.equinos[index] = new Equino(actual.id, actual.nombre, actual.sexo, idRaza, actual.fechaEntrega);
    return true;
  }
}
