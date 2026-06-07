import { IMAGES } from "../constants/images";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen relative flex items-center justify-center pt-20"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={IMAGES.heroMain}
          alt="Romantic pre-wedding portrait of a couple in elegant attire"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-transparent to-surface"></div>
      </div>

      {/* Content */}
      <div className="text-center px-5 max-w-2xl">
        <p className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-primary mb-6">
          SAVE THE DATE | 24.08.2024
        </p>
        <h2 className="font-[var(--font-family-playfair)] text-[40px] md:text-[64px] leading-[1.2] md:leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em] font-semibold mb-8 italic">
          Love is patient, Love is kind.
        </h2>
        <p className="font-[var(--font-family-montserrat)] text-[18px] leading-[1.6] tracking-[0.01em] text-secondary">
          Kami mengundang Bapak/Ibu/Saudara/i untuk merayakan penyatuan cinta
          abadi kami.
        </p>
      </div>
    </section>
  );
}
