import { Equino } from "../../../domain/entities/Equino";
import { EquinoConColor } from "../EquinoConColor";

export class EquinoConColorMapper {
  public static toPresentation(equino: Equino): EquinoConColor {
    return new EquinoConColor(equino.nombre, equino.id, equino.sexo);
  }
}
