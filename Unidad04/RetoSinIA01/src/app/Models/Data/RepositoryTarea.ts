import { Tarea } from "../Entities/Tarea";

export class RepositoryTareas {
    public static getTareas(): Tarea[] {
    return [
      new Tarea(1, 'Sistemas', true),
      new Tarea(2, 'Interfaces', false),
      new Tarea(3, 'Videojuegos', false),
      new Tarea(4, 'Inglés', true),
    ];
  }
}