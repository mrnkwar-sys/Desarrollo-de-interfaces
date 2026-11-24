export class Raza {
  public constructor(private readonly _id: number, private _nombre: string) {}

  public get id(): number { return this._id; }
  public get nombre(): string { return this._nombre; }
  public set nombre(value: string) { this._nombre = value; }
}
