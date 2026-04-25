import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "INICIO" },
  { href: "/nosotros", label: "NOSOTROS" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/importacion", label: "IMPORTACIÓN" },
  { href: "/exportacion", label: "EXPORTACIÓN" },
  { href: "/catalogo", label: "CATÁLOGO" },
  { href: "/contacto", label: "CONTACTO" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "h-20" : "h-28"
        }`}
      >
        <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.02]">
          <Logo />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => {
            const active = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-2 text-[11px] font-semibold tracking-wider transition-colors ${
                  active ? "text-accent" : "text-primary hover:text-accent"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="ml-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-accent text-accent-foreground text-[11px] font-semibold tracking-wider shadow-sm hover:bg-accent/90 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={14} /> CONTÁCTANOS
          </Link>
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="xl:hidden p-2 rounded-md text-primary"
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-white border-t border-border shadow-md">
          <div className="max-w-[1400px] mx-auto px-6 py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-semibold tracking-wider text-primary border-b border-border/60 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="mt-3 text-center px-4 py-2.5 rounded-md bg-accent text-accent-foreground text-sm font-semibold tracking-wider"
            >
              CONTÁCTANOS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
