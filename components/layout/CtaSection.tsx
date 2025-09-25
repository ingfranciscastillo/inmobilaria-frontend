import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Más de 10 años conectando familias con su hogar ideal
          </h2>
          <p className="mt-4">
            Descubre por qué cientos de clientes confían en nosotros para
            comprar, vender o alquilar en la República Dominicana.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Buscar Propiedades</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Contáctanos</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
