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

### Component Templates
Create components with advanced features:
```bash
# Page with error boundaries
butt3r component create MyPage --template page

# Form with validation
butt3r component create LoginForm --template form --schema form

# Data table with pagination
butt3r component create UserTable --template table
```

### API Integration
```bash
# REST API routes
butt3r component create userApi --api-route "GET,POST,PUT"

# tRPC procedures
butt3r component create users --trpc-router "users" --trpc-procedure "getUsers"
```

### Testing
```bash
# Unit tests
butt3r component create Header --test "unit"

# E2E tests
butt3r component create LoginFlow --test "e2e"
```

For detailed documentation of all features and functions, see [documentation.md](documentation.md).

