import Globe from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";
import { CiStreamOn } from "react-icons/ci";

export function StreamMusic() {
  return (
    <>
      <div className="flex flex-col items-center space-y-8">
        <div className="relative flex max-w-[80rem] items-center justify-center overflow-hidden rounded-lg border bg-white px-20 pb-20 pt-8 md:pb-40 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Stream Across Globe
          </span>
          <Globe className="absolute top-28 w-1/3 h-auto" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        <div>
          <Button>
            Start a Stream <CiStreamOn className="ml-3 text-3xl" />
          </Button>
        </div>
      </div>
    </>
  )
}