"use client";

import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import commandsData from "./commands.json";
import examplesData from "./example.json";
import { CliForm } from "~/components/cli-form";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Docs() {
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Deduplicate commands first
  const uniqueCommands = Array.from(
    new Map(commandsData.map((cmd) => [cmd.command, cmd])).values(),
  );

  // Merge commands and examples data
  const commands = uniqueCommands.map((cmd) => {
    const example = examplesData.find((ex) => ex.command === cmd.command);
    return {
      ...cmd,
      examples: example ? example.examples : [],
    };
  });

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="top-12 mx-auto max-w-7xl space-y-8 p-8 pt-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          butt3r CLI Documentation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the butt3r CLI documentation. Learn how to use the various
          commands to create, develop, and deploy your T3 stack projects.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center rounded-lg border bg-white/60 px-3 dark:bg-gray-800/90">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            placeholder="Search commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="space-y-2">
            {filteredCommands.length === 0 ? (
              <div className="py-6 text-center text-sm text-gray-600 dark:text-gray-300">
                No commands found.
              </div>
            ) : (
              filteredCommands.map((cmd) => (
                <div
                  key={cmd.command}
                  className="overflow-hidden rounded-lg border bg-white/60 dark:bg-gray-800/90"
                >
                  <button
                    onClick={() => setActiveCommand(cmd.command)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/40 dark:hover:bg-gray-700/90"
                  >
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        <span className="mr-2 font-mono text-blue-600 dark:text-blue-400">
                          $
                        </span>
                        {cmd.command}
                      </h2>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">
                        {cmd.description}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              ))
            )}
          </div>

          {activeCommand && (
            <div className="hidden lg:block">
              {(() => {
                const cmd = commands.find((c) => c.command === activeCommand);
                if (!cmd) return null;
                return (
                  <div className="sticky top-12 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    <div className="space-y-6 overflow-hidden rounded-lg border bg-white/60 p-6 dark:bg-gray-800/90">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        <span className="mr-2 font-mono text-blue-600 dark:text-blue-400">
                          $
                        </span>
                        {cmd.command}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        {cmd.description}
                      </p>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="usage">
                          <AccordionTrigger>
                            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                              Usage
                            </h3>
                          </AccordionTrigger>
                          <AccordionContent>
                            <pre className="overflow-x-auto rounded-md bg-white/40 p-4 font-mono text-sm text-gray-900 dark:bg-gray-700/90 dark:text-gray-200">
                              {cmd.help}
                            </pre>
                          </AccordionContent>
                        </AccordionItem>

                        {cmd.examples.length > 0 && (
                          <AccordionItem value="examples">
                            <AccordionTrigger>
                              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                Examples
                              </h3>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2">
                                {cmd.examples.map((example, index) => (
                                  <div
                                    key={index}
                                    className="rounded-md bg-white/40 p-3 dark:bg-gray-700/90"
                                  >
                                    <pre className="font-mono text-sm text-gray-900 dark:text-gray-200">
                                      {example}
                                    </pre>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )}

                        {/* Add CLI Form */}
                        {cmd.help && (
                          <AccordionItem value="builder">
                            <AccordionTrigger>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Command Builder
                              </h3>
                            </AccordionTrigger>
                            <AccordionContent>
                              <CliForm
                                helpText={cmd.help}
                                baseCmd={cmd.command}
                                onSubmit={(data, command) => {
                                  // console.log('Generated command:', command);
                                  navigator.clipboard.writeText(command).then(() => {
                                    toast.success("Copied to clipboard", {
                                      duration: 1000,
                                    });
                                  }).catch(() => {
                                    toast.error("Failed to copy to clipboard");
                                  });
                                }}
                                columns={1}
                                fieldClassName="bg-white/40 dark:bg-gray-700/90"
                              />
                            </AccordionContent>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
