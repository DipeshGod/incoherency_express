import { Type, Static } from "@sinclair/typebox";

export const SupportedVersion = Type.Union([
  Type.Literal("7.6.0"),
  Type.Literal("7.7.0"),
  Type.Literal("7.8.0"),
]);

export type SupportedVersion = Static<typeof SupportedVersion>;
