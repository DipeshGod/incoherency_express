import { Type } from "@sinclair/typebox";

export const AlertRulesSchema1 = Type.Object({
  name: Type.String(),
});

export const AlertRulesSchema2 = Type.Object({
  name: Type.String(),
  duration: Type.Number(),
});
