# ButT3r

A highly opinionated Next.js project creator and manager with built-in utilities for TypeScript, components, layouts, pages, and database management.

## Installation

```bash
# Download and install
curl -s https://raw.githubusercontent.com/DimitriGilbert/ButT3r/main/utils/get_butt3r -O
chmod +x get_butt3r
./get_butt3r --install

# Installation options (run --help to see all)
./get_butt3r --help
```

## Quick Start

### Create a New Project
```bash
butt3r create my-app
```

This creates a new Next.js project with our recommended stack:
- Next.js with App Router
- TypeScript
- Tailwind CSS
- tRPC
- NextAuth
- PostgreSQL with Drizzle ORM
- Docker support
- shadcn/ui components

### Start Development
```bash
cd my-app

# Start the development stack
butt3r up --dev

# Stop the stack
butt3r stop
```

## Project Management

### Stack Commands
```bash
# Initialize and start the stack
butt3r up [--dev] [--containerd <docker|podman>] [--runner <bun|npm|yarn>]

# Start an existing stack
butt3r start [--dev] [--containerd <docker|podman>] [--runner <bun|npm|yarn>]

# Stop the stack
butt3r stop [--dev] [--containerd <docker|podman>]

# Clean up the stack
butt3r down [--dev] [--containerd <docker|podman>] [--all]
```

### Project Creation Options
Customize your project during creation:
```bash
butt3r create <name> [options]

# Basic Configuration
--package-manager <bun|npm|yarn>  # Package manager to use
--[no-]app-router                 # Use Next.js App Router
--[no-]tailwind                   # Include Tailwind CSS
--[no-]shadcn                     # Include shadcn/ui components
--shadcn-component <name>         # Add specific shadcn components

# Database Options
--[no-]db                         # Include database support
--db-provider <postgres|mysql>    # Choose database provider
--db-orm <drizzle|prisma>         # Choose ORM
--db-user <username>              # Set database user
--db-name <dbname>                # Set database name

# Additional Features
--[no-]auth                       # Include authentication
--[no-]trpc                       # Include tRPC
--[no-]mdx                        # Include MDX support
--[no-]docker                     # Include Docker setup

# Environment Configuration
--app-port <port>                 # Set application port
--app-env <KEY=VALUE>             # Set environment variables
--db-ports <host:container>       # Map database ports
--db-env <KEY=VALUE>              # Set database environment
```

## Development Tools

### Component Management
Create and manage React components:
```bash
# Basic component
butt3r component MyComponent

# With props
butt3r component Button --props "variant:string" --props "size:string"

# Server/Client components
butt3r component Header --server    # Server Component
butt3r component Form --client      # Client Component
# Advanced component creation
butt3r component Card --props "title:string" --props "content:string" --import "@/components/CardStyles" --directory "ui"
butt3r component Modal --props "isOpen:boolean" --props "onClose:() => void" --props "title:string" --props "children:ReactNode" --props "closeText:string" --client --import "@/components/ModalStyles" --emmet "div.modal>div.modal-header>h2{{props.title}}^div.modal-body{{props.children}}^div.modal-footer>button{{props.closeText}}[onclick={{e => props.onClose(e)}}]"
butt3r component Input --props "value:string" --props "onChange:(value:string) => void" --import "@/components/InputStyles" --directory "forms"
```

### Page and Layout Creation
```bash
# Create a page
butt3r page users/[id] --props "id:string"

# Create a layout
butt3r layout dashboard --props "children:ReactNode"
```

### Database Management

#### Schema Management
```bash
# Add a table to your schema
butt3r db add-table users \
  -c "id serial primaryKey" \
  -c "email varchar notNull unique"

# With relationships
butt3r db add-table posts \
  -c "id serial primaryKey" \
  -c "author_id integer notNull #users.id"
```

#### Data Operations
```bash
# Export data
butt3r db export data.sql --format sql --pretty

# Import data
butt3r db import data.sql

# Run queries
butt3r db query "SELECT * FROM users" --format json
```

### TypeScript Utilities
```bash
# Add imports
butt3r ts-edit import "@/components" "Button"

# Export types
butt3r ts-edit export-type User --property "id:string" --property "name:string"

# Export functions
butt3r ts-edit export-function getUser --props "id:string" --return-type "Promise<User>"
```

## Advanced Features

### AI

```bash
# Create a component with AI
butt3r component MyComponent --ai "Create a button component"
# set an ai provider
butt3r component MyComponent --ai "Create a button component" --ai-provider "openai"
# set an ai model
butt3r component MyComponent --ai "Create a button component" --ai-provider "openai" --ai-model "gpt-4o"
# set an ai example
butt3r component MyComponent --ai "Create a button component" --ai-provider "openai" --ai-model "gpt-4o" --ai-example "./components/ui/button.tsx"
```

Same for page and layout.

### API Integration
```bash
# REST API routes
butt3r component userApi --api-route "GET,POST,PUT"

# tRPC procedures
butt3r component users --trpc-router "users" --trpc-procedure "getUsers"
```

### Testing
```bash
# Unit tests
butt3r component Header --test "unit"

# E2E tests
butt3r component LoginFlow --test "e2e"
```

For detailed documentation of all features and functions, see [documentation.md](documentation.md).

