import express, { Request, Response, NextFunction } from "express";

import { Value } from "@sinclair/typebox/value";
import { AlertRulesSchema1, AlertRulesSchema2 } from "./alertRules.ts/schema";
import { SupportedVersion } from "./apiMapping";

const app = express();
const PORT = process.env.PORT || 3000;

function validate(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validateResult = Value.Check(schema, req.body);
    if (!validateResult) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    next();
  };
}

// Function to select schema based on version
function getSchemaForVersion(version: SupportedVersion) {
  switch (version) {
    case "7.6.0":
      return AlertRulesSchema1;
    case "7.7.0":
      return AlertRulesSchema2;
    default:
      throw new Error("Unsupported version");
  }
}

// Route handler
app.post(
  "/alertRules/:version",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const version = req.params.version as SupportedVersion;
      const schema = getSchemaForVersion(version);
      validate(schema)(req, res, next);
      res.status(200).json({ message: "Success" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
