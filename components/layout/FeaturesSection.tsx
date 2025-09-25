import {
  Home,
  MapPin,
  Handshake,
  ShieldCheck,
  PhoneCall,
  Sparkles,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <p>
            Te ofrecemos un servicio inmobiliario en toda la República
            Dominicana con transparencia, acompañamiento y resultados reales.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Home className="size-4" />
              <h3 className="text-sm font-medium">Variedad de Propiedades</h3>
            </div>
            <p className="text-sm">
              Apartamentos, casas, terrenos y proyectos en las mejores zonas de
              RD.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <h3 className="text-sm font-medium">Ubicaciones Estratégicas</h3>
            </div>
            <p className="text-sm">
              Santo Domingo, Punta Cana, Santiago, La Romana y más.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Handshake className="size-4" />

              <h3 className="text-sm font-medium">Asesoría Personalizada</h3>
            </div>
            <p className="text-sm">
              Te guiamos paso a paso en la compra, venta o alquiler de tu
              propiedad.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4" />

              <h3 className="text-sm font-medium">Transacciones Seguras</h3>
            </div>
            <p className="text-sm">
              Garantizamos procesos legales y transparentes en cada operación.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PhoneCall className="size-4" />

              <h3 className="text-sm font-medium">Atención Rápida</h3>
            </div>
            <p className="text-sm">
              Siempre disponibles para responder tus preguntas y coordinar
              visitas.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Oportunidades Únicas</h3>
            </div>
            <p className="text-sm">
              Accede a proyectos exclusivos y opciones de inversión en el
              Caribe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
