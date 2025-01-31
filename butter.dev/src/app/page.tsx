"use client";

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
import { useState } from "react";
import { Clickodrome } from "~/components/clickodrome";

export default function HomePage() {
  const [terminalCommands, setTerminalCommands] = useState<{ prompt: string }[]>([]);
  const [demoTerminalKey, setDemoTerminalKey] = useState(Date.now());

  const handleSubmit = (data: any, cmd: string) => {
    setTerminalCommands(prev => [...prev, { prompt: `${cmd}` }]);
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
              startLine="# terminalophobic and other terminal-impared individuals rejoice !"
              defaultTypingRandom={250}
              defaultTypingSpeed={10}
              commands={[
                {
                  prompt: "# use the form on the right to create your CLI commands !",
                },
                ...terminalCommands
              ]}
            />
          </div>
          <div className="mx-auto flex flex-col gap-2 md:gap-4 xl:max-w-full">
            <Clickodrome onSubmit={handleSubmit} />
          </div>
        </section>
      </div>
    </main>
  );
}
