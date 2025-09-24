import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";

export const HeroSection = () => (
  <>
    <HeroHeader />
    <header className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                This is the start of something!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <img src="/hero/hero3.jpg" alt="hero-image" className="object-fill" />
        </div>
      </div>
    </header>
  </>
);
