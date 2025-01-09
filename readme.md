# ButT3r

A highly opinionated Next.js project creator and manager with built-in utilities for TypeScript, components, layouts, pages, and database management.

## Installation

An installation script is provided:

```bash
# download the script
curl -s https://raw.githubusercontent.com/DimitriGilbert/ButT3r/main/utils/get_butt3r -O;
# make it executable
chmod +x get_butt3r;
# display the help
./get_butt3r --help;
#	-b, --branch|--tag|--install-version <branch>: version to install
#	--install-directory <install-directory>: where to install
#	--install-file <install-file>: rc files to install to, forces install, repeatable
#	-i|--install|--no-install: install in bashrc
#	--remove-installer|--no-remove-installer: remove install script itself
#	aliases: --rm,
#	--ssh|--no-ssh: clone using ssh
#	--zip|--no-zip: install using zip archive, not recommended

# generic install
./get_butt3r --install;
```

## Usage

### create

Create a New Project.

```bash
butt3r create <name> [options]
```

Options:
- `--db-provider`: Database provider (default: postgres)
- `--db-orm`: ORM to use (default: drizzle)
- `--shadcn-component`: shadcn components to install (repeatable)
- `--install`: Additional packages to install (repeatable)
- `--package-manager`: Package manager to use (default: bun)
- `--app-ports`: App ports configuration (repeatable)
- `--app-env`: App environment variables (repeatable)
- `--db-ports`: Database ports configuration (repeatable)
- `--db-env`: Database environment variables (repeatable)
- `--db-user`: Database user
- `--db-name`: Database name
- `--app-port`: App port
- `--app-network`: Network for the app

Flags:
- `--[no-]db`: Enable/disable database (default: on)
- `--[no-]app-router`: Use app router (default: on)
- `--[no-]auth`: Use NextAuth (default: on)
- `--[no-]trpc`: Use tRPC (default: on)
- `--[no-]tailwind`: Use Tailwind CSS (default: on)
- `--[no-]shadcn`: Use shadcn components (default: on)
- `--[no-]mdx`: Use markdown content
- `--[no-]mdx-remote`: Add next-mdx-remote and gray-matter (default: on)
- `--[no-]docker`: Create Docker Compose stack (default: on)

### Project Management

Up, start, stop and down you stack.

```bash
# Initialize the stack
butt3r up [--containerd <docker|podman>] [--runner <bun|npm|yarn>] [--dev]

# Start the project
butt3r start [--containerd <docker|podman>] [--runner <bun|npm|yarn>] [--dev]

# Stop the project
butt3r stop [--containerd <docker|podman>] [--dev]

# Terminate and clean the stack
butt3r down [--containerd <docker|podman>] [--dev] [--all]
```

### component, page, layout

Create/update a component, page or layout.

```bash
# Create/update a component
butt3r component <path> [options]

# Create/update a page
butt3r page <path> [options]

# Create/update a layout
butt3r layout <path> [options]
```

Common options for components/pages/layouts:
- `--directory`: Subdirectory location
- `--component-name`: Component name
- `--props`: Property definitions (name:type, repeatable)
- `--import`: Import statements (from:what, repeatable)
- `--[no-]server`: Server component (default: on)
- `--[no-]client`: Client component

### db

Export, import and run database queries.

```bash
# Export database
butt3r db export <output> [options]
--format: Output format (sql|json|yaml|csv|xml)
--table: Specific table to export
--pretty: Pretty print output

# Import database
butt3r db import <input> [options]
--force: Force import (drop existing data)

# Run database query
butt3r db query <query> [options]
--output: Output file
--format: Output format (table|json|yaml|csv|xml)
--pretty: Pretty print output
```

### ts-edit

"Edit" typescript files

```bash
# Add import statement
butt3r ts-edit import <from> <what>

# Export a type: export type ... = {...}
butt3r ts-edit export-type <name> [--property <name:type>...]

# Export a function: export function <name> (...args: <type>[]) { ... }
#   --props: export type <name>Props = { ... }
butt3r ts-edit export-function <name> [options]
--props: Function props (name:type)
--return-type: Return type (default: void)
--async: Mark as async function
```

### Component Generator

The component generator supports advanced templates and features:

#### Template Types
```bash
# Create a page component with error boundaries and suspense
butt3r component create MyPage --template page

# Create a layout with metadata support
butt3r component create MainLayout --template layout

# Create a form with validation
butt3r component create LoginForm --template form --schema form

# Create a data table with pagination
butt3r component create UserTable --template table
```

#### API Integration
```bash
# Generate REST API route
butt3r component create userApi --api-route "GET,POST,PUT"

# Create tRPC procedure
butt3r component create users --trpc-router "users" --trpc-procedure "getUsers" --loader "query"

# Add data loader
butt3r component create posts --loader "infinite"
```

#### Schema Validation
```bash
# Add props validation
butt3r component create Button --schema "props" --props "variant:string" --props "size:string"

# Add form validation
butt3r component create SignupForm --schema "form" --fields "email:string|email()" --fields "password:string|min(8)"

# Add API validation
butt3r component create auth --schema "api" --input "username:string" --input "password:string"
```

#### Testing
```bash
# Generate unit tests
butt3r component create Header --test "unit"

# Generate E2E tests
butt3r component create LoginFlow --test "e2e"
```

For detailed documentation of all features and functions, see [documentation.md](documentation.md).

