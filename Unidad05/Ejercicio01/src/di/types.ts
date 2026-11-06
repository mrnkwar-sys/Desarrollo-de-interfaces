/** Tokens simbólicos usados para registrar y resolver dependencias. */
export const TYPES = {
  IPersonasRepository: Symbol.for("IPersonasRepository"),
  IUseCasesPersonas: Symbol.for("IUseCasesPersonas"),
  VMPersonas: Symbol.for("VMPersonas"),
} as const;