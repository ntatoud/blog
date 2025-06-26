import { ChevronRight, Download, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition"
            href="#"
          >
            Check out my latest work
            <span className="bg-muted-foreground/15 inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold">
              <ChevronRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="font-head scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello! I'm Noé Tatoud
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-muted-foreground text-xl">
            Full-stack{' '}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-green-600 -z-10">
              <span className="relative text-white">web developer</span>
            </span>{' '}
            with a passion for crafting sleek web experiences.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg">
            <Mail /> Contact me
          </Button>
          <Button size="lg" variant="outline">
            <Download /> My Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
