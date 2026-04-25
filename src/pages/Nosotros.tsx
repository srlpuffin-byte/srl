import { Link } from "wouter";
import {
  Layers,
  Network,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { sectores } from "@/lib/data";
import { useDocumentMeta } from "@/hooks/use-document-meta";

export default function Nosotros() {
  useDocumentMeta(
    "Nosotros — Puffin S.R.L.",
    "Puffin S.R.L. presta servicios integrales en los sectores agroindustrial, vial y ambiental, combinando experiencia operativa, tecnología y alcance internacional.",
  );
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Una empresa construida para operar a escala."
        subtitle={<><span className="notranslate" translate="no">PUFFIN S.R.L.</span> presta servicios integrales en los sectores agroindustrial, vial y ambiental, combinando experiencia operativa, tecnología y alcance internacional.</>}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Quiénes somos
            </div>
            <h2 className="text-3xl font-semibold tracking-tight leading-tight">
              Operamos con criterios internacionales, en proyectos de gran
              escala.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nuestra estructura está diseñada para integrar tres frentes
                críticos: trabajo de campo y obra, logística asociada y comercio
                exterior. Esa integración nos permite responder con velocidad y
                precisión a las necesidades de empresas que operan en sectores
                exigentes.
              </p>
              <p>
                Combinamos maquinaria de última generación, equipos técnicos
                especializados y una red activa de proveedores internacionales
                para entregar soluciones medibles, trazables y alineadas con
                buenas prácticas operativas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[hsl(214,90%,28%)] to-[hsl(200,95%,40%)] text-white p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
                Diferenciales
              </div>
              <ul className="space-y-5">
                {[
                  { icon: Layers, t: "Capacidad operativa en grandes extensiones" },
                  { icon: Network, t: "Integración campo + logística + comercio exterior" },
                  { icon: Globe2, t: "Red de proveedores internacionales" },
                  { icon: ShieldCheck, t: "Experiencia con empresas del sector" },
                ].map((d) => (
                  <li key={d.t} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/15 grid place-items-center shrink-0">
                      <d.icon size={18} />
                    </div>
                    <span className="leading-relaxed">{d.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            Sectores
          </div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Industrias en las que operamos.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectores.map((s) => (
              <div
                key={s}
                className="p-6 rounded-xl bg-card border border-card-border text-center hover-elevate"
              >
                <div className="font-semibold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            {
              k: "Soluciones integrales",
              d: "Desde la intervención del terreno hasta la provisión de equipamiento e insumos importados.",
            },
            {
              k: "Operación a escala",
              d: "Logística y maquinaria preparadas para grandes extensiones y proyectos de larga duración.",
            },
            {
              k: "Optimización de recursos",
              d: "Procesos diseñados para maximizar resultados y minimizar tiempos muertos.",
            },
          ].map((c) => (
            <div
              key={c.k}
              className="p-7 rounded-xl border border-border bg-card"
            >
              <div className="text-lg font-semibold mb-2 text-primary">
                {c.k}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Conversemos sobre su próximo proyecto.
          </h2>
          <Link href="/contacto" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold hover:bg-white/95 transition-colors">
              Solicitar contacto comercial <ArrowRight size={16} />
            </Link>
        </div>
      </section>
    </>
  );
}
