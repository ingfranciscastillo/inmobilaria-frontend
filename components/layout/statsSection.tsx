export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Nuestra trayectoria en números
          </h2>
          <p>
            Más que una inmobiliaria, somos un equipo comprometido en ayudarte a
            encontrar el lugar ideal en la República Dominicana.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+500</div>
            <p>Propiedades disponibles en todo el país</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+300</div>
            <p>Clientes satisfechos que ya encontraron su hogar</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+10 Años</div>
            <p>De experiencia en el mercado inmobiliario</p>
          </div>
        </div>
      </div>
    </section>
  );
}
