import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "María González",
    username: "@maria.g",
    body: "Excelente servicio. Me ayudaron a encontrar un apartamento en Santo Domingo en menos de una semana. Súper profesionales.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Pedro Ramírez",
    username: "@pedro.r",
    body: "Gracias a esta inmobiliaria pude vender mi casa en Santiago rápido y sin complicaciones. 100% recomendados.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Laura Fernández",
    username: "@laura.f",
    body: "Muy buena atención y acompañamiento en todo el proceso de alquiler. Encontré justo lo que buscaba en Punta Cana.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Carlos Martínez",
    username: "@carlos.m",
    body: "Lo que más me gustó fue la transparencia y la seguridad en cada paso de la compra de mi apartamento en el DN.",
    img: "https://i.pravatar.cc/150?img=27",
  },
  {
    name: "Ana Rodríguez",
    username: "@ana.r",
    body: "Me guiaron en todo el proceso para adquirir mi primera vivienda. Estoy feliz con mi nuevo hogar en La Romana.",
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "José Castillo",
    username: "@jose.c",
    body: "Muy confiables. Gracias a ellos pude invertir en un terreno en Bávaro con todas las facilidades.",
    img: "https://i.pravatar.cc/150?img=54",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
