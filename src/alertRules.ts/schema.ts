import { Type } from "@sinclair/typebox";
import { SupportedVersion } from "../apiMapping";

export const AlertRulesSchema1 = Type.Object({
  version: SupportedVersion,
  id: Type.String(),
});

export const AlertRulesSchema2 = Type.Object({
  version: SupportedVersion,
  id: Type.String(),
});

export const AlertRuleApiMapping: Record<SupportedVersion, unknown> = {
  "7.6.0": AlertRulesSchema1,
  "7.7.0": AlertRulesSchema2,
};
