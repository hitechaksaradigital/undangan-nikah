import { IMAGES } from "../constants/images";

export default function CoupleSection() {
  return (
    <section className="py-32 bg-surface" id="couple">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-[var(--font-family-playfair)] text-[32px] leading-[1.3] font-medium text-primary mb-4 italic">
            Mempelai
          </h2>
          <div className="w-16 h-[1px] bg-primary-container mx-auto"></div>
        </div>

        {/* Couple Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Groom */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-64 h-80 overflow-hidden rounded-full border border-outline-variant p-2">
              <img
                className="w-full h-full object-cover rounded-full"
                src={IMAGES.groom}
                alt="Foto mempelai pria muslim"
              />
            </div>
            <div>
              <h3 className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-medium text-on-surface mb-2">
                Fulan bin Abdullah, S.T.
              </h3>
              <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary">
                Putra kedua dari Bapak Abdullah &amp; Ibu Siti Aminah
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  className="text-primary hover:opacity-70 transition-opacity"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-64 h-80 overflow-hidden rounded-full border border-outline-variant p-2">
              <img
                className="w-full h-full object-cover rounded-full"
                src={IMAGES.bride}
                alt="Foto mempelai wanita muslimah berhijab"
              />
            </div>
            <div>
              <h3 className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-medium text-on-surface mb-2">
                Fulana binti Rahman, M.Ds.
              </h3>
              <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary">
                Putri pertama dari Bapak Rahman &amp; Ibu Fatimah
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  className="text-primary hover:opacity-70 transition-opacity"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
