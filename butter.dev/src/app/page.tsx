"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import Link from "next/link";
import TerminalSimulator from "~/components/terminal-simulator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { T3Link } from "~/components/ui/t3-link";
import { Hero } from "~/components/home/hero";
import { DemoTerminal } from "~/components/home/demo-terminal";
import { CliForm } from "~/components/cli-form";
import { useState } from "react";

export default function HomePage() {
  const [terminalCommands, setTerminalCommands] = useState<{ prompt: string }[]>([]);

  const handleSubmit = (data: any, cmd: string) => {
    console.log(cmd);
    setTerminalCommands(prev => {
      const newCommands = [...prev, { prompt: `$ ${cmd}` }];
      console.log('Updating terminal commands:', newCommands);
      return newCommands;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#57aed1] to-[#2e026d] text-white">
      <Hero />
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-4">
        <section className="mx-auto grid grid-cols-1 items-center gap-8 px-4 py-8 pb-12 sm:px-1 md:py-8 lg:grid lg:gap-x-2 lg:px-3 lg:py-12 xl:grid-cols-2 xl:gap-x-6">
          <div className="mx-auto flex flex-col gap-2 md:gap-4 xl:max-w-full">
            <h2 className="mb-2 w-full text-3xl font-bold text-white md:text-5xl lg:text-5xl">
              But
              <T3Link />r removes friction!
            </h2>{" "}
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 md:text-xl lg:text-xl xl:text-xl">
              But
              <T3Link />r refined the extreme lubrication properties of bash, in
              order to offer you the But
              <T3Link />r way to create full-stack web app, Fast as a sausage on
              a well oiled pan !
            </p>{" "}
            <div className="mx-auto mt-4 max-w-3xl text-base text-gray-300 md:text-xl lg:text-xl xl:text-xl">
              After a 7 years{" "}
              <HoverCard>
                <HoverCardTrigger>professional</HoverCardTrigger>
                <HoverCardContent className="bg-gray-800 text-white">
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
              hiatus, I have lots of opinions and absolutly no insights ! So,
              I've done my best to steal others work and shove it into this CLI
              tool !
            </div>{" "}
            <div className="mx-auto mt-4 max-w-3xl text-base text-gray-300 md:text-xl lg:text-xl xl:text-xl">
              It is written in bash (arguably the most amazing programming
              language !) and most definitly the greatest{" "}
              <HoverCard>
                <HoverCardTrigger>
                  pure bash standalone argument parsing generator CLI tool :
                </HoverCardTrigger>
                <HoverCardContent className="bg-gray-800 text-white">
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
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 md:text-xl lg:text-xl xl:text-xl">
              The main goal is to work smar
              <T3Link />
              r, not harder ! Get to start your project in 10 seconds, and
              revolutionnize the WORLD (The same thing we do every night, Pinky
              ! tadatadatada tadatadatada ...)
            </p>{" "}
          </div>
          <div className="mx-auto flex flex-col gap-2 md:gap-4 xl:max-w-full">
            <DemoTerminal />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="mx-auto flex flex-col gap-2 md:gap-4 xl:max-w-full">
            <TerminalSimulator
              // @ts-ignore
              id="terminalophobia-therapist"
              startLine="# terminalophobic and other terminal-impared individuals rejoice !"
              defaultTypingRandom={75}
              defaultTypingSpeed={75}
              commands={[
                {
                  prompt: "# use the form on the right to create your CLI commands !",
                },
                ...terminalCommands
              ]}
            />
          </div>
          <div className="mx-auto flex flex-col gap-2 md:gap-4 xl:max-w-full">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="flex w-full flex-wrap justify-center gap-2 rounded-lg bg-white/10 p-2">
                <TabsTrigger
                  value="install"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  install
                </TabsTrigger>
                <TabsTrigger
                  value="create"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  create
                </TabsTrigger>
                <TabsTrigger
                  value="component"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  component
                </TabsTrigger>
                <TabsTrigger
                  value="page"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  page
                </TabsTrigger>
                <TabsTrigger
                  value="layout"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  layout
                </TabsTrigger>
                <TabsTrigger
                  value="up"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  up
                </TabsTrigger>
                <TabsTrigger
                  value="start"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  start
                </TabsTrigger>
                <TabsTrigger
                  value="stop"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  stop
                </TabsTrigger>
                <TabsTrigger
                  value="down"
                  className="rounded-md px-4 py-2 transition-colors hover:bg-white/10 data-[state=active]:bg-white/20 data-[state=active]:text-white"
                >
                  down
                </TabsTrigger>
              </TabsList>
              <TabsContent value="install">
                <CliForm
                  helpText={`Install butt3r:
  --shell-rc-file|--install-file <shell-rc-file>: where to put the source directive, repeatable [default: '( $HOME/.bashrc )']
  --comment|--no-comment: add parsearger comment, on by default (use --no-comment to turn it off)
  --install-dependencies|--no-install-dependencies: install dependencies, on by default (use --no-install-dependencies to turn it off)
          no-aliases: --no-deps,
`}
                  baseCmd="utils/install"
                  onSubmit={handleSubmit}
                />
              </TabsContent>
              <TabsContent value="create">
                <CliForm
                  helpText={`my go to project creator:
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
  --git|--no-git: init git, on by default (use --no-git to turn it off)`}
                  baseCmd="butt3r create"
                  onSubmit={handleSubmit}
                  columns={2}
                />
              </TabsContent>
              <TabsContent value="component"></TabsContent>
              <TabsContent value="page"></TabsContent>
              <TabsContent value="layout"></TabsContent>
              <TabsContent value="up"></TabsContent>
              <TabsContent value="start"></TabsContent>
              <TabsContent value="stop"></TabsContent>
              <TabsContent value="down"></TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </main>
  );
}
