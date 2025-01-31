'use client';

import { CliForm } from '~/components/cli-form';

const cliHelpText = `
my go to project creator:
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
        --git|--no-git: init git, on by default (use --no-git to turn it off)
`;

export default function CliPage() {
  const handleSubmit = (data: any, cmd: string) => {
    // console.log('Form Data:', data);
    console.log('Generated Command:', cmd);
    // Execute the command here
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CLI Form Generator</h1>
      <CliForm 
        helpText={cliHelpText}
        onSubmit={handleSubmit}
      />
    </main>
  );
} 