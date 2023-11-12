import type { DecoratorContext, Type } from "@typespec/compiler";
import { setTypeSpecNamespace } from "@typespec/compiler";
import { createStateSymbol } from "./lib.js";

// Create a unique key
const key = createStateSymbol("helloDecorator");

export function $helloDecorator(context: DecoratorContext, target: Type, name: string) {
  // Keep a mapping between the target and a value.
  context.program.stateMap(key).set(target, name);

  // Keep an index of a type.
  context.program.stateSet(key).add(target);
}

setTypeSpecNamespace("{{ cookiecutter.typespec_namespace }}", $helloDecorator);