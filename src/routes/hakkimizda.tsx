import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site-layout";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda — Adda Gelinlik Atölyesi" },
      {
        name: "description",
        content:
          "Hayallerinizi gerçeğe dönüştüren özel tasarım gelinliklerimizi, kalite ve zarafeti bir araya getirerek özenle hazırlıyoruz. Her gelinin en mutlu gününde kendini eşsiz hissetmesi için kişiye özel hizmet sunuyoruz.",
      },
      { property: "og:title", content: "Hakkımızda — Adda Gelinlik" },
      {
        property: "og:description",
        content: "Atölyemizde el işçiliğiyle hazırlanan gelinlikler.",
      },
    ],
  }),
  component: Hakkimizda,
});

const values = [
  {
    title: "El İşçiliği",
    text: "Her dikiş, her boncuk ve her nakış atölyemizde elde uygulanır. Makine tekrarına değil, ustanın gözüne güveniriz.",
  },
  {
    title: "Ölçüye Özel",
    text: "Hazır beden yoktur. Her gelinlik, gelinin ölçüleri ve duruşu üzerine yeniden kurulur.",
  },
  {
    title: "Sakin Bir Süreç",
    text: "Randevulu çalışırız. Atölyede aynı anda tek bir gelin ağırlanır; acele etmeden karar verirsiniz.",
  },
];

function Hakkimizda() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Zamansız zarafet"
        description="İnce işçiliği ve kaliteli kumaşları bir araya getirerek hayalinizdeki gelinliği tasarlıyoruz. Her detayda şıklığı ve kusursuzluğu ön planda tutarak size unutulmaz bir deneyim sunuyoruz."
      />

      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={atelier}
            alt=""
            loading="lazy"
            width={1400}
            height={950}
            className="border border-border object-cover"
          />
          <div>
            <p className="eyebrow">Atölyemiz</p>
            <h2 className="mt-4 font-display text-4xl">Bir Gelinlik, Bir Emek</h2>
            <span className="gold-rule mt-6" />
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Kaliteli kumaşlar, kusursuz işçilik ve zarif dokunuşlarla hayalinizdeki gelinliği gerçeğe dönüştürüyoruz. Her tasarımımız, sofistike bir duruş ve eşsiz bir zarafet anlayışını yansıtır.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 border-t border-border pt-16 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <span className="gold-rule" />
              <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
