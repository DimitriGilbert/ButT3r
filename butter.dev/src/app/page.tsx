"use client";

import TerminalSimulator from "~/components/terminal-simulator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { T3Link } from "~/components/ui/t3-link";
import { Hero } from "~/components/home/hero";
import { DemoTerminal } from "~/components/home/demo-terminal";
import { useState } from "react";
import { Clickodrome } from "~/components/clickodrome";
import { OutgoingLink } from "~/components/ui/outgoing-link";
import Link from "next/link";
import { GlowLink } from "~/components/ui/glow-link";
import Butt3r from "~/components/ui/butt3r";
import { motion } from "motion/react";

export default function HomePage() {
  const [terminalCommands, setTerminalCommands] = useState<
    { prompt: string }[]
  >([]);

  const handleSubmit = (data: any, cmd: string) => {
    setTerminalCommands((prev) => [...prev, { prompt: `${cmd}` }]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-8 text-white">
      <Hero />
      <div className="container flex flex-col items-center gap-8 px-4 py-8 pt-8">
        <section className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:gap-8">
          <OutgoingLink
            href="https://github.com/DimitriGilbert/ButT3r"
            className="rounded-xl bg-white/25 text-white hover:bg-white/40"
          >
            <motion.span
              className="text-xl font-bold"
              whileHover={{
                scale: 1.15,
                color: "rgb(0, 255, 0)",
                textShadow: "2px 2px black",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
            >
              ButT3r Github
            </motion.span>
          </OutgoingLink>
          <OutgoingLink
            href="https://create.t3.gg"
            className="rounded-xl bg-white/25 text-white hover:bg-white/40"
          >
            <motion.span
              className="text-xl font-bold"
              whileHover={{
                scale: 1.15,
                color: "rgb(168, 85, 247)",
                textShadow: "2px 2px black",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
            >
              T3 Stack
            </motion.span>
          </OutgoingLink>
        </section>
        <section className="grid w-full grid-cols-1 items-center gap-8 py-8 lg:grid lg:gap-x-2 xl:grid-cols-2 xl:gap-x-6">
          <div className="flex flex-col gap-4 rounded-lg bg-white/60 p-6 dark:bg-gray-800/90">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              <Butt3r /> removes friction!
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              <Butt3r /> refined the extreme lubrication properties of bash, in
              order to offer you the <Butt3r /> way to create full-stack web
              apps, Fast as a sausage on a well oiled pan !{" "}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                both the creation And the app !{" "}
                <span className="text-muted">wiiiiiizzzzz</span>
              </span>
            </p>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              After a 7 years{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  professional
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  8 years as mostly a :
                  <ul>
                    <li>PHP dev (#noRagrets)</li>
                    <li>SysAdmin (LAMP stack counts ! my page, my rules !)</li>
                    <li>
                      old fashion js shenanigans alchemist (this is clearly not
                      defined !)
                    </li>
                  </ul>
                </HoverCardContent>
              </HoverCard>{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  hiatus
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  Auto-immune diseases sux donkey ballz, dude !
                </HoverCardContent>
              </HoverCard>
              , I have lots of opinions and absolutly no insights ! So, I've
              done my best to steal others work's and shove it into this CLI
              tool !
            </div>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              It is written in bash (arguably the most amazing programming
              language !) and using the{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  most definitly greatest
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  such syntax ! Much a clean ! AWE !
                </HoverCardContent>
              </HoverCard>{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  pure bash standalone argument parsing generator CLI tool :
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  Try saying That 10 times fast, rolls of the tongue ! XD <br />
                  A ? shameless plug ? yes, yes it is !
                </HoverCardContent>
              </HoverCard>{" "}
              <GlowLink
                href="https://github.com/DimitriGilbert/parseArger"
                color="rgba(59, 130, 246, 0.8)"
                className="text-blue-600 dark:text-blue-400"
              >
                parseArger
              </GlowLink>{" "}
              !
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              The main goal is to work smar
              <T3Link />
              r, not harder ! Get to start your project in 10 seconds, and
              revolutionnize the WORLD (The same thing we do every night, Pinky
              ! tadatadatada tadatadatada ...)
            </p>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              What does it do ?{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  It installs
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  It run{" "}
                  <GlowLink href="https://create.t3.gg">create-t3-app</GlowLink>{" "}
                  with a set of default you can override ! As well as install your dependencies !
                </HoverCardContent>
              </HoverCard>{" "}
              and{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  configures everything
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  adds shadcn support, (remote) mdx
                </HoverCardContent>
              </HoverCard>
              , create all the files, and even{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  create a docker stack
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  Dockerfile and docker-compose for dev (for now)
                </HoverCardContent>
              </HoverCard>
              for you ! (if you want !), starts, stops, cleans and exports your
              database !{" "}
              <HoverCard>
                <HoverCardTrigger className="text-sm text-muted-foreground">
                  Soon™
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  At some point it will be the next shinny thing, what you miss
                  on this list.... Soon™ !
                </HoverCardContent>
              </HoverCard>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              Ooh Ooooh, and create components, and pages, and layouts
              boilerplates (imports, props and all that !)
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <DemoTerminal />
          </div>
        </section>
        <section className="grid w-full grid-cols-1 gap-8 py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <TerminalSimulator
              title="I haz fear dark"
              commandDelay={10}
              width="w-full"
              startLine="# terminalophobic and other terminal-impared individuals rejoice !"
              defaultTypingRandom={250}
              defaultTypingSpeed={1}
              commands={[
                {
                  prompt: `# use the form on the right to create your CLI commands !
# and then click on the generated command,
# it will copy to your clipboard !`,
                },
                ...terminalCommands,
              ]}
            />
          </div>
          <div className="flex flex-col gap-4 rounded-lg bg-white/60 p-6 dark:bg-gray-800/90">
            <h2 className="text-right text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              <Butt3r /> is accessible !
            </h2>
            <Clickodrome onSubmit={handleSubmit} />
          </div>
        </section>
        <section className="grid w-full grid-cols-1 gap-8 py-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg bg-white/60 p-6 dark:bg-gray-800/90">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              <Butt3r /> haz --ai !
            </h2>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              In case you were wondering, or not tired of everyone shoving AI in
              everything and{" "}
              <HoverCard>
                <HoverCardTrigger className="text-gray-900 dark:text-white">
                  absolutly anything
                </HoverCardTrigger>
                <HoverCardContent className="bg-white dark:bg-gray-800">
                  And I trully mean,{" "}
                  <Link
                    href="https://buttplug.io/"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    ANYTHING !
                  </Link>
                </HoverCardContent>
              </HoverCard>
              , you'll be happy to learn that, <Butt3r /> also comes with AI !
            </div>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              Waaaiiiit, WUUUUUT ? <Butt3r /> can do AI ? ooooh yeah baby, and
              it can do it gooooood !
            </div>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              <p>A new component ? --ai !</p>
              <p>A new Page ? --ai !</p>
              <p>A new LAYOUT ?!? --AI !!</p>
              <p>Easy as p(A)Ie !</p>
            </div>
            <div className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              How do you use it ? Easy I sAId !
              <ol className="list-inside list-decimal space-y-4">
                <li className="text-gray-700 dark:text-gray-300">
                  Use <span className="font-mono text-purple-400">--ai</span>{" "}
                  when installing <Butt3r />, this will install the{" "}
                  <GlowLink
                    href="https://github.com/DimitriGilbert/ai-gents"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                    target="_blank"
                  >
                    AI-Gents
                  </GlowLink>{" "}
                  CLI tool
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {" "}
                    (you can configure providers and models also{" "}
                    <span className="font-mono">--ai-provider</span> and{" "}
                    <span className="font-mono">--ai-model</span> ;))
                  </span>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Use{" "}
                  <span className="font-mono text-purple-400">
                    --ai "a description for the stuff you want to create"
                  </span>{" "}
                  when creating a new component, page or layout.{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    Remember, output is only as good as the prompt!
                  </span>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-green-400">
                    "Instant" AI code!
                  </span>{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    (What do you mean buttery slop?! I already told you, it is a
                    well oiled pan, and{" "}
                    <span className="line-through">you are</span>{" "}
                    <span className="font-bold">the project is</span> the
                    sausage !)
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TerminalSimulator
              title={
                <HoverCard>
                  <HoverCardTrigger className="text-gray-900 dark:text-white">
                    (A)I cannot center laaahhh
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-white dark:bg-gray-800">
                    Really..., how infuriating is that ? ^^'
                  </HoverCardContent>
                </HoverCard>
              }
              width="w-full"
              defaultTypingRandom={250}
              defaultTypingSpeed={10}
              commands={[
                {
                  prompt:
                    "# HAy, did you see we have AI ? Like AI AI ! OpenAI, Anthropic, Gemini, Groq, Ollama, etc. You can use them all with ButT3r ! AI AI AI AI AI AI AIHHHHHHHHhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                },
                {
                  prompt: `butt3r page docs --ai "use the provided documentation to create a nice looking nextjs page containing all necessary informations about my CLI. For each command, I want a small description, the full help and a set of example. Do not just import the md, I want a full page \! \n#\!/cat documentation.md;"`,
                  output: {
                    delay: 3000,
                    placeholder: "# the AI magic is happening !",
                    content: `Extracted Code Blocks: 1
src/app/docs/app.tsx
import { useState } from "react";

export function Docs() {
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
      help: \`name: project name
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
	butt3r create <name> [--db-provider <value>] [--db-orm <value>] [--shadcn-component <value>] [--install <value>] [--package-manager <value>] [--app-ports <value>] [--app-env <value>] [--db-ports <value>] [--db-env <value>] [--db-user <value>] [--db-name <value>] [--app-port <value>] [--app-network <value>] [--[no-]db] [--[no-]app-router] [--[no-]auth] [--[no-]trpc] [--[no-]tailwind] [--[no-]shadcn] [--[no-]mdx] [--[no-]mdx-remote] [--[no-]docker] [--[no-]git]\`,
      examples: [
        "butt3r create my-project --db-provider mysql --shadcn-component button --install axios",
        "butt3r create my-app --no-db --no-tailwind",
      ],
    },
    {
      command: "component",
      description: "create/update a component",
      help: \`path: path to the component
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
	butt3r component <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--template <value>] [--ai-emmet <value>] [--ai-provider <value>] [--ai-model <value>] [--ai <value>] [--ai-example <value>] [--[no-]server] [--[no-]dry-run] [--[no-]prettier] [--[no-]export-default]\`,
      examples: [
        "butt3r component src/components/Button --props onClick:Function --emmet div>button",
        'butt3r component src/components/Modal --template modal --ai "Create a modal component with open/close functionality"',
      ],
    },
    {
      command: "db",
      description: "manage your butT3r db",
      help: \`target: what to do [one of 'export' 'import' 'query' 'add-table' 'export']
Usage :
	butt3r db <target>\`,
      examples: [
        "butt3r db add-table users --columns id:int,name:string",
        "butt3r db export --file users.json",
      ],
    },
    {
      command: "down",
      description: "terminate and clean the stack",
      help: \`--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
--dev|--no-dev: running in dev mode, on by default (use --no-dev to turn it off)
--all|--no-all: remove everything (cache, dependencies, etc...)
Usage :
	butt3r down [--containerd <value>] [--[no-]dev] [--[no-]all]\`,
      examples: ["butt3r down --containerd podman --dev", "butt3r down --all"],
    },
    {
      command: "layout",
      description: "create/update a layout",
      help: \`path: path to the layout
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
	butt3r layout <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--ai-emmet <value>] [--ai-provider <value>] [--ai-model <value>] [--ai <value>] [--ai-example <value>] [--[no-]server] [--[no-]client] [--[no-]root] [--[no-]prettier] [--[no-]dry-run]\`,
      examples: [
        "butt3r layout src/app/layouts/Base --root",
        "butt3r layout src/app/layouts/Dashboard --client --emmet header>nav",
      ],
    },
    {
      command: "page",
      description: "create/update a page",
      help: \`path: path to the page
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
	butt3r page <path> [--directory <value>] [--component-name <value>] [--props <value>] [--import <value>] [--emmet <value>] [--ai-emmet <value>] [--ai-provider <value>] [--ai-model <value>] [--ai <value>] [--ai-example <value>] [--[no-]server] [--[no-]client] [--[no-]prettier] [--[no-]dry-run]\`,
      examples: [
        "butt3r page src/app/pages/Home --template page",
        "butt3r page src/app/pages/About --props title:string --emmet h1>title",
      ],
    },
    {
      command: "start",
      description: "start your stack",
      help: \`--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
--runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
--dev|--no-dev: start in dev mode
Usage :
	butt3r start [--containerd <value>] [--runner <value>] [--[no-]dev]\`,
      examples: [
        "butt3r start --containerd podman --runner yarn",
        "butt3r start --dev",
      ],
    },
    {
      command: "stop",
      description: "stop the stack",
      help: \`--containerd <containerd>: container runtime
--dev|--no-dev: running in dev
Usage :
	butt3r stop [--containerd <value>] [--[no-]dev]\`,
      examples: ["butt3r stop --containerd docker --dev", "butt3r stop"],
    },
    {
      command: "up",
      description: "initialize the stack for the first time",
      help: \`--containerd <containerd>: what container are you using [default: ' docker '] [one of 'docker' 'podman']
--runner <runner>: what js runtime is used [default: ' bun '] [one of 'bun' 'npm' 'yarn']
--dev|--no-dev: initialize in dev mode
Usage :
	butt3r up [--containerd <value>] [--runner <value>] [--[no-]dev]\`,
      examples: [
        "butt3r up --containerd docker --runner npm --dev",
        "butt3r up",
      ],
    },
    {
      command: "ts-edit",
      description: "'edit' typescript file",
      help: \`target: what to do [one of 'export-function' 'export-type' 'import' 'export-function']
Usage :
	butt3r ts-edit <target>\`,
      examples: [
        "butt3r ts-edit export-function --name getUser",
        "butt3r ts-edit import --from axios",
      ],
    },
    {
      command: "api-route",
      description: "create a new API route",
      help: \`name: route name
--methods <methods>: HTTP methods (GET,POST,PUT,DELETE), repeatable
--directory <directory>: subdirectory in src/app/api
--schema <schema>: input/output validation
Usage :
	butt3r api-route <name> [--methods <value>] [--directory <value>] [--schema <value>]\`,
      examples: [
        "butt3r api-route users --methods GET POST DELETE",
        "butt3r api-route login --methods POST --schema src/schemas/login",
      ],
    },
    {
      command: "test",
      description: "generate tests",
      help: \`type: type of test [one of 'unit' 'e2e']
target: component/page to test
--directory <directory>: test directory location
Usage :
	butt3r test <type> <target> [--directory <value>]\`,
      examples: [
        "butt3r test unit src/components/Button",
        "butt3r test e2e src/pages/Home --directory src/tests/e2e",
      ],
    },
    {
      command: "trpc",
      description: "create tRPC functionality",
      help: \`target: what to do [one of 'router' 'procedure' 'procedure' 'router']
Usage :
	butt3r trpc <target>\`,
      examples: [
        "butt3r trpc router --name user",
        "butt3r trpc procedure --name create",
      ],
    },
    {
      command: "type-schema",
      description: "generate type schema",
      help: \`type: type of schema [one of 'props' 'form' 'api']
target: target file
--props <props>: property definitions, repeatable
--form <form>: field definitions with validation, repeatable
--api <api>: input/output fields, repeatable
Usage :
	butt3r type-schema <type> <target> [--props <value>] [--form <value>] [--api <value>]\`,
      examples: [
        "butt3r type-schema props src/types/User --props id:int,name:string",
        "butt3r type-schema form src/schemas/Login --form email:string,password:string",
      ],
    },
  ];

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold">butt3r CLI Documentation</h1>
      <p className="text-gray-600">
        Welcome to the butt3r CLI documentation. Learn how to use the various
        commands to create, develop, and deploy your T3 stack projects.
      </p>
      <div>
        {commands.map((cmd) => (
          <div key={cmd.command} className="mb-6">
            <button
              onClick={() => toggleCommand(cmd.command)}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {cmd.command}
            </button>
            <p className="mt-2 text-gray-600">{cmd.description}</p>
            {activeCommand === cmd.command && (
              <div className="mt-4 space-y-4">
                <pre className="p-4 bg-gray-100 rounded text-sm">
                  {cmd.help}
                </pre>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Examples</h3>
                  {cmd.examples.map((example, index) => (
                    <pre key={index} className="p-2 bg-gray-50 rounded text-sm">
                      {example}
                    </pre>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`,
                  },
                },
                {
                  prompt:
                    "butt3r page docs --ai 'use the provided documentation to create a nice looking nextjs page containing all necessary informations about my CLI. For each command, I want a small description, the full help and a set of example. Do not just import the md, I want a full page \! \n#\!/cat documentation.md;' --ai-provider lmstudio --ai-model hermes-3-llama-3.2-3b",
                  output: {
                    content: `Extracted Code Blocks: 11
src/app/docs/page.tsx
import React from "react";

const Docs = () => {
  // Import and include the CLI documentation here

  return (
    <div className="container mx-auto text-center">
      <h1 class="text-4xl font-bold mt-8">ButT3r CLI Documentation</h1>
      <p class="mt-4 mb-8 text-gray-500">
        Find all necessary information about the ButT3r CLI here.
      </p>

      {/* TODO: Add documentation content */}
    </div>
  );
};

export default Docs;`,
                    delay: 3000,
                    placeholder: "# the AI <<magic>> is happening !",
                  },
                },
              ]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
