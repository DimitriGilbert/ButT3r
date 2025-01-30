import { useState, useEffect, useRef } from "react";

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
  const [isRunning, setIsRunning] = useState(false);
  const processingRef = useRef(false);
  const displayLengthRef = useRef(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const userScrolledRef = useRef(false);

  // Auto-scroll logic
  useEffect(() => {
    if (terminalRef.current && !userScrolledRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [display]);

  // Handle scroll events
  const handleScroll = () => {
    if (!terminalRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = terminalRef.current;
    const isScrolledToBottom = scrollHeight - scrollTop === clientHeight;

    // Only mark as user scrolled if they scroll up while content is still being added
    if (!isScrolledToBottom && isRunning) {
      userScrolledRef.current = true;
    }

    // Reset when user scrolls back to bottom
    if (isScrolledToBottom) {
      userScrolledRef.current = false;
    }
  };

  // Sync display length with ref
  useEffect(() => {
    displayLengthRef.current = display.length;
  }, [display]);

  const processCommands = async () => {
    processingRef.current = true;
    setIsRunning(true);

    for (const cmd of commands) {
      // Add delay before next command (except first)
      if (displayLengthRef.current > 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Type command prompt
      let promptDisplay = "";
      setDisplay((prev) => [
        ...prev,
        { type: "command", content: "", done: false },
      ]);

      for (const char of cmd.prompt) {
        promptDisplay += char;
        setDisplay((prev) => {
          const newDisplay = [...prev];
          newDisplay[newDisplay.length - 1] = {
            type: "command",
            content: promptDisplay,
            done: false,
          };
          return newDisplay;
        });

        // Calculate random delay
        const baseSpeed = cmd.typingSpeed || defaultTypingSpeed;
        const randomFactor = cmd.typingRandom || 0; // Percentage (0-100)
        const randomVariation = Math.random() * (baseSpeed * (randomFactor / 100));
        const delay = baseSpeed + (Math.random() > 0.5 ? randomVariation : -randomVariation);

        await new Promise((resolve) => setTimeout(resolve, Math.max(10, delay)));
      }

      // Mark prompt as done
      setDisplay((prev) => {
        const newDisplay = [...prev];
        newDisplay[newDisplay.length - 1] = {
          type: "command",
          content: cmd.prompt,
          done: true,
        };
        return newDisplay;
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
              displayLengthRef.current += 1;
            } else {
              const currentLength = displayLengthRef.current;

              // Add initial output entry with placeholder if it exists
              setDisplay((prev) => [
                ...prev,
                {
                  type: "output",
                  content: line.placeholder || "",
                },
              ]);
              displayLengthRef.current += 1;

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
    }

    processingRef.current = false;
    setIsRunning(false);
  };

  useEffect(() => {
    if (autoStart && !processingRef.current) {
      processCommands();
    }
  }, [autoStart, commands]);

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
        className={`${height} overflow-y-auto p-5 text-[#00ff00]`}
      >
        {display.map((entry, index) => (
          <div key={index} className="my-1">
            {entry.type === "command" && (
              <div className="flex">
                <span className="mr-2 text-[#00ff00]">{termPrompt}</span>
                <span
                  className={`${!entry.done ? "animate-blink border-r-2 border-[#00ff00]" : ""}`}
                >
                  {entry.content}
                </span>
              </div>
            )}
            {entry.type === "output" && (
              <div className="ml-6 whitespace-pre-wrap text-white">
                {entry.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
