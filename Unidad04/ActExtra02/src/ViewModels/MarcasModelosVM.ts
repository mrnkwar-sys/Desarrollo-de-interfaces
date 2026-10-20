import { RepositoryMarca } from '../Models/Data/RepositoryMarca';
import { RepositoryModelos } from '../Models/Data/RepositoryModelos';
import { Marca } from '../Models/Entities/Marca';
import { ModeloCoche } from '../Models/Entities/ModeloCoche';

export class MarcasModelosVM {
  private readonly _listadoMarcas: Marca[];
  private _listadoModelosPorMarca: ModeloCoche[];
  private _marcaSeleccionada: Marca | null;
  private _modeloSeleccionado: ModeloCoche | null;

  constructor() {
    this._listadoMarcas = RepositoryMarca.getListadoMarcas();
    this._listadoModelosPorMarca = [];
    this._marcaSeleccionada = this._listadoMarcas[0] ?? null;
    this._modeloSeleccionado = null;
    this.rellenarListadoModelos();
  }

  public get listadoMarcas(): Marca[] {
    return this._listadoMarcas;
  }

  public get listadoModelosPorMarca(): ModeloCoche[] {
    return this._listadoModelosPorMarca;
  }

  public get marcaSeleccionada(): Marca | null {
    return this._marcaSeleccionada;
  }

  public set marcaSeleccionada(value: Marca | null) {
    this._marcaSeleccionada = value;
    this._modeloSeleccionado = null;
    this.rellenarListadoModelos();
  }

  public get modeloSeleccionado(): ModeloCoche | null {
    return this._modeloSeleccionado;
  }

  public set modeloSeleccionado(value: ModeloCoche | null) {
    this._modeloSeleccionado = value;
    this.rellenarModelo();
  }

  private rellenarListadoModelos(): void {
    this._listadoModelosPorMarca = this._marcaSeleccionada
      ? RepositoryModelos.getListadoModelosPorMarca(this._marcaSeleccionada.idMarca)
      : [];
  }

  private rellenarModelo(): void {
    if (this._modeloSeleccionado) {
      this._modeloSeleccionado = RepositoryModelos.getModelo(
        this._modeloSeleccionado.idModelo,
      );
    }
  }
}