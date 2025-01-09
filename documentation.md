# Usage

## butt3r

```
my go to project creator:
Usage :
	butt3r
```
# Usage

## butt3r

```
And, you thought T3 was opinionated:
	target: what to do [one of 'create' 'component' 'db' 'down' 'layout' 'page' 'start' 'stop' 'up' 'ts-edit' 'api-route' 'create' 'test' 'trpc' 'type-schema']
Usage :
	butt3r <target>
```

## butt3r create

```
my go to project creator:
	name: project name
	--db-provider <db-provider>: db provider [default: ' postgres ']
	--db-orm <db-orm>: orm to use [default: ' drizzle ']
	--shadcn-component <shadcn-component>: shadcn component to install, repeatable
	--install <install>: package to install, repeatable
	--package-manager <package-manager>: package manager [default: ' bun ']
	--app-ports <app-ports>: ports entry for the app, repeatable
	--app-env <app-env>: app env vars, repeatable
	--db-ports <db-ports>: db ports entry, repeatable
	--db-env <db-env>: db env vars, repeatable
	--db-user <db-user>: db user
	--db-name <db-name>: db name
	--app-port <app-port>: ports to use for the app
	--app-network <app-network>: network for the app
	--db|--no-db: project use a DB, on by default (use --no-db to turn it off)
	--app-router|--no-app-router: use app router, on by default (use --no-app-router to turn it off)
	--auth|--no-auth: use nextauth, on by default (use --no-auth to turn it off)
	--trpc|--no-trpc: use trpc, on by default (use --no-trpc to turn it off)
	--tailwind|--no-tailwind: use tailwind, on by default (use --no-tailwind to turn it off)
	--shadcn|--no-shadcn: project use shadcn, on by default (use --no-shadcn to turn it off)
	--mdx|--no-mdx: project use markdown content
	--mdx-remote|--no-mdx-remote: add next remote mdx and gray-matter, on by default (use --no-mdx-remote to turn it off)
	--docker|--no-docker: create a docker compose stack, on by default (use --no-docker to turn it off)
Usage :
	butt3r create <name> [--db-provider <value>] [--db-orm <value>] [--shadcn-component <value>] [--install <value>] [--package-manager <value>] [--app-ports <value>] [--app-env <value>] [--db-ports <value>] [--db-env <value>] [--db-user <value>] [--db-name <value>] [--app-port <value>] [--app-network <value>] [--[no-]db] [--[no-]app-router] [--[no-]auth] [--[no-]trpc] [--[no-]tailwind] [--[no-]shadcn] [--[no-]mdx] [--[no-]mdx-remote] [--[no-]docker]
```

## butt3r component

```
create/update a component:
	path: path to the component
	--directory <directory>: subdirectory in src/components
	--component-name <component-name>: component name
	--props <props>: property definition (name:type), repeatable
	--import <import>: import statement (from:what), repeatable
	--emmet <emmet>: emmet pattern for the component, repeatable
	--template <template>: template to use (page|layout|form|table) [one of 'page' 'layout' 'form' 'table']
	--server|--no-server: is server component, on by default (use --no-server to turn it off)
	--client|--no-client: is client component
Usage :
	butt3r component <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--template <value>] [--[no-]server] [--[no-]client]
```

## butt3r api-route

```
create a new API route:
	name: route name
	--methods <methods>: HTTP methods (GET,POST,PUT,DELETE), repeatable
	--directory <directory>: subdirectory in src/app/api
	--schema <schema>: input/output validation
Usage :
	butt3r api-route <name> [--methods <value>] [--directory <value>] [--schema <value>]
```

## butt3r db

```
manage your butT3r db:
	target: what to do [one of 'export' 'import' 'query' 'add-table' 'export']
Usage :
	butt3r db <target>
```

## butt3r down

```
terminate and clean the stack:
	--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
	--dev|--no-dev: running in dev mode, on by default (use --no-dev to turn it off)
	--all|--no-all: remove everything (cache, dependencies, etc...)
Usage :
	butt3r down [--containerd <value>] [--[no-]dev] [--[no-]all]
```

## butt3r layout

```
create/update a layout:
	path: path to the layout
	--directory <directory>: subdirectory in src/app
	--component-name <component-name>: component name
	--props <props>: property definition (name:type), repeatable
	--import <import>: import statement (from:what), repeatable
	--server|--no-server: is server component, on by default (use --no-server to turn it off)
	--client|--no-client: is client component
	--root|--no-root: is root layout
Usage :
	butt3r layout <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--[no-]server] [--[no-]client] [--[no-]root]
```

## butt3r page

```
create/update a page:
	path: path to the page
	--directory <directory>: subdirectory in src/app
	--component-name <component-name>: component name
	--props <props>: property definition (name:type), repeatable
	--import <import>: import statement (from:what), repeatable
	--server|--no-server: is server component, on by default (use --no-server to turn it off)
	--client|--no-client: is client component
Usage :
	butt3r page <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--[no-]server] [--[no-]client]
```

## butt3r start

```
start your stack:
	--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
	--runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
	--dev|--no-dev: start in dev mode
Usage :
	butt3r start [--containerd <value>] [--runner <value>] [--[no-]dev]
```

## butt3r stop

```
stop the stack:
	--containerd <containerd>: container runtime
	--dev|--no-dev: running in dev
Usage :
	butt3r stop [--containerd <value>] [--[no-]dev]
```

## butt3r trpc

```
create tRPC functionality:
	target: what to do [one of 'router' 'procedure' 'procedure' 'router']
Usage :
	butt3r trpc <target>
```

## butt3r type-schema

```
generate type schema:
	type: type of schema [one of 'props' 'form' 'api']
	target: target file
	--props <props>: property definitions, repeatable
	--form <form>: field definitions with validation, repeatable
	--api <api>: input/output fields, repeatable
Usage :
	butt3r type-schema <type> <target> [--props <value>] [--form <value>] [--api <value>]
```

## butt3r up

```
initialize the stack for the first time:
	--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
	--runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
	--dev|--no-dev: initialize in dev mode
Usage :
	butt3r up [--containerd <value>] [--runner <value>] [--[no-]dev]
```

## butt3r api-route

```
create a new API route:
	name: route name
	--methods <methods>: HTTP methods (GET,POST,PUT,DELETE), repeatable
	--directory <directory>: subdirectory in src/app/api
	--schema <schema>: input/output validation
Usage :
	butt3r api-route <name> [--methods <value>] [--directory <value>] [--schema <value>]
```

## butt3r test

```
generate tests:
	type: type of test [one of 'unit' 'e2e']
	target: component/page to test
	--directory <directory>: test directory location
Usage :
	butt3r test <type> <target> [--directory <value>]
```

## butt3r db export

```
export database to a file:
	output: output file
	--format <format>: output format [default: ' sql '] [one of 'sql' 'json' 'yaml' 'csv' 'xml']
	--table <table>: table to export (all if not specified)
	--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
	--pretty|--no-pretty: pretty print output (when possible)
Usage :
	butt3r db export <output> [--format <value>] [--table <value>] [--containerd <value>] [--[no-]pretty]
```

## butt3r db import

```
import database from a file:
	input: input file
	--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
	--force|--no-force: force import (drop existing data)
Usage :
	butt3r db import <input> [--containerd <value>] [--[no-]force]
```

## butt3r db query

```
run a query on the database:
	query: SQL query to execute
	--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
	--output <output>: output file (prints to stdout if not specified)
	--format <format>: output format (when saving to file) [default: ' table '] [one of 'table' 'json' 'yaml' 'csv' 'xml']
	--pretty|--no-pretty: pretty print output (when possible)
Usage :
	butt3r db query <query> [--containerd <value>] [--output <value>] [--format <value>] [--[no-]pretty]
```

## butt3r db add-table

```
add a database table to a schema file:
	table-name: Name of the table to create
	-c, --column <column>: Column declaration (e.g., id serial primary key, user_id integer references users.id), repeatable
	-o, --output-file <output-file>: Name of the schema file in src/db [default: ' schema.ts ']
	-d|--dry-run|--no-dry-run: Simulate the script without modifying files
Usage :
	bin/_db/add-table <table-name> [--column <value>] [--output-file <value>] [--[no-]dry-run]
```

## butt3r ts-edit

```
'edit' typescript file:
	target: what to do [one of 'export-function' 'export-type' 'import' 'export-function']
Usage :
	butt3r ts-edit <target>
```

## butt3r ts-edit export-function

```
export a function:
	name: function name
	--props <props>: function props (name:type), repeatable
	--return-type <return-type>: function return type [default: ' void ']
	--async|--no-async: is async function
Usage :
	butt3r ts-edit export-function <name> [--props <value>] [--return-type <value>] [--[no-]async]
```

## butt3r ts-edit export-type

```
export a type:
	name: type name
	--property <property>: property definition (name:type), repeatable
Usage :
	butt3r ts-edit export-type <name> [--property <value>]
```

## butt3r ts-edit import

```
add import statement:
	from: module to import from
	what: what to import
Usage :
	butt3r ts-edit import <from> <what>
```

## butt3r create docker

```
I send an SOS to the world:
	--app-name <app-name>: app name
	--app-ports <app-ports>: ports entry for the app, repeatable
	--app-env <app-env>: app env vars, repeatable
	--db-ports <db-ports>: db ports entry, repeatable
	--db-env <db-env>: db env vars, repeatable
	--db-user <db-user>: db user
	--db-name <db-name>: db name
	--app-port <app-port>: ports to use for the app
	--network <network>: main network name
	--db-networks <db-networks>: more entworks for the db, repeatable
	--app-networks <app-networks>: more net for the app, repeatable
	--db-type <db-type>: db-type [default: ' postgres ']
Usage :
	butt3r create docker [--app-name <value>] [--app-ports <value>] [--app-env <value>] [--db-ports <value>] [--db-env <value>] [--db-user <value>] [--db-name <value>] [--app-port <value>] [--network <value>] [--db-networks <value>] [--app-networks <value>] [--db-type <value>]
```

## butt3r create t3

```
my go to project creator:
	name: project name
	--db-provider <db-provider>: db provider [default: ' sqlite ']
	--db-orm <db-orm>: orm to use [default: ' drizzle ']
	--shadcn-component <shadcn-component>: shadcn component to install, repeatable
	--install <install>: package to install, repeatable
	--package-manager <package-manager>: package manager [default: ' bun ']
	--db|--no-db: project use a DB, on by default (use --no-db to turn it off)
	--app-router|--no-app-router: use app router, on by default (use --no-app-router to turn it off)
	--auth|--no-auth: use nextauth, on by default (use --no-auth to turn it off)
	--trpc|--no-trpc: use trpc, on by default (use --no-trpc to turn it off)
	--tailwind|--no-tailwind: use tailwind, on by default (use --no-tailwind to turn it off)
	--shadcn|--no-shadcn: project use shadcn, on by default (use --no-shadcn to turn it off)
	--mdx|--no-mdx: project use markdown content
	--mdx-remote|--no-mdx-remote: add next remote mdx and gray-matter, on by default (use --no-mdx-remote to turn it off)
Usage :
	butt3r create t3 <name> [--db-provider <value>] [--db-orm <value>] [--shadcn-component <value>] [--install <value>] [--package-manager <value>] [--[no-]db] [--[no-]app-router] [--[no-]auth] [--[no-]trpc] [--[no-]tailwind] [--[no-]shadcn] [--[no-]mdx] [--[no-]mdx-remote]
```

### butt3r trpc router

```
create new tRPC router:
	name: router name
	--schema <schema>: input/output validation
Usage :
	butt3r trpc router <name> [--schema <value>]
```

### butt3r trpc procedure

```
add procedure to router:
	router: target router
	name: procedure name
	type: query|mutation|infinite [one of 'query' 'mutation' 'infinite']
	--schema <schema>: input/output validation
	--loader <loader>: generate loader hook
Usage :
	butt3r trpc procedure <router> <name> <type> [--schema <value>] [--loader <value>]
```

## Component Generator

### Common Scripts

ButT3r uses two main common script files for its functionality:

#### `bin/common`

The base script containing core utilities for:
- Project validation
- Runtime checks
- Docker/Podman compose management
- Database checks
- Process management
- Environment setup

#### `bin/_ts-edit/common`

TypeScript-specific utilities for component generation and code manipulation:

##### Core Utilities
- `find_target_file()`: Locates the target TypeScript/React file
- `add_import()`: Intelligently adds or merges import statements
- `add_type()`: Adds TypeScript type definitions
- `add_function()`: Generates function/component definitions
- `format_component_name()`: Formats names to PascalCase
- `parse_emmet()`: Basic Emmet-like syntax parsing

##### Component Templates

Four main component types are supported:

1. **Page Components**
   ```typescript
   process_page_template(name, file)
   ```
   - Next.js page with error boundaries
   - Suspense for loading states
   - Navigation utilities

2. **Layout Components**
   ```typescript
   process_layout_template(name, file)
   ```
   - Metadata support
   - Header management
   - Children prop handling

3. **Form Components**
   ```typescript
   process_form_template(name, file)
   ```
   - React Hook Form integration
   - Zod schema validation
   - Type-safe form handling

4. **Table Components**
   ```typescript
   process_table_template(name, file)
   ```
   - TanStack Table integration
   - Pagination support
   - Flexible column definitions

##### API Integration

1. **Next.js API Routes**
   ```typescript
   generate_api_route(name, file, methods)
   ```
   - Route handler generation
   - Method-specific handlers
   - Error handling

2. **tRPC Procedures**
   ```typescript
   generate_trpc_procedure(name, file, type, schema)
   ```
   - Query/Mutation/Infinite query support
   - Input validation
   - Type-safe procedures

3. **Data Loaders**
   ```typescript
   add_query_loader(name, file, router)
   add_mutation_loader(name, file, router)
   add_infinite_loader(name, file, router)
   ```
   - Type-safe hooks
   - Automatic router integration
   - Loading state handling

##### Schema Validation

1. **Props Schema**
   ```typescript
   generate_props_schema(name, file, props)
   ```
   - Component prop validation
   - TypeScript type generation
   - Runtime checks

2. **Form Schema**
   ```typescript
   generate_form_schema(name, file, fields)
   ```
   - Form field validation
   - Custom validation rules
   - Type inference

3. **API Schema**
   ```typescript
   generate_api_schema(name, file, input, output)
   ```
   - Request/response validation
   - Type-safe API contracts
   - Error handling

##### Testing

1. **Unit Tests**
   ```typescript
   generate_unit_test(name, file, type)
   ```
   - React Testing Library setup
   - Snapshot testing
   - Component role testing

2. **E2E Tests**
   ```typescript
   generate_e2e_test(name, file, type)
   ```
   - Playwright integration
   - Page navigation
   - Interaction testing

### Usage Examples

#### Creating a New Page Component
```bash
butt3r component create MyPage --template page
```

#### Adding an API Route
```bash
butt3r component create userApi --api-route "GET,POST,PUT"
```

#### Creating a Form with Validation
```bash
butt3r component create LoginForm --template form --schema form
```

#### Setting Up a Data Table
```bash
butt3r component create UserTable --template table --api
```
