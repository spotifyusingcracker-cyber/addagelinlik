import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site-layout";
import { CollectionGallery, type GalleryImage } from "@/components/collection-gallery";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import atelier from "@/assets/atelier.jpg";
import galeriAltinDantel1 from "@/assets/galeri-altin-dantel-1.jpg";
import galeriAltinDantel2 from "@/assets/galeri-altin-dantel-2.jpg";
import galeriSatenSiluet1 from "@/assets/galeri-saten-siluet-1.jpg";
import galeriSatenSiluet2 from "@/assets/galeri-saten-siluet-2.jpg";
import galeriDuvakTac1 from "@/assets/galeri-duvak-tac-1.jpg";
import galeriDuvakTac2 from "@/assets/galeri-duvak-tac-2.jpg";

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

import abiyeDress16 from "@/elbiseler/abiye/dress10.jpg";
import abiyeDress17 from "@/elbiseler/abiye/dress11.png";
import abiyeDress18 from "@/elbiseler/abiye/dress12.png";
import abiyeDress19 from "@/elbiseler/abiye/dress13.png";
import abiyeDress20 from "@/elbiseler/abiye/dress14.png";
import abiyeDress21 from "@/elbiseler/abiye/dress15.jpg";
import abiyeDress22 from "@/elbiseler/abiye/dress17.jpg";
import abiyeDress23 from "@/elbiseler/abiye/dress18.jpg";
import abiyeDress24 from "@/elbiseler/abiye/dress19.jpg";
import abiyeDress25 from "@/elbiseler/abiye/dress20.jpg";
import abiyeDress26 from "@/elbiseler/abiye/dress21.jpg";
import abiyeDress27 from "@/elbiseler/abiye/dress22.jpg";
import abiyeDress28 from "@/elbiseler/abiye/dress23.png";
import abiyeDress29 from "@/elbiseler/abiye/dress24.png";
import abiyeDress30 from "@/elbiseler/abiye/dress25.png";
import abiyeDress31 from "@/elbiseler/abiye/dress26.png";
import abiyeDress32 from "@/elbiseler/abiye/dress27.png";
import abiyeDress33 from "@/elbiseler/abiye/dress28.jpg";

import afterDress1 from "@/elbiseler/after/dress1.jpg";
import afterDress2 from "@/elbiseler/after/dress2.png";

import gelinlikDress1 from "@/elbiseler/gelinlik/dress1.jpg";
import gelinlikDress2 from "@/elbiseler/gelinlik/dress2.png";
import gelinlikDress3 from "@/elbiseler/gelinlik/dress3.jpg";

import gelinlikDress4 from "@/elbiseler/gelinlik/dress4.jpg";
import gelinlikDress5 from "@/elbiseler/gelinlik/dress5.jpg";
import gelinlikDress6 from "@/elbiseler/gelinlik/dress6.jpg";
import gelinlikDress7 from "@/elbiseler/gelinlik/dress7.png";
import gelinlikDress8 from "@/elbiseler/gelinlik/dress8.png";
import gelinlikDress9 from "@/elbiseler/gelinlik/dress9.png";
import gelinlikDress10 from "@/elbiseler/gelinlik/dress10.jpg";

import kinalikDress1 from "@/elbiseler/kinalik/red.jpg";

import kinalikDress2 from "@/elbiseler/kinalik/dress1.jpg";
import kinalikDress3 from "@/elbiseler/kinalik/dress2.png";
import kinalikDress4 from "@/elbiseler/kinalik/dress3.png";

import nisanlikDress2 from "@/elbiseler/nisanlik/dress2.png";
import nisanlikDress3 from "@/elbiseler/nisanlik/dress3.png";
import nisanlikDress4 from "@/elbiseler/nisanlik/dress4.jpg";

import nisanlikDress5 from "@/elbiseler/nisanlik/dress5.jpg";
import nisanlikDress6 from "@/elbiseler/nisanlik/dress6.png";
import nisanlikDress7 from "@/elbiseler/nisanlik/dress7.jpg";
import nisanlikDress8 from "@/elbiseler/nisanlik/dress8.jpg";
import nisanlikDress9 from "@/elbiseler/nisanlik/dress9.jpg";
import nisanlikDress10 from "@/elbiseler/nisanlik/dress10.jpg";

export const Route = createFileRoute("/koleksiyonlar")({
  head: () => ({
    meta: [
      { title: "Koleksiyonlar — Adda Gelinlik Atölyesi" },
      {
        name: "description",
        content:
          "Dantel, saten ve tül üzerine el işçiliğiyle hazırlanan Adda gelinlik koleksiyonlarını keşfedin.",
      },
      { property: "og:title", content: "Koleksiyonlar — Adda Gelinlik" },
      {
        property: "og:description",
        content: "El işçiliğiyle hazırlanan gelinlik koleksiyonları.",
      },
    ],
  }),
  component: Koleksiyonlar,
});

interface Collection {
  name: string;
  year: string;
  image: string;
  text: string;
  gallery: GalleryImage[];
}

const collections: Collection[] = [
  {
    name: "Altın Dantel",
    year: "2026 İlkbahar",
    image: collection1,
    text: "İpek üzerine altın sarısı iplikle işlenen el nakışları, korse formuyla buluşuyor. Her parça atölyemizde ortalama 180 saatte tamamlanıyor.",
    gallery: [
      { src: collection1, alt: "" },
      { src: galeriAltinDantel1, alt: ""},
      { src: galeriAltinDantel2, alt: "" },
    ],
  },
  {
    name: "Saten Silüet",
    year: "2026 Sonbahar",
    image: collection2,
    text: "Ağır ipek satenin doğal düşüşünü öne çıkaran sade ve modern kesimler. Balık form, uzun kuyruk ve minimal detaylar.",
    gallery: [
      { src: collection2, alt: "" },
      { src: galeriSatenSiluet1, alt: "" },
      { src: galeriSatenSiluet2, alt: "" },
    ],
  },
  {
    name: "Duvak & Taç",
    year: "Sürekli Koleksiyon",
    image: collection3,
    text: "El işi altın taçlar, katmanlı tül duvaklar ve gelinliğinizi tamamlayan zarif aksesuarlar.",
    gallery: [
      { src: collection3, alt: "" },
      { src: galeriDuvakTac1, alt: "" },
      { src: galeriDuvakTac2, alt: "" },
    ],
  },
    {
    name: "Abiye",
    year: "2026 Koleksiyonu",
    image: abiyeDress1,
    text: "Özel davetler için tasarlanan zarif ve sofistike abiye modelleri. Modern silüetler, dikkat çekici detaylar ve kusursuz işçilik.",
    gallery: [
      { src: abiyeDress1, alt: "" },
      { src: abiyeDress2, alt: "" },
      { src: abiyeDress3, alt: "" },
      { src: abiyeDress4, alt: "" },
      { src: abiyeDress5, alt: "" },
      { src: abiyeDress6, alt: "" },
      { src: abiyeDress7, alt: "" },
      { src: abiyeDress8, alt: "" },
      { src: abiyeDress9, alt: "" },
      { src: abiyeDress10, alt: "" },
      { src: abiyeDress11, alt: "" },
      { src: abiyeDress12, alt: "" },
      { src: abiyeDress13, alt: "" },
      { src: abiyeDress14, alt: "" },
      { src: abiyeDress15, alt: "" },
      { src: abiyeDress16, alt: "" },
      { src: abiyeDress17, alt: "" },
      { src: abiyeDress18, alt: "" },
      { src: abiyeDress19, alt: "" },
      { src: abiyeDress20, alt: "" },
      { src: abiyeDress21, alt: "" },
      { src: abiyeDress22, alt: "" },
      { src: abiyeDress23, alt: "" },
      { src: abiyeDress24, alt: "" },
      { src: abiyeDress25, alt: "" },
      { src: abiyeDress26, alt: "" },
      { src: abiyeDress27, alt: "" },
      { src: abiyeDress28, alt: "" },
      { src: abiyeDress29, alt: "" },
      { src: abiyeDress30, alt: "" },
      { src: abiyeDress31, alt: "" },
      { src: abiyeDress32, alt: "" },
      { src: abiyeDress33, alt: "" },
    ],
  },

  {
    name: "After",
    year: "2026 Koleksiyonu",
    image: afterDress1,
    text: "Düğün sonrası zarif ve özgür bir görünüm için tasarlanan özel parçalar. Şıklığı konforla buluşturan modern tasarımlar.",
    gallery: [
      { src: afterDress1, alt: "" },
      { src: afterDress2, alt: "" },
    ],
  },

  {
    name: "Gelinlik",
    year: "2026 Koleksiyonu",
    image: gelinlikDress1,
    text: "Hayalinizdeki gelinliği gerçeğe dönüştüren zamansız tasarımlar. Zarif kumaşlar, romantik detaylar ve özenli el işçiliği.",
    gallery: [
      { src: gelinlikDress1, alt: "" },
      { src: gelinlikDress2, alt: "" },
      { src: gelinlikDress3, alt: "" },
      { src: gelinlikDress4, alt: "" },
      { src: gelinlikDress5, alt: "" },
      { src: gelinlikDress6, alt: "" },
      { src: gelinlikDress7, alt: "" },
      { src: gelinlikDress8, alt: "" },
      { src: gelinlikDress9, alt: "" },
      { src: gelinlikDress10, alt: "" },
    ],
  },

  {
    name: "Kınalık",
    year: "2026 Koleksiyonu",
    image: kinalikDress1,
    text: "Kına gecesinin geleneksel ruhunu modern tasarımlarla buluşturan özel parçalar. Gösterişli detaylar ve zarif işçilik.",
    gallery: [
      { src: kinalikDress1, alt: "" },
      { src: kinalikDress2, alt: "" },
      { src: kinalikDress3, alt: "" },
      { src: kinalikDress4, alt: "" },
    ],
  },

  {
    name: "Nişanlık",
    year: "2026 Koleksiyonu",
    image: nisanlikDress2,
    text: "Nişan gününüz için tasarlanan romantik ve sofistike modeller. Zarif silüetler, ışıltılı detaylar ve modern dokunuşlar.",
    gallery: [
      { src: nisanlikDress2, alt: "" },
      { src: nisanlikDress3, alt: "" },
      { src: nisanlikDress4, alt: "" },
      { src: nisanlikDress5, alt: "" },
      { src: nisanlikDress6, alt: "" },
      { src: nisanlikDress7, alt: "" },
      { src: nisanlikDress8, alt: "" },
      { src: nisanlikDress9, alt: "" },
      { src: nisanlikDress10, alt: "" },
    ],
  },
];

function Koleksiyonlar() {
  const [open, setOpen] = useState<{ title: string; images: GalleryImage[] } | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Koleksiyonlar"
        title="Her Sezon, Yeni Bir Hikâye"
        description="Koleksiyonlarımız sınırlı sayıda üretilir ve her gelin için ölçüye göre yeniden yorumlanır. Satış yapılmayan bir sergi alanı olarak tasarlanmıştır; tüm süreç randevu ile ilerler."
      />

      <Section>
        <div className="space-y-24">
          {collections.map((c, i) => (
            <article
              key={c.name}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen({ title: c.name, images: c.gallery })}
                className="group overflow-hidden border border-border text-left"
                aria-label={`${c.name} galerisini aç`}
              >
                <img
                  src={c.image}
                  alt={`${c.name} koleksiyonu`}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-[32rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
              <div>
                <p className="eyebrow">{c.year}</p>
                <h2 className="mt-4 font-display text-4xl">{c.name}</h2>
                <span className="gold-rule mt-6" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {c.text}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen({ title: c.name, images: c.gallery })}
                  className="btn-gold mt-8"
                >
                  Galeriyi Gör
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-border">
        <img
          src={atelier}
          alt=""
          loading="lazy"
          width={1400}
          height={950}
          className="h-[24rem] w-full object-cover md:h-[32rem]"
        />
      </section>

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
