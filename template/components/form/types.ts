import { type FormData } from "./schema";

export interface FormProps {
  onSubmit: (data: FormData) => Promise<void>;
  {{PROPS}}
} 