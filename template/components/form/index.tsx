import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { type FormData, formSchema } from "./schema";
import { type FormProps } from "./types";

export default function {{COMPONENT_NAME}}({ onSubmit, {{PROPS_DESTRUCTURE}} }: FormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      {{FORM_DEFAULTS}}
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {{FORM_FIELDS}}
      
      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {form.formState.isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
} 