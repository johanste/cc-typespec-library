import { TypeSpecLibraryDef, createTypeSpecLibrary } from "@typespec/compiler";
import { LinterRegistration } from "./linter.js";
import { EmitterRegistration } from "./emitter.js";

export * from "./emitter.js";
export * from "./linter.js";


export const $lib = createTypeSpecLibrary({
  name: "{{ cookiecutter.project_slug}}",
  diagnostics: {},
  ... LinterRegistration,
  ... EmitterRegistration,
} as const);

// Optional but convenient, those are meant to be used locally in your library.
export const { reportDiagnostic, createDiagnostic, createStateSymbol } = $lib;