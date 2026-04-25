import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Logo } from "./Logo";

const socialLinks = [
  {
    href: "https://www.tiktok.com/@puffinsrl",
    label: "TikTok",
    icon: <FaTiktok size={16} />,
  },
  {
    href: "https://www.instagram.com/puffinsrl/",
    label: "Instagram",
    icon: <Instagram size={16} />,
  },
  {
    href: "https://www.linkedin.com/in/puffin-srl-1aa21a405/",
    label: "LinkedIn",
    icon: <Linkedin size={16} />,
  },
];

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo light />
          <p className="text-sm text-sidebar-foreground/70 mt-5 leading-relaxed">
            Soluciones integrales para el desarrollo agroindustrial, territorial y aéreo.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.2em] text-accent">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2.5 text-sm text-sidebar-foreground/80">
            {[
              ["/", "Inicio"],
              ["/nosotros", "Nosotros"],
              ["/servicios", "Servicios"],
              ["/importacion", "Importación"],
              ["/exportacion", "Exportación"],
              ["/catalogo", "Catálogo"],
              ["/contacto", "Contacto"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-accent transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.2em] text-accent">
            Contáctanos
          </h4>
          <ul className="space-y-3 text-sm text-sidebar-foreground/80">
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-accent" />
              <a href="tel:+5493572400877" className="hover:text-accent transition-colors">
                +54 9 3572 40-0877
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 shrink-0 text-accent" />
              <a href="mailto:a.gelsopuffin@outlook.com" className="hover:text-accent transition-colors break-all">
                a.gelsopuffin@outlook.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              <span>Córdoba, Argentina</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={15} className="mt-0.5 shrink-0 text-accent" />
              <span>Lunes a Viernes<br />8:00 a 18:00 hs</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold mb-5 uppercase tracking-[0.2em] text-accent">
            Seguinos
          </h4>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-accent transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-sidebar-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 text-center text-xs text-sidebar-foreground/60">
          © {new Date().getFullYear()} <span className="notranslate" translate="no">PUFFIN S.R.L.</span> Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
