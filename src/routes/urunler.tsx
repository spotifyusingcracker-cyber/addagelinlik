import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site-layout";
import { CollectionGallery, type GalleryImage } from "@/components/collection-gallery";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import hero from "@/assets/hero.jpg";
import galeriAltinDantel1 from "@/assets/galeri-altin-dantel-1.jpg";
import galeriAltinDantel2 from "@/assets/galeri-altin-dantel-2.jpg";
import galeriSatenSiluet1 from "@/assets/galeri-saten-siluet-1.jpg";
import galeriSatenSiluet2 from "@/assets/galeri-saten-siluet-2.jpg";
import galeriDuvakTac1 from "@/assets/galeri-duvak-tac-1.jpg";
import galeriDuvakTac2 from "@/assets/galeri-duvak-tac-2.jpg";
import atelier from "@/assets/atelier.jpg";

import abiyeDress1 from "@/elbiseler/abiye/dress1.png";
import abiyeDress2 from "@/elbiseler/abiye/dress2.png";
import abiyeDress3 from "@/elbiseler/abiye/dress3.png";
import abiyeDress4 from "@/elbiseler/abiye/dress4.png";
import abiyeDress5 from "@/elbiseler/abiye/dress5.png";
import abiyeDress6 from "@/elbiseler/abiye/dress6.png";
import abiyeDress7 from "@/elbiseler/abiye/dress7.png";
import abiyeDress8 from "@/elbiseler/abiye/dress8.png";
import abiyeDress9 from "@/elbiseler/abiye/dress9.png";
import abiyeDress10 from "@/elbiseler/abiye/dress91.png";
import abiyeDress11 from "@/elbiseler/abiye/dress92.png";
import abiyeDress12 from "@/elbiseler/abiye/dress93.png";
import abiyeDress13 from "@/elbiseler/abiye/dress94.jpg";
import abiyeDress14 from "@/elbiseler/abiye/dress95.jpg";
import abiyeDress15 from "@/elbiseler/abiye/dress96.jpg";

import afterDress1 from "@/elbiseler/after/dress1.jpg";
import afterDress2 from "@/elbiseler/after/dress2.png";

import gelinlikDress1 from "@/elbiseler/gelinlik/dress1.jpg";
import gelinlikDress2 from "@/elbiseler/gelinlik/dress2.png";
import gelinlikDress3 from "@/elbiseler/gelinlik/dress3.jpg";

import kinalikDress1 from "@/elbiseler/kinalik/red.jpg";

import nisanlikDress2 from "@/elbiseler/nisanlik/dress2.png";
import nisanlikDress3 from "@/elbiseler/nisanlik/dress3.png";
import nisanlikDress4 from "@/elbiseler/nisanlik/dress4.jpg";

export const Route = createFileRoute("/urunler")({
  head: () => ({
    meta: [
      { title: "Ürünler — Gelinlik, Nişanlık ve Aksesuar | Adda" },
      {
        name: "description",
        content:
          "Gelinlik, nişanlık, duvak ve taç modellerimizi inceleyin. Tüm modeller atölyemizde ölçüye göre hazırlanır.",
      },
      { property: "og:title", content: "Ürünler — Adda Gelinlik" },
      {
        property: "og:description",
        content: "Gelinlik, nişanlık, duvak ve taç modelleri.",
      },
    ],
  }),
  component: Urunler,
});

interface Product {
  type: string;
  image: string;
  detail: string;
  gallery: GalleryImage[];
}

const products: Product[] = [
  {
    type: "Dantel Gelinlik",
    image: collection1,
    detail: "Uzun kol, açık sırt, altın nakış",
    gallery: [
      { src: collection1, alt: "Dantel gelinlik" },
      { src: galeriAltinDantel1, alt: "Gelinlik altın nakış detayı" },
      { src: galeriAltinDantel2, alt: "Gelinlik tam boy görünüm" },
    ],
  },
  {
    type: "Saten Gelinlik",
    image: collection2,
    detail: "Balık form, ipek saten, uzun kuyruk",
    gallery: [
      { src: collection2, alt: "Saten gelinlik" },
      { src: galeriSatenSiluet1, alt: "Gelinlik saten kumaş detayı" },
      { src: galeriSatenSiluet2, alt: "Gelinlik tam boy görünüm" },
    ],
  },
  {
    type: "Duvak & Taç",
    image: collection3,
    detail: "Katmanlı tül, el işi altın taç",
    gallery: [
      { src: collection3, alt: "Duvak ve taç" },
      { src: galeriDuvakTac1, alt: "El işi altın taç detayı" },
      { src: galeriDuvakTac2, alt: "Katmanlı tül duvak" },
    ],
  },
  {
    type: "Prenses Gelinlik",
    image: hero,
    detail: "Hacimli etek, korse beden, dantel apilike",
    gallery: [
      { src: hero, alt: "Prenses gelinlik" },
      { src: galeriAltinDantel2, alt: "Gelinlik dantel apilike detayı" },
      { src: atelier, alt: "Gelinliğin hazırlandığı atölye" },
    ],
  },
  {
    type: "Nişanlık",
    image: collection2,
    detail: "Şampanya tonu, sade kesim, midi boy",
    gallery: [
      { src: collection2, alt: "Nişanlık" },
      { src: galeriSatenSiluet1, alt: "Nişanlık kumaş detayı" },
      { src: galeriSatenSiluet2, alt: "Nişanlık tam boy görünüm" },
    ],
  },
  {
    type: "Kına Kaftanı",
    image: collection1,
    detail: "Kadife üzerine altın işleme",
    gallery: [
      { src: collection1, alt: "Kına kaftanı" },
      { src: galeriAltinDantel1, alt: "Kaftan altın işleme detayı" },
      { src: galeriDuvakTac1, alt: "Kaftanı tamamlayan el işi taç" },
    ],
  },

  {
    type: "Abiye",
    image: abiyeDress1,
    detail: "Özel davetler için zarif ve sofistike tasarımlar",
    gallery: [
      { src: abiyeDress1, alt: "Abiye elbise" },
      { src: abiyeDress2, alt: "Abiye elbise görünümü" },
      { src: abiyeDress3, alt: "Abiye elbise detayları" },
      { src: abiyeDress4, alt: "Abiye elbise" },
      { src: abiyeDress5, alt: "Abiye elbise görünümü" },
      { src: abiyeDress6, alt: "Abiye elbise" },
      { src: abiyeDress7, alt: "Abiye elbise" },
      { src: abiyeDress8, alt: "Abiye elbise" },
      { src: abiyeDress9, alt: "Abiye elbise" },
      { src: abiyeDress10, alt: "Abiye elbise" },
      { src: abiyeDress11, alt: "Abiye elbise" },
      { src: abiyeDress12, alt: "Abiye elbise" },
      { src: abiyeDress13, alt: "Abiye elbise" },
      { src: abiyeDress14, alt: "Abiye elbise" },
      { src: abiyeDress15, alt: "Abiye elbise" },
    ],
  },

  {
    type: "After",
    image: afterDress1,
    detail: "Düğün sonrası için zarif ve modern tasarımlar",
    gallery: [
      { src: afterDress1, alt: "After elbisesi" },
      { src: afterDress2, alt: "After elbisesi" },
    ],
  },

  {
    type: "Gelinlik",
    image: gelinlikDress1,
    detail: "Zamansız tasarımlar, zarif detaylar ve özel işçilik",
    gallery: [
      { src: gelinlikDress1, alt: "Gelinlik" },
      { src: gelinlikDress2, alt: "Gelinlik görünümü" },
      { src: gelinlikDress3, alt: "Gelinlik detayları" },
    ],
  },

  {
    type: "Kınalık",
    image: kinalikDress1,
    detail: "Kına gecesine özel geleneksel ve gösterişli tasarım",
    gallery: [
      { src: kinalikDress1, alt: "Kınalık elbise" },
    ],
  },

  {
    type: "Nişanlık",
    image: nisanlikDress2,
    detail: "Nişan gününüz için zarif ve sofistike tasarımlar",
    gallery: [
      { src: nisanlikDress2, alt: "Nişanlık elbise" },
      { src: nisanlikDress3, alt: "Nişanlık elbise görünümü" },
      { src: nisanlikDress4, alt: "Nişanlık elbise detayları" },
    ],
  },
];

function Urunler() {
  const [open, setOpen] = useState<{ title: string; images: GalleryImage[] } | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Ürünler"
        title="Modellerimiz"
        description="Aşağıdaki modeller atölyemizde bulunan seçkiden bir bölümdür. Her model, gelinin ölçülerine ve tercihlerine göre yeniden şekillendirilir."
      />

      <Section>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.type} className="group">
              <button
                type="button"
                onClick={() => setOpen({ title: p.type, images: p.gallery })}
                aria-label={`${p.type} galerisini aç`}
                className="block w-full overflow-hidden border border-border text-left"
              >
                <img
                  src={p.image}
                  alt={p.type}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-[28rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
              <h2 className="mt-6 font-display text-2xl">{p.type}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              <button
                type="button"
                onClick={() => setOpen({ title: p.type, images: p.gallery })}
                className="mt-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:text-foreground"
              >
                Galeriyi Gör
              </button>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-20 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
          Modellerimiz yalnızca atölyemizde, randevu ile görülebilir. Deneme
          seansı için iletişim sayfasından bize ulaşabilirsiniz.
        </p>
      </Section>

      {open && (
        <CollectionGallery
          title={open.title}
          images={open.images}
          isOpen
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
