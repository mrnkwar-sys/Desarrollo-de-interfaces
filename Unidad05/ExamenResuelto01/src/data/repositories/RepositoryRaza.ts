import { Raza } from "../../domain/entities/Raza";
import { IRepositoryRazas } from "../../domain/interfaces/repositories/IRepositoryRazas";

export class RepositoryRaza implements IRepositoryRazas {
  private readonly razas = [
    new Raza(1, "Pura raza española"),
    new Raza(2, "Árabe"),
    new Raza(3, "Andaluza"),
    new Raza(4, "Criollo"),
  ];

  public getListadoRazas(): Raza[] {
    return [...this.razas];
  }
}
