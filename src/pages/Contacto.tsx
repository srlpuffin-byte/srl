import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useDocumentMeta } from "@/hooks/use-document-meta";

const CONTACT_EMAIL = "a.gelsopuffin@outlook.com";

export default function Contacto() {
  useDocumentMeta(
    "Contacto — Puffin S.R.L.",
    "Comunicate con Puffin S.R.L. para consultas comerciales, presupuestos y proyectos de importación, exportación y servicios.",
  );
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    tipo: "Importación",
    mensaje: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Nueva consulta web · ${form.tipo} · ${form.empresa || form.nombre}`,
          _template: "table",
          _captcha: "false",
          Nombre: form.nombre,
          Empresa: form.empresa,
          Cargo: form.cargo,
          Email: form.email,
          Teléfono: form.telefono,
          "Tipo de consulta": form.tipo,
          Mensaje: form.mensaje,
        }),
      });
      if (!res.ok) throw new Error("No se pudo enviar el formulario.");
      setSent(true);
    } catch (err) {
      setError(
        "No pudimos enviar tu consulta. Por favor escribinos directamente a " +
          CONTACT_EMAIL,
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Área Comercial y Consultas"
        title="Hablemos sobre su proyecto."
        subtitle="Nuestro equipo responderá su consulta a la brevedad para brindarle una solución a medida."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-5">
            <InfoCard
              icon={<Mail size={20} />}
              label="Email corporativo"
              value="a.gelsopuffin@outlook.com"
              href="mailto:a.gelsopuffin@outlook.com"
            />
            <InfoCard
              icon={<Phone size={20} />}
              label="Teléfono"
              value="+54 9 3572 40-0877"
              href="tel:+5493572400877"
            />
            <InfoCard
              icon={<MapPin size={20} />}
              label="Ubicación"
              value="Argentina · Operaciones internacionales"
            />

            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-xs uppercase tracking-wider text-primary mb-2">
                Atención comercial
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Atendemos consultas de empresas nacionales e internacionales en
                horario comercial. Las cotizaciones se elaboran en función del
                volumen, especificación técnica y logística asociada.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            {sent ? (
              <div className="p-10 rounded-xl border border-border bg-card text-center">
                <CheckCircle2
                  size={48}
                  className="mx-auto text-primary mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  Consulta recibida
                </h3>
                <p className="text-muted-foreground">
                  Gracias por contactarse con <span className="notranslate" translate="no">PUFFIN S.R.L.</span> Nuestro equipo
                  comercial le responderá a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="p-8 rounded-xl border border-border bg-card grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <Field label="Nombre completo" required>
                  <input
                    required
                    value={form.nombre}
                    onChange={(e) => update("nombre", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Empresa" required>
                  <input
                    required
                    value={form.empresa}
                    onChange={(e) => update("empresa", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Cargo">
                  <input
                    value={form.cargo}
                    onChange={(e) => update("cargo", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Email corporativo" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Teléfono">
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => update("telefono", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Tipo de consulta" required>
                  <select
                    value={form.tipo}
                    onChange={(e) => update("tipo", e.target.value)}
                    className="input"
                  >
                    <option>Importación</option>
                    <option>Exportación</option>
                    <option>Servicios</option>
                  </select>
                </Field>
                <Field label="Mensaje" required full>
                  <textarea
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    className="input resize-none"
                  />
                </Field>

                {error && (
                  <div className="md:col-span-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
                    {error}
                  </div>
                )}
                <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    Al enviar, autoriza a <span className="notranslate" translate="no">PUFFIN S.R.L.</span> a contactarlo con fines
                    comerciales.
                  </p>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Enviando..." : "Solicitar contacto comercial"} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          padding: 0.65rem 0.85rem;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 0.5rem;
          font-size: 0.9rem;
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15);
        }
      `}</style>
    </>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="font-medium mt-0.5 break-all">{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="p-5 rounded-xl border border-border bg-card flex items-start gap-4 hover:border-primary/50 transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="p-5 rounded-xl border border-border bg-card flex items-start gap-4">
      {content}
    </div>
  );
}

function Field({
  label,
  required,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs font-medium text-foreground/80">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
