interface BottomNavProps {
  visible: boolean;
}

export default function BottomNav({ visible }: BottomNavProps) {
  if (!visible) return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-3 px-5 bg-surface/95 backdrop-blur-lg border-t border-outline-variant/20 shadow-[0px_-4px_20px_rgba(26,26,26,0.05)] rounded-t-[0.75rem]">
      <a
        className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-[0.75rem] py-1 px-4 active:scale-95 transition-transform duration-200 ease-out"
        href="#couple"
      >
        <span className="material-symbols-outlined">favorite</span>
        <span className="font-[var(--font-family-montserrat)] text-[10px] tracking-[0.15em] font-semibold mt-1">
          Couple
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-secondary active:scale-95 transition-transform duration-200 ease-out"
        href="#event"
      >
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="font-[var(--font-family-montserrat)] text-[10px] tracking-[0.15em] font-semibold mt-1">
          Event
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-secondary active:scale-95 transition-transform duration-200 ease-out"
        href="#gallery"
      >
        <span className="material-symbols-outlined">photo_library</span>
        <span className="font-[var(--font-family-montserrat)] text-[10px] tracking-[0.15em] font-semibold mt-1">
          Gallery
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-secondary active:scale-95 transition-transform duration-200 ease-out"
        href="#rsvp"
      >
        <span className="material-symbols-outlined">mail</span>
        <span className="font-[var(--font-family-montserrat)] text-[10px] tracking-[0.15em] font-semibold mt-1">
          RSVP
        </span>
      </a>
    </nav>
  );
}
