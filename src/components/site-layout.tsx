import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/koleksiyonlar", label: "Koleksiyonlar" },
  { to: "/urunler", label: "Ürünler" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-[0.3em] text-primary">
          ADDA
        </Link>
        <nav className="hidden gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-[0.72rem] uppercase tracking-[0.22em] text-primary md:hidden"
          aria-expanded={open}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.3em] text-primary">ADDA</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            El işçiliğiyle hazırlanan gelinlik ve nişanlık
            koleksiyonları.
          </p>
        </div>
        <div>
          <p className="eyebrow">Atölye</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
             Başak, Yunus Emre Cd. Piramit Çarşı D:2. Kat No:38, 34480
            <br />
            Başakşehir, İstanbul
          </p>
        </div>
        <div>
          <p className="eyebrow">Randevu</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            +90 532 781 2746
            <br />
            addagelinlikabiye@gmail.com
            <br />
            Pazartesi – Cumartesi, 10.00 – 17.00
          </p>
        </div>
      </div>
      <div className="border-t border-border px-6 py-6 text-center text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
        © {new Date().getFullYear()} Adda Gelinlik — Tüm hakları saklıdır
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border px-6 py-20 text-center md:py-28">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 font-display text-4xl md:text-6xl">{title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </section>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">{children}</section>;
}
