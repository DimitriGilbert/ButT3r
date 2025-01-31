import TerminalSimulator from "../terminal-simulator";

export function DemoTerminal() {
  return (
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
--git|--no-git: init git, on by default (use --no-git to turn it off)`,
        },
        {
          prompt: "# Let's create a project !",
        },
        {
          prompt:
            "butt3r create MyDocProject -c navigation-menu -c tabs -c table --mdx-remote --no-mdx --no-db --no-trpc --no-auth --no-git --no-docker",
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
You may now add components.`,
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
              content: `✔ Created 3 files:
- src/components/ui/navigation-menu.tsx
- src/components/ui/tabs.tsx
- src/components/ui/table.tsx`,
            },
          ],
        },
        {
          prompt: "cd MyDocProject && tree -I 'node_modules|cache|test_*'",
          output: `.
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

9 directories, 22 files`,
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
--export-default|--no-export-default: export component as default`,
        },
        {
          prompt: "# emmet ? huh ? naughties' are new again ?",
        },
        {
          prompt: `butt3r component menu --import "~/components/ui/navigation-menu:NavigationMenu,NavigationMenuItem,NavigationMenuLink,NavigationMenuList" --emmet 'NavigationMenu>NavigationMenuList>NavigationMenuItem>NavigationMenuLink>a[href="/"]{Home}' --dry-run`,
          output: `src/components/menu.tsx
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
}`,
        },
        {
          prompt: "# ok, ok sure you ain't eating that cup cake !",
        },
        {
          prompt: `butt3r component menu --import "~/components/ui/navigation-menu:NavigationMenu,NavigationMenuItem,NavigationMenuLink,NavigationMenuList" --emmet 'ResizablePanelGroup[direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]"]>(ResizablePanel[defaultSize={50}]>(div[className="flex h-[200px] items-center justify-center p-6"]>(span[className="font-semibold"]>({One})))+ResizableHandle+ResizablePanel[defaultSize={50}]>(ResizablePanelGroup[direction="vertical"]>(ResizablePanel[defaultSize={25}]>(div[className="flex h-full items-center justify-center p-6"]>(span[className="font-semibold"]>({Two})))+ResizableHandle+ResizablePanel[defaultSize={75}]>(div[className="flex h-full items-center justify-center p-6"]>(span[className="font-semibold"]>({Three}))))))' --dry-run`,
          typingSpeed: 10,
          output: `/home/didi/workspace/Code/ButT3r/src/components/menu.tsx
import {
NavigationMenu,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
} from "~/components/ui/navigation-menu";

export function Menu() {
return (
<ResizablePanelGroup
xmlns="http://www.w3.org/1999/xhtml"
direction="horizontal"
className="max-w-md rounded-lg border md:min-w-[450px]"
>
<ResizablePanel defaultSize="{50}">
<div className="flex h-[200px] items-center justify-center p-6">
<span className="font-semibold">One</span>
<ResizableHandle></ResizableHandle>
<ResizablePanel defaultSize="{50}">
  <ResizablePanelGroup direction="vertical">
    <ResizablePanel defaultSize="{25}">
      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Two</span>
        <ResizableHandle></ResizableHandle>
        <ResizablePanel defaultSize="{75}">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </div>
        </ResizablePanel>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
</ResizablePanel>
</div>
</ResizablePanel>
</ResizablePanelGroup>
);
} `,
        },
        {
          prompt: `# HAHA ! I knew it would fall on it's face ! (bruh, me no care laaaaahhhh, 'tis good enough !)
# ... well, let's see if it works, shall we ?!
butt3r start --dev`,
          output: `$ next dev --turbo
⚠ Port 3000 is in use, trying 3001 instead.
⚠ Found lockfile missing swc dependencies, patching...
⚠ Lockfile was successfully patched, please run "npm install" to ensure @next/swc dependencies are downloaded`,
        },
        {
          prompt: `# hehe, someone's busy I see !
Now it is Your turn !`,
        },
      ]}
    />
  );
}
