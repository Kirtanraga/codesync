import { defineSchema, defineTable } from "convex/server";
import * as values from "convex/values";


export const schema = defineSchema({
  users: defineTable({
    name: values.v.string(),
    email: values.v.string(),
    clerkId: values.v.string(),
    image: values.v.optional(values.v.string()), 
    role: values.v.string(),
  }),
});
