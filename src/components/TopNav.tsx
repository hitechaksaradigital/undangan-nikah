interface TopNavProps {
  visible: boolean;
}

export default function TopNav({ visible }: TopNavProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-16 h-20 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <span className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-medium tracking-widest text-primary uppercase">
        FULANA
      </span>
      <div className="hidden md:flex gap-12 items-center">
        <a
          className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary hover:text-primary transition-colors duration-300"
          href="#couple"
        >
          COUPLE
        </a>
        <a
          className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary hover:text-primary transition-colors duration-300"
          href="#event"
        >
          EVENT
        </a>
        <a
          className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary hover:text-primary transition-colors duration-300"
          href="#gallery"
        >
          GALLERY
        </a>
        <a
          className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary hover:text-primary transition-colors duration-300"
          href="#rsvp"
        >
          RSVP
        </a>
      </div>
      <button className="px-6 py-2 border border-primary text-primary font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold rounded-[0.75rem] hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
        OPEN MUSIC
      </button>
    </nav>
  );
}
