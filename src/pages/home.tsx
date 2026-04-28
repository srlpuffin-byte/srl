import React, { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Leaf,
  Settings,
  Globe,
  ShieldCheck,
  Building2,
  TreePine,
  Truck,
  Plane,
  Fence,
  Mountain,
  Handshake,
  Heart,
  Recycle,
  Sprout,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Briefcase,
  Clock,
} from "lucide-react";
import heroHelicopter from "@/assets/helicopter.jpeg";
import heroPerfIcon from "@/assets/perf-icon.png";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import heroMachine from "@/assets/sinomach-856.jpg";
import importImg from "@/assets/import.png";
import exportImg from "@/assets/export.png";
import { catalogo } from "@/lib/catalogo";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export default function Home() {
  useDocumentMeta(
    "Puffin S.R.L. — Importación, Exportación y Servicios Agroindustriales",
    "Soluciones integrales para el desarrollo agroindustrial, territorial y aéreo. Importación y exportación de maquinaria pesada y servicios viales, ambientales y aéreos.",
  );
  return (
    <>
      <Hero />
      <Valores />
      <CatalogoDestacado />
      <NuestrosServicios />
      <ImportExport />
      <Sustentabilidad />
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 600], [1.05, 1.15]);

  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img src={heroMachine} alt="" className="w-full h-full object-cover opacity-50" style={{ objectPosition: "center 75%" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-block text-[10px] font-bold tracking-[0.3em] text-accent border border-accent/40 px-3 py-1 rounded-full mb-5"
          >
            EFICIENCIA OPERATIVA · COMPROMISO AMBIENTAL
          </motion.span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            SOLUCIONES INTEGRALES
            <br />
            PARA EL DESARROLLO
            <br />
            <span className="text-accent">AGROINDUSTRIAL,</span>
            <br />
            <span className="text-accent">TERRITORIAL Y AÉREO</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
            Compromiso, eficiencia y sustentabilidad en cada proyecto.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold tracking-wider text-xs shadow-lg hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              NUESTROS SERVICIOS
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-white text-white font-semibold tracking-wider text-xs hover:bg-white hover:text-primary transition-colors"
            >
              CATÁLOGO DE PRODUCTOS
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-col gap-6 w-full"
        >
          <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
            <img
              src={heroHelicopter}
              alt="Helicóptero Puffin"
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.75) contrast(1.05) brightness(0.90)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4">
              <div className="text-[10px] tracking-[0.2em] text-accent font-bold">FLOTA PROPIA</div>
              <div className="text-sm font-semibold tracking-wide">Helicóptero · LV-X911</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}

function Valores() {
  const items = [
    { icon: Leaf, title: "COMPROMISO AMBIENTAL", desc: "Trabajamos con prácticas responsables cuidando el entorno." },
    { icon: Settings, title: "TECNOLOGÍA Y EQUIPAMIENTO", desc: "Maquinaria moderna para garantizar resultados de alta calidad." },
    { icon: Globe, title: "COMERCIO GLOBAL", desc: "Importación y exportación desde y hacia cualquier parte del mundo." },
    { icon: ShieldCheck, title: "SEGURIDAD", desc: "Estándares de seguridad en cada operación y proyecto." },
  ];
  return (
    <section className="bg-primary text-white border-t border-white/10">
      <StaggerGroup className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((it) => (
          <StaggerItem key={it.title} className="flex items-start gap-4 group">
            <div className="shrink-0 w-12 h-12 rounded-full border-2 border-accent grid place-items-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:scale-110">
              <it.icon size={20} />
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-wider mb-1.5">{it.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{it.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function Estadisticas() {
  const stats = [
    { icon: Clock, value: 15, suffix: "+", label: "AÑOS DE EXPERIENCIA" },
    { icon: Briefcase, value: 250, suffix: "+", label: "PROYECTOS REALIZADOS" },
    { icon: Users, value: 80, suffix: "+", label: "CLIENTES SATISFECHOS" },
    { icon: Award, value: 12, suffix: "", label: "PAÍSES OPERADOS" },
  ];
  return (
    <section className="relative bg-secondary py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#0a2540_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary tracking-wider mb-2">
            POR QUÉ ELEGIRNOS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-3 rounded-full" />
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-14">
            Trayectoria, equipo propio y presencia internacional respaldan cada uno de nuestros proyectos.
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="bg-white rounded-xl border border-border p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/5 grid place-items-center text-accent mb-4">
                <s.icon size={26} strokeWidth={1.6} />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[11px] font-bold tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function CatalogoDestacado() {
  const [start, setStart] = useState(0);
  const visible = 4;
  const total = catalogo.length;
  const items = Array.from({ length: visible }, (_, i) => catalogo[(start + i) % total]);

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-primary tracking-wider mb-2">
          CATÁLOGO DESTACADO
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full" />

        <div className="relative">
          <button
            onClick={() => setStart((s) => (s - 1 + total) % total)}
            className="hidden md:grid absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border place-items-center text-primary shadow hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setStart((s) => (s + 1) % total)}
            className="hidden md:grid absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border place-items-center text-primary shadow hover:bg-primary hover:text-white transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((p) => (
              <article key={p.id} className="bg-white rounded-lg border border-border overflow-hidden flex flex-col hover-elevate">
                <div className="aspect-[3/4] bg-white overflow-hidden flex items-center justify-center">
                  <img src={p.imagen} alt={p.nombre} className="w-full h-full object-contain" />
                </div>
                <div className="p-4 flex flex-col">
                  <Link
                    href="/catalogo"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent text-accent-foreground text-[10px] font-bold tracking-wider hover:bg-accent/90 transition-colors"
                  >
                    VER MÁS
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-semibold tracking-wider text-xs hover:bg-primary/90 transition-colors"
          >
            VER CATÁLOGO COMPLETO
          </Link>
        </div>
      </div>
    </section>
  );
}

type ServiceEntry = {
  icon?: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  iconImg?: string;
  title: string;
  desc: React.ReactNode;
};

function NuestrosServicios() {
  const services: ServiceEntry[] = [
    { icon: Building2, title: "DESARROLLO URBANÍSTICO", desc: "Proyectos de urbanización, apertura y mejoramiento de calles, lotes y accesos." },
    { icon: TreePine, title: "SERVICIOS AMBIENTALES Y DE CAMPO", desc: "Desmalezado de grandes extensiones, manejo de vegetación y perímetros en zonas de monte." },
    { icon: Mountain, title: "MOVIMIENTO DE SUELO", desc: "Excavación con pala, motoniveladora, preparación y nivelación de terrenos." },
    {
      icon: Truck,
      title: "TRANSPORTE DE MATERIALES",
      desc: "Incluyendo mercancía peligrosa (fletes especiales). Transporte nacional e internacional.",
    },
    { iconImg: heroPerfIcon, title: "PERFORACIÓN EN ROCA", desc: "Perforaciones en terrenos rocosos para cimentaciones, obras y proyectos especiales." },
    { icon: ShieldAlert, title: "VOLADURAS CONTROLADAS Y SERVICIOS CON EXPLOSIVOS", desc: "Voladuras controladas y manejo seguro de explosivos para obras civiles y proyectos especiales." },
    { icon: Fence, title: "PERÍMETROS Y DELIMITACIONES", desc: "Construcción y mantenimiento de perímetros rurales y alambrados." },
    { icon: Plane, title: "SERVICIOS AÉREOS", desc: "Importación de aeronaves, apoyo logístico aéreo y relevamientos." },
    {
      icon: Handshake,
      title: "TRABAJOS PARA TERCEROS",
      desc: (
        <>
          Prestamos servicios a empresas líderes del sector, incluyendo a{" "}
          <a
            href="https://levsa.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline underline-offset-2"
          >
            LEVSA
          </a>
          .
        </>
      ),
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold text-primary tracking-wider mb-2">
            NUESTROS SERVICIOS
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full" />
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12" stagger={0.06}>
          {services.map((s) => (
            <StaggerItem key={s.title} className="text-center group cursor-default">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 border border-primary/15 grid place-items-center text-primary mb-4 transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 group-hover:shadow-md overflow-hidden">
                {s.iconImg ? (
                  <img src={s.iconImg} alt={s.title} className="w-12 h-12 object-contain" />
                ) : s.icon ? (
                  <s.icon size={28} strokeWidth={1.5} />
                ) : null}
              </div>
              <h3 className="text-xs font-bold text-primary tracking-wider mb-2 leading-tight">
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed px-2">
                {s.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ImportExport() {
  const importItems = [
    "Maquinaria agrícola y vial (nueva y usada)",
    "Cubiertas agrícolas, viales y para camiones",
    "Repuestos para industria automotriz y agroindustrial",
    "Aeronaves y componentes",
    "Insumos para industria automotriz y agro",
  ];
  const exportItems = [
    "Productos e insumos agroindustriales",
    "Maquinaria y equipos",
    "Materiales y repuestos",
    "Gestión y logística internacional",
    "Envíos a cualquier parte del mundo",
  ];

  return (
    <section className="py-16 bg-background">
      <StaggerGroup className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-6">
        <StaggerItem>
          <BloqueComex titulo="IMPORTACIÓN" items={importItems} imagen={importImg} href="/importacion" />
        </StaggerItem>
        <StaggerItem>
          <BloqueComex titulo="EXPORTACIÓN" subtitulo="Comercio Exterior" items={exportItems} imagen={exportImg} href="/exportacion" />
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}

function BloqueComex({ titulo, subtitulo, items, imagen, href }: { titulo: string; subtitulo?: string; items: string[]; imagen: string; href: string }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-secondary border border-border flex flex-col md:flex-row hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      <div className="flex-1 p-7">
        <h3 className="text-xl font-bold text-primary tracking-wider mb-1">{titulo}</h3>
        {subtitulo && <p className="text-xs font-semibold text-accent tracking-widest mb-5 uppercase">{subtitulo}</p>}
        <ul className="space-y-2.5 mb-6">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check size={16} className="text-accent mt-0.5 shrink-0" strokeWidth={3} />
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-[11px] font-bold tracking-wider hover:bg-accent/90 hover:gap-3 transition-all"
        >
          MÁS INFORMACIÓN <ArrowRight size={14} />
        </Link>
      </div>
      <div className="md:w-1/2 min-h-[220px] relative overflow-hidden">
        <img src={imagen} alt={titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply" />
      </div>
    </div>
  );
}

function Sustentabilidad() {
  const items = [
    { icon: Heart, title: "CUIDAMOS EL ENTORNO", desc: "Realizamos nuestras operaciones con responsabilidad ambiental y respeto por la biodiversidad." },
    { icon: Recycle, title: "GESTIÓN RESPONSABLE", desc: "Planificamos cada proyecto minimizando impactos y optimizando recursos." },
    { icon: Sprout, title: "DESARROLLO SOSTENIBLE", desc: "Impulsamos el crecimiento productivo en armonía con el medio ambiente." },
    { icon: ShieldAlert, title: "SEGURIDAD Y CALIDAD", desc: "Garantizamos procesos seguros y resultados de la más alta calidad." },
  ];
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-wider mb-2">
            COMPROMISO CON LA SUSTENTABILIDAD
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-14 rounded-full" />
        </Reveal>
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it) => (
            <StaggerItem key={it.title} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full border-2 border-accent grid place-items-center text-accent mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                <it.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-bold tracking-wider mb-2.5">{it.title}</h3>
              <p className="text-xs text-white/75 leading-relaxed">{it.desc}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
