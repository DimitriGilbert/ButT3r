type FormField = {
  name: string;
  label: string;
  type: "string" | "boolean" | "select" | "multi-select" | "array";
  required: boolean;
  defaultValue?: string | boolean | string[];
  choices?: string[];
  isPositional?: boolean;
  description?: string;
};

export function parseHelp(helpText: string): FormField[] {
  const fields: FormField[] = [];
  const lines = helpText.split("\n");

  for (const line of lines) {
    if (!line.trim() || line.includes("Usage:")) continue;

    const field: Partial<FormField> = { type: "string" };

    // Skip if this is an alias definition or the no-aliases case
    if (line.includes("no-aliases")) {
      continue;
    }

    // Extract description from the line
    const description = line.split(":").slice(1).join(":").trim();
    if (description) {
      field.description = description
        .replace(/\[default: '[^']+'\]/, '') // Remove default value
        .replace(/\(use --[^)]+\)/, '') // Remove boolean usage hints
        .trim();
    }

    // Add this condition at the very beginning of the loop
    if (line.match(/^\s*[a-zA-Z0-9_-]+\s*:\s*.+$/) && !line.startsWith("--")) {
      const [namePart] = line.split(":");
      field.name = namePart?.trim() ?? "";
      field.type = "string";
      field.isPositional = true;
      field.required = true;

      // Handle default value if present
      const defaultMatch = line.match(/\[default: '([^']+)'\]/);
      if (defaultMatch) {
        field.defaultValue = defaultMatch[1]?.trim() ?? "";
      }
    }
    // 1. Check for fields with both --option and <value> syntax first
    else if (line.match(/--[\w-]+(\|--[\w-]+)?\s<[\w-]+>/)) {
      const [namePart] = line.split(":");
      const names = namePart?.match(/(-\w, )?--[\w-]+/g)?.[0].split(/,\s+/);
      const longName = names
        ?.find((n) => n.startsWith("--"))
        ?.replace("--", "");

      field.name = longName || "";
      field.type = line.includes("repeatable") ? "array" : "string";

      const defaultMatch = line.match(/\[default: '([^']+)'\]/);
      if (defaultMatch) {
        // Handle array values in parentheses
        const defaultValue = defaultMatch[1]?.trim() ?? "";
        if (defaultValue.startsWith("(") && defaultValue.endsWith(")")) {
          field.defaultValue = defaultValue
            .slice(1, -1) // Remove parentheses
            .split(",") // Split by comma
            .map((item) => item.trim()) // Trim whitespace
            .filter((item) => item.length > 0); // Remove empty items
        } else {
          field.defaultValue = defaultValue;
        }
      }
    }
    // 2. Check for boolean fields with explicit on/off by default
    else if (
      line.match(/--[\w-]+/) &&
      (line.includes("on by default (use --") ||
        line.includes("off by default (use --"))
    ) {
      const [flag] = line.match(/--[\w-]+/) ?? [];
      field.name = flag?.replace("--", "") ?? "";
      field.type = "boolean";
      field.defaultValue = line.includes("on by default (use --");
    }
    // 3. Check for other boolean fields
    else if (line.match(/--[\w-]+(\|--no-[\w-]+)?/)) {
      const [flag] = line.match(/--[\w-]+(\|--no-[\w-]+)?/) ?? [];
      const mainFlag = flag?.split("|")[0]?.replace("--", "") ?? "";

      field.name = mainFlag;
      field.type = "boolean";
      field.defaultValue = !line.includes("off by default");
    }
    // 4. Check for other fields
    else if (line.match(/--[\w-]+/)) {
      const [flag] = line.match(/--[\w-]+/) ?? [];
      field.name = flag?.replace("--", "") ?? "";
      field.type = "string";
    }
    // 5. Check for positional arguments
    else if (line.includes("<target>")) {
      const match = line.match(/: '([^']+)'\]/);
      field.name = "target";
      field.type = "select";
      field.required = true;
      if (match) field.choices = match[1]?.split("' '") ?? [];
    }
    // 6. Check for positional arguments without --
    else if (line.match(/^[a-zA-Z0-9_-]+\s*:\s*.+$/)) {
      const [namePart] = line.split(":");
      field.name = namePart?.trim() ?? "";
      field.type = "string";
      field.isPositional = true;

      // Handle default value if present
      const defaultMatch = line.match(/\[default: '([^']+)'\]/);
      if (defaultMatch) {
        field.defaultValue = defaultMatch[1]?.trim() ?? "";
      }
    }
    // Add this condition before other checks
    else if (line.match(/^\s*name\s*:\s*.+/)) {
      field.name = "name";
      field.type = "string";
      field.isPositional = true;
      field.required = true;
    }

    if (field.name) {
      fields.push(field as FormField);
    }
  }

  return fields;
}
