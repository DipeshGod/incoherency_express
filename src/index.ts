import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { AlertRulesSchema1, AlertRulesSchema2 } from "./alertRules.ts/schema";

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

fastify.post<{ Body: unknown }>(
  "/api/:version/alertRules",
  async (request, reply) => {
    const { version }: any = request.params;

    // Handle the valid request
    return { message: "Alert rule created successfully", data: request.body };
  }
);

fastify.listen({ port: 3000 });
