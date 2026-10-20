import { ModeloCoche } from '../Entities/ModeloCoche';

export class RepositoryModelos {
  private static readonly modelos: ModeloCoche[] = [
    new ModeloCoche(1, 'Corolla', 1, 1435, 1780, 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(2, 'RAV4', 1, 1685, 1855, 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(3, 'Yaris', 1, 1500, 1745, 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(4, 'Serie 3', 2, 1440, 1827, 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(5, 'X5', 2, 1765, 2004, 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(6, 'i4', 2, 1448, 1852, 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(7, 'A3', 3, 1425, 1816, 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(8, 'Q5', 3, 1662, 1893, 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(9, 'e-tron GT', 3, 1413, 1964, 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(10, 'Clase A', 4, 1440, 1796, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(11, 'GLC', 4, 1640, 1890, 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(12, 'Clase E', 4, 1468, 1880, 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(13, 'Model 3', 5, 1441, 1850, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(14, 'Model Y', 5, 1624, 1921, 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=85'),
    new ModeloCoche(15, 'Model S', 5, 1431, 1987, 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=1400&q=85'),
  ];

  public static getListadoModelosPorMarca(idMarca: number): ModeloCoche[] {
    return this.modelos.filter((modelo) => modelo.idMarca === idMarca);
  }

  public static getModelo(idModelo: number): ModeloCoche {
    const modelo = this.modelos.find((item) => item.idModelo === idModelo);
    if (!modelo) {
      throw new Error(`No existe el modelo con id ${idModelo}`);
    }
    return modelo;
  }
}