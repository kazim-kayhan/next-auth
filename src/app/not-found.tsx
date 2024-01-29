import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
      <main className="relative isolate min-h-full">
        <Image
          src="/404.png"
          alt="Find your way back home."
          width={1920}
          height={1080}
          className="absolute inset-0  -z-10 h-full w-full object-cover object-center"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-foreground">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base text-foreground/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <Link href="/" className={cn(buttonVariants({variant:"outline"}),'font-semibold gap-x-1')}>
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
  )
}
