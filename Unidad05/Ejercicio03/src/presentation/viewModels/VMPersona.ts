import type { Persona } from "../../domain/entities/Persona";
import type { IUsesCasesPersonas } from "../../domain/interfaces/useCases/IUsesCasesPersonas";

/** ViewModel que prepara la persona que consumirá la vista.
 * Precondiciones: recibe un caso de uso capaz de resolver la persona del día.
 * Postcondiciones: queda inicializado con la persona obtenida del caso de uso.
 */
export class VMPersona {
  private _persona!: Persona;

  /** Construye el ViewModel y carga la persona actual.
   * Precondiciones: `usesCasesPersonas` implementa el contrato del caso de uso.
   * Postcondiciones: almacena el servicio y deja `_persona` cargada.
   */
  constructor(private readonly usesCasesPersonas: IUsesCasesPersonas) {
    this.cargarPersona();
  }

  /** Devuelve la persona preparada para la vista.
   * Precondiciones: el ViewModel terminó de inicializarse correctamente.
   * Postcondiciones: devuelve la persona cargada sin modificar el estado.
   */
  public get persona(): Persona {
    return this._persona;
  }

  /** Actualiza la persona consultando el caso de uso.
   * Precondiciones: el caso de uso está disponible y puede resolver la persona actual.
   * Postcondiciones: reemplaza `_persona` por la entidad devuelta por el caso de uso.
   */
  public cargarPersona(): void {
    this._persona = this.usesCasesPersonas.getPersonaDelDia();
  }
}