import { Check } from "lucide-react";
import { allServices } from "@/lib/data";
import { Link } from "wouter";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Servicios() {
  useDocumentMeta(
    "Servicios — Puffin S.R.L.",
    "Líneas de servicio de Puffin S.R.L.: agroindustriales, viales, ambientales y aéreos. Soluciones operativas para proyectos de gran escala.",
  );
  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          {allServices.map((s, idx) => (
            <div
              key={s.title}
              className="grid lg:grid-cols-12 gap-10 items-start"
            >
              <div className="lg:col-span-4">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  0{idx + 1} · Línea de servicio
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                  {s.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {s.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-5 rounded-lg border border-border bg-card hover-elevate"
                    >
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <div className="text-sm leading-relaxed">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Solicite una propuesta operativa a medida.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Coordinamos visitas técnicas, presupuestos y planes de trabajo según
            las necesidades de cada proyecto.
          </p>
          <Link href="/contacto" className="mt-6 inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Contactar área comercial
            </Link>
        </div>
      </section>
    </>
  );
}
