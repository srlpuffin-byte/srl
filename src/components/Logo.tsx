import logoSrc from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={light ? "bg-white rounded-md p-1.5" : ""}>
        <img
          src={logoSrc}
          alt="PUFFIN S.R.L."
          className="h-20 md:h-28 w-auto object-contain block"
        />
      </div>
      <div className={`leading-tight text-center ${light ? "text-white" : "text-primary"}`}>
        <div className="font-extrabold tracking-[0.18em] text-xl md:text-2xl notranslate" translate="no">PUFFIN</div>
        <div className={`text-[10px] tracking-[0.45em] mt-0.5 ${light ? "text-white/70" : "text-primary/70"}`}>
          S.R.L.
        </div>
      </div>
    </div>
  );
}
