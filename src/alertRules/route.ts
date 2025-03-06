import { NextFunction, Request, Response, Router } from "express";
import { Value } from "@sinclair/typebox/value";
import { SupportedVersion } from "../apiMapping";
import { AlertRulesSchema1, AlertRulesSchema2 } from "./schema";

const router = Router();

function validate(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validateResult = Value.Check(schema, req.body);
    if (!validateResult) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    next();
  };
}

function getSchemaForVersion(version: SupportedVersion) {
  switch (version) {
    case "7.6.0":
      return AlertRulesSchema1;
    case "7.7.0":
      return AlertRulesSchema2;
    case "7.8.0":
      return AlertRulesSchema2;
    default:
      throw new Error("Unsupported version");
  }
}

router.post("/:version", (req: Request, res: Response, next: NextFunction) => {
  try {
    const version = req.params.version as SupportedVersion;
    const schema = getSchemaForVersion(version);
    validate(schema)(req, res, next);
    res.status(200).json({ message: "Success" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export { router as alertRulesRouter };
