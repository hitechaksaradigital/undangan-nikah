import { IMAGES } from "../constants/images";

export default function GallerySection() {
  return (
    <section className="py-32 bg-surface" id="gallery">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-family-playfair)] text-[32px] leading-[1.3] font-medium text-primary mb-4 italic">
            Our Moments
          </h2>
          <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary">
            Sekelumit kisah perjalanan cinta kami
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-[600px] md:h-[800px]">
          {/* Large image - spans 2 cols, 2 rows */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-[0.5rem] border border-outline-variant">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              src={IMAGES.gallery1}
              alt="Pasangan muslim bahagia berfoto di taman"
            />
          </div>

          {/* Top right small */}
          <div className="overflow-hidden rounded-[0.5rem] border border-outline-variant">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              src={IMAGES.gallery2}
              alt="Tangan pengantin dengan henna dan cincin nikah"
            />
          </div>

          {/* Top right small 2 */}
          <div className="overflow-hidden rounded-[0.5rem] border border-outline-variant">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              src={IMAGES.gallery3}
              alt="Pasangan pengantin muslim dalam cahaya lembut"
            />
          </div>

          {/* Bottom right wide - spans 2 cols */}
          <div className="col-span-2 overflow-hidden rounded-[0.5rem] border border-outline-variant">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              src={IMAGES.gallery4}
              alt="Pasangan menikmati senja indah bersama"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
