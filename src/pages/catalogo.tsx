import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { catalogo } from "@/lib/catalogo";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const categorias = ["Todos", "Maquinaria Agrícola", "Maquinaria Vial", "Cubiertas", "Aeronaves"] as const;
type Cat = (typeof categorias)[number];

export default function Catalogo() {
  useDocumentMeta(
    "Catálogo — Puffin S.R.L.",
    "Catálogo de maquinaria agrícola y vial, cubiertas y aeronaves disponibles para importación, exportación y servicio.",
  );
  const [cat, setCat] = useState<Cat>("Todos");
  const items = useMemo(
    () => (cat === "Todos" ? catalogo : catalogo.filter((p) => p.categoria === cat)),
    [cat],
  );

  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title="Productos disponibles para importación y exportación."
        subtitle="Maquinaria agrícola y vial, cubiertas, aeronaves y repuestos. Todos nuestros equipos cuentan con respaldo técnico y trazabilidad de origen."
      />

      <section className="py-12 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider border transition-colors ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-primary hover:border-accent"
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((p) => (
              <article key={p.id} className="bg-white rounded-lg border border-border overflow-hidden flex flex-col hover-elevate">
                <div className="aspect-[4/3] bg-secondary overflow-hidden">
                  <img src={p.imagen} alt={p.nombre} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1.5">
                    {p.categoria}
                  </span>
                  <h3 className="font-bold text-primary text-base leading-snug mb-3">{p.nombre}</h3>
                  <dl className="text-xs text-muted-foreground space-y-1.5 mb-4 flex-1">
                    {p.ano && (
                      <div>
                        <span className="font-semibold text-primary">Año:</span> {p.ano} |{" "}
                        <span className="font-semibold text-primary">Estado:</span> {p.estado}
                      </div>
                    )}
                    {p.medida && (
                      <div>
                        <span className="font-semibold text-primary">Medida:</span> {p.medida} |{" "}
                        <span className="font-semibold text-primary">Estado:</span> {p.estado}
                      </div>
                    )}
                    {p.origen && (
                      <div>
                        <span className="font-semibold text-primary">Origen:</span> {p.origen}
                      </div>
                    )}
                    {p.motor && (
                      <div>
                        <span className="font-semibold text-primary">Motor:</span> {p.motor}
                      </div>
                    )}
                    {p.detalles && (
                      <ul className="pl-3 list-disc space-y-0.5 marker:text-accent">
                        {p.detalles.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </dl>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-accent text-accent-foreground text-[10px] font-bold tracking-wider hover:bg-accent/90 transition-colors"
                  >
                    SOLICITAR COTIZACIÓN <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
