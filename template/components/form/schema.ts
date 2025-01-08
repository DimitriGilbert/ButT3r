import { z } from "zod";

export const formSchema = z.object({
  {{SCHEMA_FIELDS}}
});

export type FormData = z.infer<typeof formSchema>; 