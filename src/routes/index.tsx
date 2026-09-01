import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site-layout";
import hero from "@/assets/hero.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adda Gelinlik — Nişantaşı Gelinlik Atölyesi" },
      {
        name: "description",
        content:
          "El işçiliğiyle hazırlanan gelinlik, nişanlık ve duvak koleksiyonları. Nişantaşı'ndaki atölyemizde randevu ile hizmet veriyoruz.",
      },
      { property: "og:title", content: "Adda Gelinlik — Nişantaşı Gelinlik Atölyesi" },
      {
        property: "og:description",
        content: "El işçiliğiyle hazırlanan gelinlik ve nişanlık koleksiyonları.",
      },
    ],
  }),
  component: Index,
});

const highlights = [
  { image: collection1, name: "Altın Dantel", text: "İpek üzerine el nakışı" },
  { image: collection2, name: "Saten Silüet", text: "Sade ve modern kesimler" },
  { image: collection3, name: "Duvak & Taç", text: "Tamamlayıcı aksesuarlar" },
];

function Index() {
  return (
    <>
      <section className="relative">
        <img
          src={hero}
          alt=""
          width={1600}
          height={1104}
          className="h-[78vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-20 text-center">
          <p className="eyebrow">El İşçiliği Atölyesi</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-tight md:text-7xl">
            Bir Ömür Hatırlanacak Tek Bir Elbise
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Adda gelinlik, her gelin için ölçüye özel gelinlikler hazırlayan bir el
            işçiliği atölyesidir.
          </p>
          <Link to="/koleksiyonlar" className="btn-gold mt-9">
            Koleksiyonları Gör
          </Link>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow">Atölye</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Sabırla, elde, tek tek
            </h2>
            <span className="gold-rule mt-6" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-lg">
            Kumaşı seçmekle başlayan yolculuk, dört prova ve ortalama üç ayın
            sonunda tamamlanır. Koleksiyonlarımız sınırlı sayıda üretilir;
            atölyemizde satış değil, tasarım ve dikim yapılır. Tüm görüşmeler
            randevu ile gerçekleşir.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Öne Çıkanlar</p>
            <h2 className="mt-4 font-display text-4xl">Koleksiyonlar</h2>
          </div>
          <Link
            to="/urunler"
            className="hidden text-[0.72rem] uppercase tracking-[0.22em] text-primary md:block"
          >
            Tüm Ürünler
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <Link key={h.name} to="/koleksiyonlar" className="group block">
              <div className="overflow-hidden border border-border">
                <img
                  src={h.image}
                  alt=""
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-[30rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl">{h.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Randevu</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Atölyemizde buluşalım
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            Koleksiyonlarımızı yakından görmek ve kendi hikâyenizi anlatmak için
            bize yazın.
          </p>
          <Link to="/iletisim" className="btn-gold mt-9">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
}
