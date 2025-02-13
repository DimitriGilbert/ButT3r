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
import { type FieldValues } from "react-hook-form";
import { FaCopy } from "react-icons/fa";
import { toast } from "sonner";

export default function HomePage() {
  const [terminalCommands, setTerminalCommands] = useState<
    { prompt: string }[]
  >([]);

  const handleSubmit = (data: FieldValues, cmd: string) => {
    setTerminalCommands((prev) => [...prev, { prompt: `${cmd}` }]);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(
        "curl -s https://raw.githubusercontent.com/DimitriGilbert/ButT3r/main/utils/get_Butt3r -O && chmod +x get_Butt3r && ./get_Butt3r --install"
      )
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard!");
      });
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
        <section>
          <pre className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 backdrop-blur-md">
            <code className="flex items-center gap-2 text-sm text-white">
              curl -s
              https://raw.githubusercontent.com/DimitriGilbert/ButT3r/main/utils/get_Butt3r
              -O && chmod +x get_Butt3r && ./get_Butt3r --install
            </code>
            <button
              onClick={handleCopy}
              className="absolute -right-2 -top-2 rounded-full border border-gray-700 bg-gray-800/50 p-2 opacity-40 backdrop-blur-md transition-opacity hover:bg-gray-700/50 group-hover:opacity-100"
            >
              <FaCopy className="text-white" />
            </button>
          </pre>
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
              , I have lots of opinions and absolutly no insights ! So,
              I&lsquo;ve done my best to steal others work&apos;s and shove it
              into this CLI tool !
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
                target="_blank"
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
                  <GlowLink href="https://create.t3.gg" target="_blank">
                    create-t3-app
                  </GlowLink>{" "}
                  with a set of default you can override ! As well as install
                  your dependencies !
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
                    target="_blank"
                  >
                    ANYTHING ! (let&apos;s say nsfw ^^)
                  </Link>
                </HoverCardContent>
              </HoverCard>
              , you&lsquo;ll be happy to learn that, <Butt3r /> also comes with
              AI !
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
                  <span className="font-mono text-blue-900 dark:text-purple-400">
                    --ai &ldquo;a description for the stuff you want to
                    create&ldquo;
                  </span>{" "}
                  when creating a new component, page or layout.{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    Remember, output is only as good as the prompt!
                  </span>
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-green-400">
                    &ldquo;Instant&ldquo; AI code!
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
                    Really..., how infuriating is that ? ^^&apos;
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
