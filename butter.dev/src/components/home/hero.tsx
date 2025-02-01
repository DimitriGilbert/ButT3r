import Link from "next/link";

export function Hero() {
  return (
    <div className="lg:px-12 pt-8">
      <div className="flex flex-col items-center">
        <div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-col items-start justify-between">
              <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
                <div>
                  The But<span className="text-[hsl(280,100%,50%)]"><Link href="https://create.t3.gg" target="_blank">T3</Link></span>r way to create your{" "}
                  <span className="text-[hsl(120,100%,50%)]"><Link href="https://roadmap.sh/full-stack" target="_blank">full-stack,</Link></span>{" "}
                  <span className="whitespace-nowrap text-[hsl(60,100%,50%)]">
                    <Link href="https://en.wikipedia.org/wiki/Type_safety" target="_blank">typesafe,</Link>
                  </span>{" "}
                  <span className="text-[hsl(0,100%,60%)]"><Link href="https://nextjs.org/docs" target="_blank">Next.js</Link></span> App
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
