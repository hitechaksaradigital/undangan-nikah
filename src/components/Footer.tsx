export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-16 px-16 text-center gap-2 bg-surface-container-low border-t border-outline-variant/50">
      <span className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-medium text-primary uppercase tracking-[0.2em]">
        FULANA &amp; FULAN
      </span>
      <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary mt-4 max-w-2xl italic">
        &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
      </p>
      <p className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-outline-variant mt-8 tracking-widest">
        QS. AR-RUM: 21
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
        © 2025 THE LEGACY COLLECTION
      </p>
    </footer>
  );
}
