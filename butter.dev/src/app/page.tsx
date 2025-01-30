"use client";

import Link from "next/link";
import TerminalSimulator from "~/components/terminal-simulator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { T3Link } from "~/components/ui/t3-link";
import { Hero } from "~/components/welcome/hero";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#57aed1] to-[#2e026d] text-white">
      <Hero />
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-4">
        <section className="mx-auto grid grid-cols-1 items-center gap-8 px-4 py-8 pb-12 sm:px-1 md:py-8 lg:grid lg:gap-x-2 lg:px-3 lg:py-12 xl:grid-cols-2 xl:gap-x-6">
          <div className="mx-auto flex max-w-[800px] flex-col gap-2 md:gap-4 xl:max-w-full">
            <h2 className="text-t3-purple-50 mb-2 w-full text-3xl font-bold md:text-5xl lg:text-5xl">
              But<T3Link/>r removes friction!
            </h2>{" "}
            <p className="text-t3-purple-200 mx-auto mt-4 max-w-3xl text-base md:text-xl lg:text-xl xl:text-xl">
              But<T3Link/>r refined the extreme lubrication properties of bash, in
              order to offer you the But<T3Link/>r way to create full-stack web app,
              Fast as a sausage on a well oiled pan !
            </p>{" "}
            <div className="text-t3-purple-200 mx-auto mt-4 max-w-3xl text-base md:text-xl lg:text-xl xl:text-xl">
              After a 7 years <HoverCard>
                <HoverCardTrigger>
                  professional
                </HoverCardTrigger>
                <HoverCardContent>
                  8 years as mostly a :
                  <ul>
                    <li>PHP dev (#noRagrets)</li>
                    <li>SysAdmin (LAMP stack counts ! my page, my rules !)</li>
                    <li>old fashion js shenanigans alchemist (this is clearly not defined !)</li>
                  </ul>
                </HoverCardContent>
              </HoverCard> hiatus, I have lots of opinions and
              absolutly no insights ! So, I've done my best to steal others work and shove it into
              this CLI tool !
            </div>{" "}
            <div className="text-t3-purple-200 mx-auto mt-4 max-w-3xl text-base md:text-xl lg:text-xl xl:text-xl">
              It is written in bash (arguably the most amazing programming language !)
              and most definitly the greatest{" "}
              <HoverCard>
                <HoverCardTrigger>
                  pure bash standalone argument parsing generator CLI tool :
                </HoverCardTrigger>
                <HoverCardContent>
                  Try saying That 10 times fast, rolls of the tongue ! XD <br />
                  A ? shameless plug ? yes, yes it is !
                </HoverCardContent>
              </HoverCard>{" "}
              <Link
                href="https://github.com/DimitriGilbert/parseArger"
                target="_blank"
              >
                parseArger
              </Link>{" "}
              !
            </div>
            <p className="text-t3-purple-200 mx-auto mt-4 max-w-3xl text-base md:text-xl lg:text-xl xl:text-xl">
              The main goal is to work smar<T3Link/>r, not harder ! Get to start your
              project in 10 seconds, and revolutionnize the WORLD (The same thing we do every night, Pinky !
              tadatadatada tadatadatada ...)
            </p>{" "}
          </div>
          <div className="mx-auto flex max-w-[800px] flex-col gap-2 md:gap-4 xl:max-w-full">
            <TerminalSimulator
              startLine="# How do I install butter.... this is a scarry place... the terminal..."
              defaultTypingRandom={75}
              defaultTypingSpeed={75}
              commands={[
                {
                  prompt: "get_ButT3r && cd ButT3r && utils/install --help",
                  output: `Install butt3r:
      --shell-rc-file|--install-file <shell-rc-file>: where to put the source directive, repeatable [default: '( $HOME/.bashrc )']
      --comment|--no-comment: add parsearger comment, on by default (use --no-comment to turn it off)
      --install-dependencies|--no-install-dependencies: install dependencies, on by default (use --no-install-dependencies to turn it off)
          no-aliases: --no-deps,
Usage :
  ./utils/install [--shell-rc-file <value>] [--[no-]comment] [--[no-]install-dependencies]`,
                },
                {
                  prompt: "utils/install --shell-rc-file ~/.zshrc",
                },
                {
                  prompt: "cd .. && source ~/.zshrc",
                },
                {
                  prompt: "butt3r --help",
                  output: `And, you thought T3 was opinionated:
      target: what to do [one of 'create' 'component' 'db' 'down' 'layout' 'page' 'start' 'stop' 'up' 'ts-edit' 'api-route' 'create' 'test' 'trpc' 'type-schema']`,
                },
                {
                  prompt: "butt3r create --help",
                  output: `my go to project creator:
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
      --git|--no-git: init git, on by default (use --no-git to turn it off)`
                },
                {
                  prompt: "# Let's create a project !",
                },
                {
                  prompt: "butt3r create my-project",
                  output: [
                    {
                      content: `
  ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
 / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
| (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
 \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|



Using: bun

✔ MyDocProject scaffolded successfully!

Adding boilerplate...
✔ Successfully setup boilerplate for tailwind
✔ Successfully setup boilerplate for envVariables
✔ Successfully setup boilerplate for eslint
`,
                    },
                    {
                      placeholder: `Installing dependencies...`,
                      content: `
✔ Successfully installed dependencies
`,
                      delay: 1000,
                    },
                    {
                      content: `Next steps:
  cd MyDocProject
  bun run dev
  git commit -m "initial commit"
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating src/styles/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - src/lib/utils.ts

Success! Project initialization completed.
You may now add components.`
                    },
                    {
                      content: "✔ Checking registry.",
                    },
                    {
                      content: "✔ Installing dependencies.",
                      placeholder: "... Installing dependencies.",
                      delay: 1000,
                    },
                    {
                      content:`✔ Created 3 files:
  - src/components/ui/navigation-menu.tsx
  - src/components/ui/tabs.tsx
  - src/components/ui/table.tsx`
                    }
                  ],
                },
                {
                  prompt: "cd MyDocProject && tree -I 'node_modules|cache|test_*'",
                  output:`.
├── bun.lock
├── components.json
├── data
├── docker-compose.dev.yml
├── Dockerfile
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── prettier.config.js
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── ui
│   │       ├── navigation-menu.tsx
│   │       ├── table.tsx
│   │       └── tabs.tsx
│   ├── env.js
│   ├── lib
│   │   └── utils.ts
│   └── styles
│       └── globals.css
├── tailwind.config.ts
└── tsconfig.json

9 directories, 22 files`
                },
                {
                  prompt: "# coool, let's see the component command !",
                },
                {
                  prompt: "butt3r component --help",
                  output: `create/update a component:
      path: path to the component
      --directory <directory>: subdirectory in src/components
      --component-name <component-name>: component name
      --props <props>: property definition (name:type), repeatable
      --import <import>: import statement (from:what), repeatable
      --emmet <emmet>: emmet pattern for the component, repeatable
      --template <template>: template to use (page|layout|form|table) [one of 'page' 'layout' 'form' 'table']
      --server|--client: is server component, on by default (use --client to turn it off)
      --dry-run|--no-dry-run: output to stdout
      --prettier|--no-prettier: run prettier before output, on by default (use --no-prettier to turn it off)
      --export-default|--no-export-default: export component as default`
                },
                {
                  prompt: "# emmet ? huh ? naughties' are new again ?"
                },
                {
                  prompt:`butt3r component menu --import "~/components/ui/navigation-menu:NavigationMenu,NavigationMenuItem,NavigationMenuLink,NavigationMenuList" --emmet 'NavigationMenu>NavigationMenuList>NavigationMenuItem>NavigationMenuLink>a[href="/"]{Home}' --dry-run`,
                  output:`src/components/menu.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";

export function Menu() {
  return (
    <NavigationMenu>
      <navigationmenulist>
        <navigationmenuitem>
          <navigationmenulink>
            <a href="/">Home</a>
          </navigationmenulink>
        </navigationmenuitem>
      </navigationmenulist>
    </NavigationMenu>
  );
}`
                },
                {
                  prompt:"# ok, ok sure you ain't eating that cup cake !"
                },
                {
                  prompt:``,
                  typingSpeed:10
                }
              ]}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
