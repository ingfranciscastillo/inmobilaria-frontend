import { ChevronRight, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import TeamSection from "./TeamSection";

export default function AboutSection() {
  return (
    <>
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              The Lyra ecosystem brings together our models, products and
              platforms.
            </h2>
            <p>
              Lyra is evolving to be more than just the models. It supports an
              entire ecosystem — from products to the APIs and platforms helping
              developers and businesses innovate.
            </p>
          </div>
          <img
            className="rounded-(--radius) grayscale"
            src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team image"
            height=""
            width=""
            loading="lazy"
          />

          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                <h3 className="text-sm font-medium">Faaast</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                It supports an entire helping developers and innovate.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-medium">Powerful</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                It supports an entire helping developers and businesses.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="size-4" />
                <h3 className="text-sm font-medium">Security</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                It supports an helping developers businesses innovate.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4" />

                <h3 className="text-sm font-medium">AI Powered</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                It supports an helping developers businesses innovate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium">
              The Lyra ecosystem brings together our models, products and
              platforms.
            </h2>
            <div className="space-y-6">
              <p>
                Lyra is evolving to be more than just the models. It supports an
                entire ecosystem — from products to the APIs and platforms
                helping developers and businesses innovate.
              </p>
              <p>
                Tailark.{" "}
                <span className="font-bold">
                  It supports an entire ecosystem
                </span>{" "}
                — from products innovate. Sit minus, quod debitis autem quia
                aspernatur delectus impedit modi, neque non id ad dignissimos?
                Saepe deleniti perferendis beatae.
              </p>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="gap-1 pr-1.5"
              >
                <Link href="#">
                  <span>Learn More</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </>
  );
}
