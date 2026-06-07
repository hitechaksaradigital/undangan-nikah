export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-16 px-16 text-center gap-2 bg-surface-container-low border-t border-outline-variant/50">
      <span className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-medium text-primary uppercase tracking-[0.2em]">
        AURELIA &amp; JULIAN
      </span>
      <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary mt-4 max-w-2xl">
        &ldquo;Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu,
        apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.&rdquo;
      </p>
      <p className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-outline-variant mt-8 tracking-widest">
        MATIUS 19:6
      </p>
      <div className="flex gap-8 mt-12 mb-8">
        <a
          className="text-secondary hover:text-primary transition-colors font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]"
          href="#"
        >
          Privacy
        </a>
        <a
          className="text-secondary hover:text-primary transition-colors font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]"
          href="#"
        >
          Terms
        </a>
        <a
          className="text-secondary hover:text-primary transition-colors font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]"
          href="#"
        >
          Contact
        </a>
      </div>
      <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary opacity-50">
        © 2024 THE LEGACY COLLECTION
      </p>
    </footer>
  );
}
