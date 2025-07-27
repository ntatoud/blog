import { Download, Mail } from 'lucide-react';

import { BearStudio } from '@/components/icons/brands/bearstudio';
import { Button } from '@/components/ui/button';
import { HighlightedText } from '@/components/ui/highlighted-text';
import { Link } from '@/components/ui/link';

export function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-1 rounded-full border ps-3 px-2 py-1 text-sm transition"
            href="https://www.bearstudio.fr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="relative flex size-3 me-1">
              <span className="absolute inline-flex h-full w-full animate-ping delay-1000 rounded-full bg-accent-foreground opacity-75 duration-[2000ms]"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-foreground"></span>
            </span>
            Currently working at Bearstudio
            <BearStudio className="size-4" />
          </a>
        </div>

        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="font-head scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Hello! I'm Noé Tatoud
          </h1>
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <p className="text-muted-foreground text-xl">
            Full-stack <HighlightedText>web developer</HighlightedText> with a
            passion for crafting sleek web experiences.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="mailto:noe.tatoud@gmail.com" size="lg">
            <Mail /> Contact me
          </Link>
          <Button size="lg" variant="outline">
            <Download /> My Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
