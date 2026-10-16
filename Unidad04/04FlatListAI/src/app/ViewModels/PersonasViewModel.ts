import { Persona } from '../Models/Entities/Persona';
import { Alert } from 'react-native';
import { RepositoryPersonas } from '../Models/Data/RepositoryPersonas';

export class PersonasViewModel {
  private _listado: Persona[];
  private _personaSeleccionada: Persona | null;

  constructor() {
    this._listado = RepositoryPersonas.getPersonas();
    this._personaSeleccionada = null;
  }

  // Getters y Setters exigidos
  public get listado(): Persona[] {
    return this._listado;
  }

  //El set no es conveniente porque la vista nunca debe modificar este listado
  // public set listado(value: Persona[]) {
  //   this._listado = value;
  // }

  public get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  public set personaSeleccionada(value: Persona | null) {
    this._personaSeleccionada = value;
    this.mostrarAlertPersona();
  }

  // Función privada que muestra un alert con la persona seleccionada
  private mostrarAlertPersona(): void {
    alert(this._personaSeleccionada?.nombre);
  }

  // Devuelve el mensaje formateado para mostrar en el Alert
  private obtenerMensajePersonaSeleccionada(): string {
    if (this._personaSeleccionada) {
      return `${this._personaSeleccionada.nombre} ${this._personaSeleccionada.apellidos}`;
    }
    return '';
  }
}