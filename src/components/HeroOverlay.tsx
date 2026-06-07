import { useEffect, useState } from "react";
import { IMAGES } from "../constants/images";
import { supabase } from "../lib/supabase";

interface HeroOverlayProps {
  onOpen: () => void;
}

interface Guest {
  id: number;
  slug: string;
  name: string;
}

export default function HeroOverlay({ onOpen }: HeroOverlayProps) {
  const [guest, setGuest] = useState<Guest | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("to");
    if (slug) {
      supabase
        .from("guests")
        .select("*")
        .eq("slug", slug)
        .single()
        .then(({ data }) => {
          if (data) setGuest(data);
        });
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface overflow-hidden"
      id="hero-overlay"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          className="w-full h-full object-cover"
          src={IMAGES.heroOverlay}
          alt="Dekorasi pernikahan islami yang elegan"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 fade-in">
        <p
          className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.3em] font-semibold text-primary mb-2"
        >
          THE WEDDING OF
        </p>
        <h1
          className="font-[var(--font-family-playfair)] text-[40px] md:text-[64px] leading-[1.2] md:leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] font-semibold text-primary-container mb-12"
        >
          Fulana &amp; Fulan
        </h1>
        <div className="mb-12">
          <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary mb-2 italic">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <h3 className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-semibold text-on-surface">
            {guest?.name || "Tamu Undangan Spesial"}
          </h3>
        </div>
        <button
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-[0.75rem] transition-all duration-300 hover:scale-105 hover:bg-on-primary-fixed-variant cursor-pointer"
          onClick={onOpen}
        >
          <span className="material-symbols-outlined">mail</span>
          <span className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold">
            BUKA UNDANGAN
          </span>
        </button>
      </div>
    </div>
  );
}
