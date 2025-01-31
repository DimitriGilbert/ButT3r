import { useState, useEffect, useRef, useCallback } from "react";

type OutputContent = {
  delay?: number;
  placeholder?: string | React.ReactNode;
  content: string | React.ReactNode;
};

interface DisplayEntry {
  type: "command" | "output";
  content: string | React.ReactNode;
  done?: boolean;
}

interface TerminalSimulatorProps {
  commands: {
    prompt: string;
    output?: string | string[] | OutputContent | OutputContent[];
    typingSpeed?: number;
    typingRandom?: number;
    outputSpeeds?: number[];
  }[];
  defaultTypingSpeed?: number;
  defaultTypingRandom?: number;
  defaultOutputSpeed?: number;
  autoStart?: boolean;
  width?: string; // Tailwind width class
  height?: string; // Tailwind height class
  termPrompt?: string | React.ReactNode;
  startLine?: string | React.ReactNode;
}

export default function TerminalSimulator({
  commands = [],
  defaultTypingSpeed = 50,
  defaultOutputSpeed = 30,
  autoStart = true,
  width = "w-full max-w-[800px]", // Default width
  height = "min-h-[300px] max-h-[500px]", // Default height
  termPrompt = "$ ",
  startLine = "__________", // Default start line
  defaultTypingRandom = 20,
}: TerminalSimulatorProps) {
  const [display, setDisplay] = useState<DisplayEntry[]>([
    { type: "output", content: startLine },
  ]);
  const processingRef = useRef(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const userScrolledRef = useRef(false);
  const commandIndexRef = useRef(0);

  // Auto-scroll logic
  useEffect(() => {
    if (terminalRef.current && !userScrolledRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [display]);

  const handleScroll = useCallback(() => {
    if (!terminalRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = terminalRef.current;
    const isScrolledToBottom = scrollHeight - scrollTop === clientHeight;

    if (!isScrolledToBottom) {
      userScrolledRef.current = true;
    } else {
      userScrolledRef.current = false;
    }
  }, []);

  const processCommand = useCallback(async (cmd: typeof commands[number] | undefined) => {
    if (!cmd) return;

    // Add delay before next command (except first)
    if (commandIndexRef.current > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Add the command prompt line
    setDisplay((prev) => [
      ...prev,
      { type: "command", content: "", done: false },
    ]);

    // Type the command
    const trimmedPrompt = cmd.prompt.trim();
    for (const char of trimmedPrompt) {
      setDisplay((prev) => {
        const lastEntry = prev[prev.length - 1];
        if (lastEntry?.type === "command") {
          return [
            ...prev.slice(0, -1),
            {
              ...lastEntry,
              content: lastEntry.content + char,
              type: "command",
            },
          ];
        }
        return prev;
      });

      const baseSpeed = cmd.typingSpeed || defaultTypingSpeed;
      const randomFactor = cmd.typingRandom || 0;
      const randomVariation = Math.random() * (baseSpeed * (randomFactor / 100));
      const delay = baseSpeed + (Math.random() > 0.5 ? randomVariation : -randomVariation);

      await new Promise((resolve) => setTimeout(resolve, Math.max(10, delay)));
    }

    // Mark the command as done
    setDisplay((prev) => {
      const lastEntry = prev[prev.length - 1];
      if (lastEntry?.type === "command") {
        return [
          ...prev.slice(0, -1),
          {
            ...lastEntry,
            done: true,
            type: "command",
          },
        ];
      }
      return prev;
    });

    // Process outputs
    if (cmd.output) {
      const outputs = Array.isArray(cmd.output) ? cmd.output : [cmd.output];
      for (const line of outputs) {
        if (line) {
          await new Promise((resolve) =>
            setTimeout(resolve, defaultOutputSpeed),
          );

          if (typeof line === "string") {
            setDisplay((prev) => [
              ...prev,
              { type: "output", content: line },
            ]);
          } else {
            const currentLength = display.length;

            // Add initial output entry with placeholder if it exists
            setDisplay((prev) => [
              ...prev,
              {
                type: "output",
                content: line.placeholder || "",
              },
            ]);

            // If there's a delay, wait before showing the final content
            if (line.delay) {
              await new Promise((resolve) => setTimeout(resolve, line.delay));
            }

            // Update output entry with final content
            setDisplay((prev) => {
              if (prev.length > currentLength) {
                const newDisplay = [...prev];
                newDisplay[currentLength] = {
                  type: "output",
                  content: line.content,
                };
                return newDisplay;
              }
              return prev;
            });
          }
        }
      }
    }

    commandIndexRef.current += 1;
  }, [defaultOutputSpeed, defaultTypingSpeed, defaultTypingRandom]);

  useEffect(() => {
    if (!autoStart || processingRef.current) return;

    const processCommands = async () => {
      processingRef.current = true;
      while (commandIndexRef.current < commands.length) {
        await processCommand(commands[commandIndexRef.current]);
      }
      processingRef.current = false;
    };

    processCommands();
  }, [commands, autoStart, processCommand]);

  return (
    <div
      className={`mx-auto my-5 ${width} overflow-hidden rounded-lg bg-[#1a1a1a] font-mono`}
    >
      <div className="flex items-center bg-[#333] p-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        </div>
      </div>
      <div
        ref={terminalRef}
        onScroll={handleScroll}
        className={`${height} overflow-y-auto p-5 text-[#00ff00] whitespace-pre-wrap break-words`}
      >
        {display.map((entry, index) => (
          <div key={index} className="my-1">
            {entry.type === "command" && (
              <div className="flex">
                <span className="mr-2 text-[#00ff00]">{termPrompt}</span>
                <span
                  className={`${!entry.done ? "animate-blink border-r-2 border-[#00ff00]" : ""} break-all cursor-pointer hover:bg-[#333] rounded px-1`}
                  onClick={() => {
                    if (entry.done && typeof entry.content === 'string') {
                      navigator.clipboard.writeText(entry.content);
                    }
                  }}
                >
                  {entry.content}
                </span>
              </div>
            )}
            {entry.type === "output" && (
              <div className="ml-6 whitespace-pre-wrap break-all text-white">
                {entry.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}