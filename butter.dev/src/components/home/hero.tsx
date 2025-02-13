import { T3Link } from "../ui/t3-link";
import { GlowLink } from "../ui/glow-link";

export function Hero() {
  return (
    <div className="pt-8 lg:px-12">
      <div className="flex flex-col items-center">
        <div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-col items-start justify-between">
              <h1 className="text-center text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
                <div>
                  The But
                  <T3Link />r way to create your{" "}
                  <GlowLink
                    href="https://roadmap.sh/full-stack"
                    target="_blank"
                    color="hsl(120, 100%, 50%)"
                    className="text-[hsl(120,100%,50%)]"
                  >
                    full-stack,
                  </GlowLink>{" "}
                  <GlowLink
                    href="https://en.wikipedia.org/wiki/Type_safety"
                    target="_blank"
                    color="hsl(60, 100%, 50%)"
                    className="whitespace-nowrap text-[hsl(60,100%,50%)]"
                  >
                    typesafe,
                  </GlowLink>{" "}
                  <GlowLink
                    href="https://nextjs.org/docs"
                    target="_blank"
                    color="hsl(0, 100%, 60%)"
                    className="text-[hsl(0,100%,60%)]"
                  >
                    Next.js
                  </GlowLink>{" "}
                  App
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
