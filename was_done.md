# ButT3r Component Generator Enhancement TODO

## 1. Component Templates
### Implementation Steps
- [ ] Create template directory structure:
  ```
  ButT3r/
  └── template/
      └── components/
          ├── page/
          │   ├── index.tsx      # Base page template
          │   ├── loading.tsx    # Loading state
          │   └── error.tsx      # Error boundary
          ├── layout/
          │   ├── index.tsx      # Layout wrapper
          │   └── metadata.ts    # SEO metadata
          ├── form/
          │   ├── index.tsx      # Form component
          │   ├── schema.ts      # Zod schema
          │   └── types.ts       # TypeScript types
          └── table/
              ├── index.tsx      # Table component
              ├── columns.tsx    # Column definitions
              └── types.ts       # Table types
  ```
- [ ] Add template parameter to component script:
  ```bash
  parseArger parse bin/component -i --opt 'template "template to use (page|layout|form|table)" --one-of "page" --one-of "layout" --one-of "form" --one-of "table"'
  ```
- [ ] Create template processing functions in common:
  - [ ] `process_page_template()`
  - [ ] `process_layout_template()`
  - [ ] `process_form_template()`
  - [ ] `process_table_template()`
- [ ] Add template-specific imports:
  - [ ] Page: `next/navigation`, error boundaries
  - [ ] Layout: `next/metadata`, `next/headers`
  - [ ] Form: `react-hook-form`, `@hookform/resolvers/zod`
  - [ ] Table: `@tanstack/react-table`

## 2. API Integration
### Implementation Steps
- [ ] Add API parameters to component script:
  ```bash
  parseArger parse bin/component -i --flag 'api "generate matching API route"' \
    --opt 'trpc-router "create tRPC route"' \
    --opt 'trpc-procedure "create tRPC procedure" --repeat' \
    --opt 'loader "loader type (query|mutation|infinite)" --one-of "query" --one-of "mutation" --one-of "infinite"' \
    --opt 'api-router "create API router"' \
    --opt 'api-route "create API route" --repeat'
  ```
- [ ] Create API route generator:
  ```
  src/
  └── app/
      └── api/
          └── ${api_router}/
              └── route.ts
  ```
- [ ] Create tRPC procedure generator:
  ```
  src/
  └── server/
      └── api/
          └── routers/
              └── ${trpc_router}.ts
  ```
- [ ] Add loader functions in common:
  - [ ] `generate_api_route()`
  - [ ] `generate_trpc_procedure()`
  - [ ] `add_query_loader()`
  - [ ] `add_mutation_loader()`
  - [ ] `add_infinite_loader()`
- [ ] Add template hooks:
  - [ ] `useQuery` wrapper
  - [ ] `useMutation` wrapper
  - [ ] `useInfiniteQuery` wrapper

## 4. Testing Setup
### Implementation Steps
- [ ] Add testing parameters to component script:
  ```bash
  parseArger parse bin/component -i \
    --opt 'test "type of tests to generate" --one-of "unit" --one-of "e2e" --repeat'
  ```
- [ ] Create test template directory:
  ```
  ButT3r/
  └── template/
      └── test/
          ├── unit/
          │   └── component.test.tsx
          ├── e2e/
          │   └── component.spec.ts
  ```
- [ ] Add test generation functions in common:
  - [ ] `generate_unit_test()`
  - [ ] `generate_e2e_test()`
- [ ] Create test utilities:
  ```
  src/
  └── test/
      ├── setup.ts
      ├── mocks/
      └── helpers/
  ```
- [ ] Add test-specific imports and configurations:
  - [ ] React Testing Library setup
  - [ ] Playwright config

## 6. Schema Validation
### Implementation Steps
- [ ] Add schema parameters to component script:
  ```bash 
  parseArger parse bin/component -i \
    --opt 'schema "generate Zod schema for the component" --one-of "props" --one-of "form" --one-of "api" --repeat'
  ```
- [ ] Create schema template directory:
  ```
  ButT3r/
  └── template/
      └── schema/
          ├── props.ts
          ├── form.ts
          └── api.ts
  ```
- [ ] Add schema generation functions in common:
  - [ ] `generate_props_schema()`
  - [ ] `generate_form_schema()`
  - [ ] `generate_api_schema()`
- [ ] Add schema utilities:
  ```
  src/
  └── lib/
      └── schema/
          ├── validators.ts
          └── transformers.ts
  ```
- [ ] Implement schema integration:
  - [ ] Props validation with runtime checks
  - [ ] Form validation with error messages
  - [ ] API input/output validation
- [ ] Add schema-specific imports:
  - [ ] `zod` for schema definition
  - [ ] `@hookform/resolvers/zod` for form integration
  - [ ] Custom validators and transformers

### Additional Considerations
- [ ] Add error handling for all new features
- [ ] Create documentation for new parameters
- [ ] Add examples in README
- [ ] Create integration tests for new features
- [ ] Add rollback mechanisms for failed operations

# TODO: Fix Command Structure

## Issues Identified
1. Incorrectly merged API/tRPC functionality into component command
2. Schema validation mixed with component creation
3. Testing commands mixed with component creation
4. Improper command hierarchy

## Required Commands to Create

### API Routes Command
parseArger generate command api-route
- Required parameters:
  - name: route name
  - methods: HTTP methods (GET,POST,PUT,DELETE)
- Optional parameters:
  - directory: subdirectory in src/app/api
  - schema: input/output validation

### tRPC Command
parseArger generate command trpc
- Subcommands:
  - router: create new router
  - procedure: add procedure to router
- Required parameters for router:
  - name: router name
- Required parameters for procedure:
  - router: target router
  - name: procedure name
  - type: query|mutation|infinite
- Optional parameters:
  - schema: input/output validation
  - loader: generate loader hook

### Type-Schema Command
parseArger generate command type-schema
- Required parameters:
  - type: props|form|api
  - target: target file
- Optional parameters specific to type:
  - props: property definitions
  - form: field definitions with validation
  - api: input/output fields

### Test Command
parseArger generate command test
- Required parameters:
  - type: unit|e2e
  - target: component/page to test
- Optional parameters:
  - directory: test directory location

## Instructions

1. NEVER modify existing parseArger parsing code
2. Follow the TODO list IN ORDER - do not skip or combine steps
3. Each command must be created separately using parseArger generate or parse (if file already exists)
4. Keep API/tRPC/Type-Schema/Test commands SEPARATE from component command
5. Update documentation to reflect proper command structure
6. Update README to show correct command usage
7. Maintain existing functionality of component templates (page/layout/form/table)
8. When implementing functions in common files:
   - Keep existing functions unchanged
   - Add new functions at the end of the file
   - Follow existing naming and style conventions
9. Test each command individually before proceeding to the next
10. DO NOT mix concerns between commands
11. Reference the original TODO list for implementation details of each feature

Remember: This is a COMPLETE REWRITE of the command structure, not a modification of existing commands. Each feature (API, tRPC, Schema, Test) should be its own top-level command.

## tools

### parseArger
that created the parsing code for bin/ts-edit
```bash
parseArger generate --output bin/ts-edit --pos 'target "what to do" --subcommand-directory bin/_ts-edit --subcommand-use-leftovers --subcommand-run' --help-message "'edit' typescript file"
```
that modified the parsing code for bin/component and added --pos and options
```bash
parseArger parse bin/component -i \
  --opt 'template "template to use (page|layout|form|table)" --one-of "page" --one-of "layout" --one-of "form" --one-of "table"' \
  --opt 'trpc-router "create tRPC route"' \
  --opt 'trpc-procedure "create tRPC procedure" --repeat' \
  --opt 'loader "loader type (query|mutation|infinite)" --one-of "query" --one-of "mutation" --one-of "infinite"' \
  --opt 'api-router "create API router"' \
  --opt 'api-route "create API route" --repeat' \
  --opt 'test "type of tests to generate" --one-of "unit" --one-of "e2e" --repeat' \
  --opt 'schema "generate Zod schema for the component" --one-of "props" --one-of "form" --one-of "api" --repeat'  
```

Here’s a detailed **TODO list in Markdown format** for your task of creating a Bash script using `parseArger` to add schema declaration in your Drizzle config. This list is thorough and covers the entire scope of the project:

---

# TODO: Bash Script for Drizzle Schema Declaration

## **Project Scope**

The goal is to create a Bash script that automates the process of adding schema declarations to a Drizzle config file. The script will:

1. Parse user-provided arguments (e.g., table name, column details, data types).
2. Generate the corresponding schema declaration code.
3. Append the schema declaration to the Drizzle config file.
4. Handle errors and provide helpful feedback.

---

## **Tasks**

### **1. Research and Planning**

- [ ] Review the [Drizzle schema declaration documentation](https://orm.drizzle.team/docs/sql-schema-declaration) to understand the schema structure.
- [ ] Identify the required inputs for schema declaration (e.g., table name, column names, data types, constraints).
- [ ] Define the scope of the script:
  - Support for basic schema declarations (tables, columns, primary keys).
  - Optional support for advanced features (indexes, foreign keys, defaults).

---

### **2. Set Up ParseArger**

- [ ] Install `parseArger` using the provided installation script.
- [ ] Define the script's argument structure using `parseArger`:
  - **Positional Arguments:**
    - `table-name`: Name of the table to create.
  - **Optional Arguments:**
    - `column`: Column declaration (repeatable, e.g., `--column "id serial primary key"`).
      - integrate relation using `#<var name>.<column name>`
    - `output-file`: name of the schama file in src/db (default: `schema.ts`).
    - `dry-run`: Simulate the script without modifying files.

---

### **3. Implement Core Functionality**

- [ ] Write the Bash script to:

  1. Parse user inputs using `parseArger`.
  2. Validate inputs (e.g., check if the table name is valid, ensure columns are properly formatted).
  3. Generate the schema declaration code based on the inputs.
  4. Append the generated code to the specified Drizzle config file.
  5. Handle errors gracefully (e.g., invalid inputs, file not found).

- [ ] Example schema declaration format:

  ```typescript
  export const users = table(
    "users",
    {
      id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
      firstName: t.varchar("first_name", { length: 256 }),
      lastName: t.varchar("last_name", { length: 256 }),
      email: t.varchar().notNull(),
      invitee: t.integer().references((): AnyPgColumn => users.id),
      role: rolesEnum().default("guest"),
    },
    (table) => {
      return {
        emailIndex: t.uniqueIndex("email_idx").on(table.email),
      };
    }
  );
  export const posts = table(
    "posts",
    {
      id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
      slug: t.varchar().$default(() => generateUniqueString(16)),
      title: t.varchar({ length: 256 }),
      ownerId: t.integer("owner_id").references(() => users.id),
    },
    (table) => {
      return {
        slugIndex: t.uniqueIndex("slug_idx").on(table.slug),
        titleIndex: t.index("title_idx").on(table.title),
      };
    }
  );
  ```

---

### **4. Add Advanced Features**

- [ ] Support for indexes:
  - Add an `--index` option to declare indexes for columns.
- [ ] Support for foreign keys:
  - Add a `--foreign-key` option to declare relationships between tables.
- [ ] Support for defaults:
  - Add a `--default-value` option to specify default values for columns.

---

### **5. Error Handling and Validation**

- [ ] Validate inputs:
  - Ensure table names are valid TypeScript identifiers.
  - Ensure column declarations follow the correct format (e.g., `name:type:constraints`).
- [ ] Handle file errors:
  - Check if the Drizzle config file exists and is writable.
  - Provide meaningful error messages for common issues.

---

## **Example Usage**

### Basic Schema Declaration

```bash
butt3r db add-table myTable \
  --column "id serial primaryKey" \
  --column "name text notNull" \
  --column "createdAt timestamp defaultNow" \
  --output-file myTable.ts
```

### Advanced Schema Declaration

```bash
butt3r db add-table myTable \
  --column "id serial primaryKey" \
  --column "userId integer" \
  --foreign-key "userId references users(id)" \
  --index "userId"
```
