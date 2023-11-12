import { JSONSchemaType, EmitContext } from "@typespec/compiler";
import Path from "path";

interface EmitterOptions {
    "target-name": string;
  }
  
const EmitterOptionsSchema: JSONSchemaType<EmitterOptions> = {
    type: "object",
    additionalProperties: false,
    properties: {
        "target-name": { type: "string" },
    },
    required: [],
};

export const EmitterRegistration = {
    options: EmitterOptionsSchema,
};

export async function $onEmit(context: EmitContext) {
  const outputDir = Path.join(context.emitterOutputDir, "{{ cookiecutter.project_slug }}.txt");
  await context.program.host.writeFile(outputDir, "hello {{ cookiecutter.author }} - nice to meet you!");
}
