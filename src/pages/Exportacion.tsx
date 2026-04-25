import { Link } from "wouter";
import { ArrowRight, Clock, Globe2, Package, Wrench } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { exportaciones } from "@/lib/data";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Exportacion() {
  useDocumentMeta(
    "Exportación — Puffin S.R.L.",
    "Exportación de productos agroindustriales, maquinaria y servicios desde Argentina hacia mercados internacionales con estándares de calidad globales.",
  );
  const servicios = exportaciones.filter((e) => e.categoria === "Servicios");

  return (
    <>
      <PageHeader
        eyebrow="Exportación Internacional · Comercio Exterior"
        title="Conectamos oferta local con demanda internacional."
        subtitle="Facilitamos la exportación de productos, equipos y servicios técnicos hacia mercados internacionales, articulando logística, documentación y respaldo operativo."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                <Package size={20} />
              </div>
              <h2 className="text-2xl font-semibold">Productos</h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <Clock size={26} />
              </div>
              <span className="block text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-3">
                Próximamente
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3">
                Catálogo en actualización
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                Estamos preparando el listado de productos disponibles para exportación. Para consultas comerciales, contactanos y te respondemos a la brevedad.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-xs font-bold tracking-wider hover:bg-primary/90 transition-colors"
              >
                CONTACTAR ÁREA COMERCIAL <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="h-12" />
          <Bloque
            icon={<Wrench size={20} />}
            titulo="Servicios"
            items={servicios}
          />
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Globe2 className="mx-auto text-primary mb-4" size={36} />
          <h2 className="text-2xl md:text-3xl font-semibold">
            Acceso a mercados estratégicos.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Operamos con foco en Latinoamérica, Mercosur, mercados europeos y
            asiáticos, adaptando la oferta a cada destino.
          </p>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Contactar área comercial <ArrowRight size={16} />
            </Link>
        </div>
      </section>
    </>
  );
}

function Bloque({
  icon,
  titulo,
  items,
}: {
  icon: React.ReactNode;
  titulo: string;
  items: typeof exportaciones;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold">{titulo}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((e) => (
          <article
            key={e.tipo}
            className="p-6 rounded-xl border border-border bg-card hover-elevate"
          >
            <h3 className="font-semibold text-lg leading-snug">{e.tipo}</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Row label="Aplicación" value={e.aplicacion} />
              <Row label="Capacidad" value={e.capacidad} />
              <Row label="Mercados destino" value={e.mercados} full />
            </div>
            <div className="mt-5 pt-5 border-t border-border">
              <Link href="/contacto" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                  Contactar área comercial <ArrowRight size={14} />
                </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-foreground/90 leading-relaxed">{value}</div>
    </div>
  );
}
