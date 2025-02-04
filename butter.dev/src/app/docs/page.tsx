"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Docs() {
  // State to manage the active command for displaying detailed information
  const [activeCommand, setActiveCommand] = useState<string | null>(null);

  // Utility function to toggle the active command
  const toggleCommand = (command: string) => {
    setActiveCommand(activeCommand === command ? null : command);
  };

  // Command data with descriptions, help text, and examples
  const commands = [
    {
      command: "create",
      description: "my go to project creator",
      help: `name: project name
--db-provider <db-provider>: db provider [default: ' postgres ']
--db-orm <db-orm>: orm to use [default: ' drizzle ']
-c, --shadcn-component <shadcn-component>: shadcn component to install, repeatable
-i, --install <install>: package to install, repeatable
--package-manager <package-manager>: package manager [default: ' bun ']
-p, --app-ports <app-ports>: ports entry for the app, repeatable
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
--git|--no-git: init git, on by default (use --no-git to turn it off)
Usage :
	butt3r create <name> [--db-provider <value>] [--db-orm <value>] [--shadcn-component <value>] [--install <value>] [--package-manager <value>] [--app-ports <value>] [--app-env <value>] [--db-ports <value>] [--db-env <value>] [--db-user <value>] [--db-name <value>] [--app-port <value>] [--app-network <value>] [--[no-]db] [--[no-]app-router] [--[no-]auth] [--[no-]trpc] [--[no-]tailwind] [--[no-]shadcn] [--[no-]mdx] [--[no-]mdx-remote] [--[no-]docker] [--[no-]git]`,
      examples: [
        "butt3r create my-project --db-provider mysql --shadcn-component button --install axios",
        "butt3r create my-app --no-db --no-tailwind",
      ],
    },
    {
      command: "component",
      description: "create/update a component",
      help: `path: path to the component
--directory <directory>: subdirectory in src/components
--component-name <component-name>: component name
--props <props>: property definition (name:type), repeatable
--import <import>: import statement (from:what), repeatable
--emmet <emmet>: emmet pattern for the component, repeatable
--template <template>: template to use (page|layout|form|table) [one of 'page' 'layout' 'form' 'table']
--ai-emmet <ai-emmet>: description for the ai generated emmet string
--ai-provider <ai-provider>: ai provider
--ai-model <ai-model>: ai model
--ai <ai>: get the ai to do something with the generated code
--ai-example|--eg <ai-example>: example output to give to the AI, repeatable
--server|--client: is server component, on by default (use --client to turn it off)
--dry-run|--no-dry-run: output to stdout
--prettier|--no-prettier: run prettier before output, on by default (use --no-prettier to turn it off)
--export-default|--no-export-default: export component as default
Usage :
	butt3r component <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--template <value>] [--ai-emmet <value>] [--ai-provider <value>] [--ai-model <value>] [--ai <value>] [--ai-example <value>] [--[no-]server] [--[no-]dry-run] [--[no-]prettier] [--[no-]export-default]`,
      examples: [
        "butt3r component src/components/Button --props onClick:Function --emmet div>button",
        'butt3r component src/components/Modal --template modal --ai "Create a modal component with open/close functionality"',
      ],
    },
    {
      command: "db",
      description: "manage your butT3r db",
      help: `target: what to do [one of 'export' 'import' 'query' 'add-table' 'export']
Usage :
	butt3r db <target>`,
      examples: [
        "butt3r db add-table users --columns id:int,name:string",
        "butt3r db export --file users.json",
      ],
    },
    {
      command: "down",
      description: "terminate and clean the stack",
      help: `--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
--dev|--no-dev: running in dev mode, on by default (use --no-dev to turn it off)
--all|--no-all: remove everything (cache, dependencies, etc...)
Usage :
	butt3r down [--containerd <value>] [--[no-]dev] [--[no-]all]`,
      examples: ["butt3r down --containerd podman --dev", "butt3r down --all"],
    },
    {
      command: "layout",
      description: "create/update a layout",
      help: `path: path to the layout
--directory <directory>: subdirectory in src/app
--component-name <component-name>: component name
--props <props>: property definition (name:type), repeatable
--import <import>: import statement (from:what), repeatable
--emmet <emmet>: emmet pattern for the component, repeatable
--ai-emmet <ai-emmet>: description for the ai generated emmet string
--ai-provider <ai-provider>: ai provider
--ai-model <ai-model>: ai model
--ai <ai>: get the ai to do something with the generated code
--ai-example|--eg <ai-example>: example output to give to the AI, repeatable
--server|--no-server: is server component, on by default (use --client to turn it off)
--client|--no-client: is client component
--root|--no-root: is root layout
--prettier|--no-prettier:  run prettier before output
--dry-run|--no-dry-run: output to stdout
Usage :
	butt3r layout <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--ai-emmet <value>] [--ai-provider <value>] [--ai-model <value>] [--ai <value>] [--ai-example <value>] [--[no-]server] [--[no-]client] [--[no-]root] [--[no-]prettier] [--[no-]dry-run]`,
      examples: [
        "butt3r layout src/app/layouts/Base --root",
        "butt3r layout src/app/layouts/Dashboard --client --emmet header>nav",
      ],
    },
    {
      command: "page",
      description: "create/update a page",
      help: `path: path to the page
--directory <directory>: subdirectory in src/app
--component-name <component-name>: component name
--props <props>: property definition (name:type), repeatable
--import <import>: import statement (from:what), repeatable
--emmet <emmet>: emmet pattern for the component, repeatable
--ai-emmet <ai-emmet>: description for the ai generated emmet string
--ai-provider <ai-provider>: ai provider
--ai-model <ai-model>: ai model
--ai <ai>: get the ai to do something with the generated code
--ai-example|--eg <ai-example>: example output to give to the AI, repeatable
--server|--no-server: is server component, on by default (use --no-server to turn it off)
--client|--no-client: is client component
--prettier|--no-prettier:  run prettier before output
--dry-run|--no-dry-run: output to stdout
Usage :
	butt3r page <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--ai-emmet <value>] [--ai-provider <value>] [--ai-model <value>] [--ai <value>] [--ai-example <value>] [--[no-]server] [--[no-]client] [--[no-]prettier] [--[no-]dry-run]`,
      examples: [
        "butt3r page src/app/pages/Home --template page",
        "butt3r page src/app/pages/About --props title:string --emmet h1>title",
      ],
    },
    {
      command: "start",
      description: "start your stack",
      help: `--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
--runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
--dev|--no-dev: start in dev mode
Usage :
	butt3r start [--containerd <value>] [--runner <value>] [--[no-]dev]`,
      examples: [
        "butt3r start --containerd podman --runner yarn",
        "butt3r start --dev",
      ],
    },
    {
      command: "stop",
      description: "stop the stack",
      help: `--containerd <containerd>: container runtime
--dev|--no-dev: running in dev
Usage :
	butt3r stop [--containerd <value>] [--[no-]dev]`,
      examples: ["butt3r stop --containerd docker --dev", "butt3r stop"],
    },
    {
      command: "up",
      description: "initialize the stack for the first time",
      help: `--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
--runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
--dev|--no-dev: initialize in dev mode
Usage :
	butt3r up [--containerd <value>] [--runner <value>] [--[no-]dev]`,
      examples: [
        "butt3r up --containerd docker --runner npm --dev",
        "butt3r up",
      ],
    },
    {
      command: "ts-edit",
      description: "'edit' typescript file",
      help: `target: what to do [one of 'export-function' 'export-type' 'import' 'export-function']
Usage :
	butt3r ts-edit <target>`,
      examples: [
        "butt3r ts-edit export-function --name getUser",
        "butt3r ts-edit import --from axios",
      ],
    },
    {
      command: "api-route",
      description: "create a new API route",
      help: `name: route name
--methods <methods>: HTTP methods (GET,POST,PUT,DELETE), repeatable
--directory <directory>: subdirectory in src/app/api
--schema <schema>: input/output validation
Usage :
	butt3r api-route <name> [--methods <value>] [--directory <value>] [--schema <value>]`,
      examples: [
        "butt3r api-route users --methods GET POST DELETE",
        "butt3r api-route login --methods POST --schema src/schemas/login",
      ],
    },
    {
      command: "test",
      description: "generate tests",
      help: `type: type of test [one of 'unit' 'e2e']
target: component/page to test
--directory <directory>: test directory location
Usage :
	butt3r test <type> <target> [--directory <value>]`,
      examples: [
        "butt3r test unit src/components/Button",
        "butt3r test e2e src/pages/Home --directory src/tests/e2e",
      ],
    },
    {
      command: "trpc",
      description: "create tRPC functionality",
      help: `target: what to do [one of 'router' 'procedure' 'procedure' 'router']
Usage :
	butt3r trpc <target>`,
      examples: [
        "butt3r trpc router --name user",
        "butt3r trpc procedure --name create",
      ],
    },
    {
      command: "type-schema",
      description: "generate type schema",
      help: `type: type of schema [one of 'props' 'form' 'api']
target: target file
--props <props>: property definitions, repeatable
--form <form>: field definitions with validation, repeatable
--api <api>: input/output fields, repeatable
Usage :
	butt3r type-schema <type> <target> [--props <value>] [--form <value>] [--api <value>]`,
      examples: [
        "butt3r type-schema props src/types/User --props id:int,name:string",
        "butt3r type-schema form src/schemas/Login --form email:string,password:string",
      ],
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">butt3r CLI Documentation</h1>
        <p className="text-lg text-gray-600">
          Welcome to the butt3r CLI documentation. Learn how to use the various
          commands to create, develop, and deploy your T3 stack projects.
        </p>
      </div>
      
      <div className="space-y-4">
        {commands.map((cmd) => (
          <div key={cmd.command} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCommand(cmd.command)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  <span className="font-mono text-blue-600 mr-2">$</span>
                  {cmd.command}
                </h2>
                <p className="mt-1 text-gray-600">{cmd.description}</p>
              </div>
              {activeCommand === cmd.command ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {activeCommand === cmd.command && (
              <div className="p-6 pt-0 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Usage</h3>
                  <pre className="p-4 bg-gray-50 rounded-md text-sm font-mono text-gray-700 overflow-x-auto">
                    {cmd.help}
                  </pre>
                </div>
                
                {cmd.examples.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Examples</h3>
                    <div className="space-y-2">
                      {cmd.examples.map((example, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-md">
                          <pre className="text-sm font-mono text-gray-700">
                            {example}
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}  