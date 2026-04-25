import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Importacion() {
  useDocumentMeta(
    "Importación — Puffin S.R.L.",
    "Importación global de maquinaria pesada, repuestos y cubiertas para sectores agroindustrial, vial y minero. Logística internacional puerta a puerta.",
  );
  return (
    <>
      <PageHeader
        eyebrow="Importación Global"
        title="Importación de maquinaria, repuestos y cubiertas para sectores estratégicos."
        subtitle="Gestionamos procesos de importación internacional para los sectores agroindustrial, vial y automotriz, integrando logística, trazabilidad y respaldo técnico."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { t: "Maquinaria", d: "Equipos agrícolas, viales y especializados, nuevos y usados certificados." },
              { t: "Repuestos e Insumos", d: "Componentes para maquinaria agrícola, repuestos industriales y línea automotriz." },
              { t: "Cubiertas", d: "Agrícolas, viales y para transporte pesado." },
            ].map((c) => (
              <div key={c.t} className="p-6 rounded-xl border border-border bg-card">
                <div className="text-xs uppercase tracking-wider text-primary mb-2">Línea</div>
                <div className="font-semibold text-lg">{c.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
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
              Estamos preparando el listado de productos disponibles. Si necesitás información sobre maquinaria, repuestos o cubiertas, contactanos y te respondemos a la brevedad.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-xs font-bold tracking-wider hover:bg-primary/90 transition-colors"
            >
              CONSULTAR DISPONIBILIDAD <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
