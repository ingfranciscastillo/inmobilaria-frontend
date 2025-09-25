import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Contáctanos
        </h1>
        <p className="mt-4 text-center">
          Estamos aquí para ayudarte a encontrar, comprar o alquilar la
          propiedad ideal en la República Dominicana.
        </p>

        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <div>
            <h2 className="text-xl font-semibold">
              Hablemos de tu próximo hogar
            </h2>
            <p className="mt-4 text-sm">
              Cuéntanos tus necesidades y nuestro equipo te asesorará para
              encontrar la mejor propiedad, proyecto o inversión.
            </p>
          </div>

          <form
            action=""
            className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Nombre completo</Label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="country">Ciudad / Región</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country/Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">DR Congo</SelectItem>
                  <SelectItem value="2">United States</SelectItem>
                  <SelectItem value="3">France</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="job">Tipo de propiedad / Interés</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de propiedad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Compra</SelectItem>
                  <SelectItem value="2">venta</SelectItem>
                  <SelectItem value="3">alquiler</SelectItem>
                  <SelectItem value="4">inversión</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="msg">Mensaje</Label>
              <Textarea
                id="msg"
                rows={3}
                placeholder="Cuéntanos más sobre lo que buscas"
              />
            </div>

            <Button>Enviar mensaje</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
