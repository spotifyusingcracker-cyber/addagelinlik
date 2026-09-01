import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site-layout";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim ve Randevu — Adda Gelinlik" },
      {
        name: "description",
        content:
          "Nişantaşı'ndaki atölyemizden randevu alın. Adres, telefon ve çalışma saatleri.",
      },
      { property: "og:title", content: "İletişim — Adda Gelinlik" },
      {
        property: "og:description",
        content: "Atölye adresi, telefon ve randevu bilgileri.",
      },
    ],
  }),
  component: Iletisim,
});

function Iletisim() {
  const [ad, setAd] = useState("");
  const [tel, setTel] = useState("");
  const [tarih, setTarih] = useState("");
  const [not, setNot] = useState("");
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Randevu Alın"
        description="Atölyemizi ziyaret etmek ve koleksiyonlarımızı yakından görmek için önceden randevu almanızı rica ederiz. Her seans yaklaşık iki saat sürer."
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2">
          <div className="space-y-10">
            <div>
              <p className="eyebrow">Adres</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                 Başak, Yunus Emre Cd. Piramit Çarşı D:2. Kat No:38, 34480
                <br />
                Başakşehir / İstanbul
              </p>
            </div>
            <div>
              <p className="eyebrow">Telefon</p>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                +90 532 781 27 46 (WhatsApp)
              </p>
            </div>
            <div>
              <p className="eyebrow">E-posta</p>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                addagelinlikabiye@gmail.com
              </p>
            </div>
            <div>
              <p className="eyebrow">Çalışma Saatleri</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Pazartesi – Cuma: 10.00 – 19.00
                <br />
                Cumartesi: 10.00 – 17.00
                <br />
                Pazar: Kapalı
              </p>
            </div>
          </div>

          <form
            className="space-y-6 border border-border p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const phoneNumber = "905327812746";
              const text = [
                "Merhaba Adda Gelinlik, randevu talebim var.",
                "",
                `Ad Soyad: ${ad || "Belirtilmedi"}`,
                `Telefon: ${tel || "Belirtilmedi"}`,
                `Düğün Tarihi: ${tarih || "Belirtilmedi"}`,
                `Not: ${not || "Belirtilmedi"}`,
              ].join("\n");
              window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
          >
            <p className="eyebrow">Randevu Talebi</p>
            <div>
              <label htmlFor="ad" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Ad Soyad
              </label>
              <input
                id="ad"
                name="ad"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
                className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="tel" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Telefon
              </label>
              <input
                id="tel"
                name="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="tarih" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Düğün Tarihi
              </label>
              <input
                id="tarih"
                name="tarih"
                value={tarih}
                onChange={(e) => setTarih(e.target.value)}
                className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="not" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Notunuz
              </label>
              <textarea
                id="not"
                name="not"
                rows={4}
                value={not}
                onChange={(e) => setNot(e.target.value)}
                className="mt-2 w-full border-b border-input bg-transparent py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <button type="submit" className="btn-gold w-full">
              WhatsApp ile Gönder
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Talebiniz WhatsApp üzerinden bize ulaşacak; en geç bir iş günü içinde dönüş yapıyoruz.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}
