import { Type, Static } from "@sinclair/typebox";

export const CreateDeviceGroupSchema = Type.Object({
  name: Type.String({
    description:
      "A unique valid string to define the Name of the device group. Mandatory Field",
  }),
  description: Type.String({
    description: "Description for the device group. Mandatory Field",
  }),
  devices: Type.Optional(
    Type.Array(Type.String(), {
      description:
        "List of device id(s) you want to associate with the device group. Optional Field",
    })
  ),
});

export type CreateDeviceGroup = Static<typeof CreateDeviceGroupSchema>;
