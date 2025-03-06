import { Type } from "@sinclair/typebox";
import { SupportedVersion } from "../apiMapping";

export const AlertRulesSchema1 = Type.Object(
  {
    name: Type.String(),
  },
  { $id: "AlertRulesSchema1" }
);

export const AlertRulesSchema2 = Type.Object(
  {
    name: Type.String(),
    duration: Type.Number(),
  },
  { $id: "AlertRulesSchema2" }
);

export const AlertRuleApiMapping: Record<SupportedVersion, unknown> = {
  "7.6.0": AlertRulesSchema1,
  "7.7.0": AlertRulesSchema2,
};
