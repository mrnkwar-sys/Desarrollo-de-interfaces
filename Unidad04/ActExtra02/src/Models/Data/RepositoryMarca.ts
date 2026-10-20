import { Marca } from '../Entities/Marca';

export class RepositoryMarca {
  private static readonly marcas: Marca[] = [
    new Marca(1, 'Toyota'),
    new Marca(2, 'BMW'),
    new Marca(3, 'Audi'),
    new Marca(4, 'Mercedes-Benz'),
    new Marca(5, 'Tesla'),
  ];

  public static getListadoMarcas(): Marca[] {
    return [...this.marcas];
  }
}