"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { CliForm } from "~/components/cli-form";
import { type FieldValues } from 'react-hook-form';

interface ClickodromeProps {
  onSubmit: (data: FieldValues, cmd: string) => void;
}

export function Clickodrome({ onSubmit }: ClickodromeProps) {
  const commands = {
    install: `Install butt3r:
  --shell-rc-file|--install-file <shell-rc-file>: where to put the source directive, repeatable [default: '( $HOME/.bashrc )']
  --comment|--no-comment: add parsearger comment, on by default (use --no-comment to turn it off)
  --install-dependencies|--no-install-dependencies: install dependencies, on by default (use --no-install-dependencies to turn it off)
          no-aliases: --no-deps,`,
    create: `my go to project creator:
  name: project name
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
  --git|--no-git: init git, on by default (use --no-git to turn it off)`,
    component: `create/update a component:
  path: path to the component
  --directory <directory>: subdirectory in src/components
  --component-name <component-name>: component name
  --props <props>: property definition (name:type), repeatable
  --import <import>: import statement (from:what), repeatable
  --emmet <emmet>: emmet pattern for the component, repeatable
  --template <template>: template to use (page|layout|form|table) [one of 'page' 'layout' 'form' 'table']
  --server|--no-server: is server component, on by default (use --no-server to turn it off)
  --client|--no-client: is client component`,
    page: `create/update a page:
  path: path to the page
  --directory <directory>: subdirectory in src/app
  --component-name <component-name>: component name
  --props <props>: property definition (name:type), repeatable
  --import <import>: import statement (from:what), repeatable
  --server|--no-server: is server component, on by default (use --no-server to turn it off)
  --client|--no-client: is client component`,
    layout: `create/update a layout:
  path: path to the layout
  --directory <directory>: subdirectory in src/app
  --component-name <component-name>: component name
  --props <props>: property definition (name:type), repeatable
  --import <import>: import statement (from:what), repeatable
  --server|--no-server: is server component, on by default (use --no-server to turn it off)
  --client|--no-client: is client component
  --root|--no-root: is root layout`,
    up: `initialize the stack for the first time:
  --containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
  --runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
  --dev|--no-dev: initialize in dev mode`,
    down: `terminate and clean the stack:
  --containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
  --dev|--no-dev: running in dev mode, on by default (use --no-dev to turn it off)
  --all|--no-all: remove everything (cache, dependencies, etc...)`,
    start: `start your stack:
  --containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
  --runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
  --dev|--no-dev: start in dev mode`,
    stop: `stop the stack:
  --containerd <containerd>: container runtime
  --dev|--no-dev: running in dev`
  };

  return (
    <Tabs defaultValue="install">
      <TabsList className="flex justify-center">
        {Object.keys(commands).map((cmd) => (
          <TabsTrigger
            key={cmd}
            value={cmd}
            className="mx-2"
          >
            {cmd}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(commands).map(([cmd, helpText]) => (
        <TabsContent key={cmd} value={cmd}>
          <CliForm
            helpText={helpText}
            baseCmd={cmd === 'install' ? 'utils/install' : `butt3r ${cmd}`}
            onSubmit={onSubmit}
            columns={cmd === 'install' ? 1 : 2}
            fieldClassName="dark:bg-gray-800/90"
          />
        </TabsContent>
      ))}
    </Tabs>
  );
} 