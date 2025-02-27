import Fastify from "fastify";
import { Type, TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import {
  CreateDeviceGroup,
  CreateDeviceGroupSchema,
} from "./logpoint/features/DeviceGroup";

const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

// POST /device-groups
fastify.post(
  "/device-groups",
  {
    schema: {
      body: CreateDeviceGroupSchema,
      response: {
        201: Type.Object({
          message: Type.String(),
          data: CreateDeviceGroupSchema,
        }),
      },
    },
  },
  async (request, reply) => {
    const body = request.body as CreateDeviceGroup;
    return reply
      .status(201)
      .send({ message: "Device group created", data: body });
  }
);

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("🚀 API running on http://localhost:3000");
});
