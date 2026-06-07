import { useState, useEffect } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false,
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function EventSection() {
  const weddingDate = new Date("Aug 24, 2025 09:00:00");
  const { days, hours, minutes, seconds, expired } = useCountdown(weddingDate);

  return (
    <section className="py-32 bg-surface-container-low" id="event">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Event Cards */}
          <div className="space-y-8">
            {/* Akad Nikah */}
            <div className="p-8 md:p-12 border border-outline-variant/30 bg-surface/50 rounded-[0.5rem] shadow-[0px_4px_20px_rgba(26,26,26,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <h4 className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-primary mb-6">
                AKAD NIKAH
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    calendar_today
                  </span>
                  <p className="font-[var(--font-family-montserrat)] text-[18px] leading-[1.6] tracking-[0.01em] font-medium">
                    Sabtu, 24 Agustus 2025
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]">
                    09.00 - 11.00 WIB
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]">
                    Masjid Istiqlal Jakarta
                    <br />
                    Jl. Taman Wijaya Kusuma, Jakarta Pusat
                  </p>
                </div>
              </div>
              <button className="mt-8 px-6 py-2 bg-on-secondary-fixed text-primary-fixed font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold rounded-[0.75rem] hover:scale-105 transition-transform cursor-pointer">
                LIHAT LOKASI
              </button>
            </div>

            {/* Resepsi */}
            <div className="p-8 md:p-12 border border-primary-container/30 bg-surface/80 rounded-[0.5rem] shadow-[0px_4px_20px_rgba(26,86,168,0.08)] relative overflow-hidden group">
              <h4 className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-primary mb-6">
                RESEPSI
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    calendar_today
                  </span>
                  <p className="font-[var(--font-family-montserrat)] text-[18px] leading-[1.6] tracking-[0.01em] font-medium">
                    Sabtu, 24 Agustus 2025
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]">
                    18.30 - 21.00 WIB
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]">
                    Hotel Mulia Senayan
                    <br />
                    Jl. Asia Afrika, Jakarta Pusat
                  </p>
                </div>
              </div>
              <button className="mt-8 px-6 py-2 border border-primary text-primary font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold rounded-[0.75rem] hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer">
                TAMBAHKAN KE KALENDER
              </button>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex flex-col justify-center h-full text-center lg:text-left space-y-12">
            <div>
              <h2 className="font-[var(--font-family-playfair)] text-[40px] leading-[1.2] tracking-[-0.01em] font-semibold text-on-surface mb-6">
                Momen Menuju Hari Bahagia
              </h2>
              <p className="font-[var(--font-family-montserrat)] text-[18px] leading-[1.6] tracking-[0.01em] text-secondary">
                Waktu terus berjalan menuju saat di mana ijab kabul akan
                diucapkan di hadapan Allah SWT dan para saksi.
              </p>
            </div>

            {expired ? (
              <div className="font-[var(--font-family-playfair)] text-[24px] leading-[1.4] font-medium text-primary">
                HARI BAHAGIA TELAH TIBA
              </div>
            ) : (
              <div className="flex justify-center lg:justify-start gap-4 md:gap-8">
                {[
                  { value: days, label: "HARI" },
                  { value: hours, label: "JAM" },
                  { value: minutes, label: "MENIT" },
                  { value: seconds, label: "DETIK" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center p-4 min-w-[80px] bg-white border border-outline-variant/30 rounded-[0.25rem]"
                  >
                    <span className="font-[var(--font-family-playfair)] text-[32px] leading-[1.3] font-bold text-primary">
                      {pad(item.value)}
                    </span>
                    <span className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary scale-75">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
