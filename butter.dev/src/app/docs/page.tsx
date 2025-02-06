"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search, ChevronRight } from "lucide-react";
import commandsData from "./commands.json";
import examplesData from "./example.json";
import { CliForm } from "~/components/cli-form";
import { toast } from "sonner";

export default function Docs() {
  const [activeCommand, setActiveCommand] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Deduplicate commands first
  const uniqueCommands = Array.from(new Map(commandsData.map(cmd => [cmd.command, cmd])).values());

  // Merge commands and examples data
  const commands = uniqueCommands.map(cmd => {
    const example = examplesData.find(ex => ex.command === cmd.command);
    return {
      ...cmd,
      examples: example ? example.examples : []
    };
  });

  const filteredCommands = commands.filter((cmd) =>
    cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 pt-12 top-12 max-w-7xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">butt3r CLI Documentation</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to the butt3r CLI documentation. Learn how to use the various
          commands to create, develop, and deploy your T3 stack projects.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 bg-white/60 dark:bg-gray-800/90">
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
                <div key={cmd.command} className="border rounded-lg overflow-hidden bg-white/60 dark:bg-gray-800/90">
                  <button
                    onClick={() => setActiveCommand(cmd.command)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/40 dark:hover:bg-gray-700/90 transition-colors"
                  >
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        <span className="font-mono text-blue-600 dark:text-blue-400 mr-2">$</span>
                        {cmd.command}
                      </h2>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">{cmd.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              ))
            )}
          </div>

          {activeCommand && (
            <div className="hidden lg:block">
              {(() => {
                const cmd = commands.find(c => c.command === activeCommand);
                if (!cmd) return null;
                return (
                  <div className="sticky top-12 overflow-y-auto max-h-[calc(100vh-5rem)]">
                    <div className="border rounded-lg overflow-hidden bg-white/60 dark:bg-gray-800/90 p-6 space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        <span className="font-mono text-blue-600 dark:text-blue-400 mr-2">$</span>
                        {cmd.command}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300">{cmd.description}</p>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Usage</h3>
                        <pre className="p-4 bg-white/40 dark:bg-gray-700/90 rounded-md text-sm font-mono text-gray-900 dark:text-gray-200 overflow-x-auto">
                          {cmd.help}
                        </pre>
                      </div>
                      
                      {cmd.examples.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Examples</h3>
                          <div className="space-y-2">
                            {cmd.examples.map((example, index) => (
                              <div key={index} className="p-3 bg-white/40 dark:bg-gray-700/90 rounded-md">
                                <pre className="text-sm font-mono text-gray-900 dark:text-gray-200">
                                  {example}
                                </pre>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Add CLI Form */}
                      {cmd.help && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Command Builder</h3>
                          <CliForm
                            helpText={cmd.help}
                            baseCmd={cmd.command}
                            onSubmit={(data, command) => {
                              // console.log('Generated command:', command);
                              navigator.clipboard.writeText(command);
                              toast.success("Copied to clipboard", {
                                duration: 1000,
                              });
                            }}
                            columns={1}
                            fieldClassName="bg-white/40 dark:bg-gray-700/90"
                          />
                        </div>
                      )}
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