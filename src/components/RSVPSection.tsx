import { useState } from "react";

interface Wish {
  name: string;
  message: string;
  time: string;
}

const initialWishes: Wish[] = [
  {
    name: "Keluarga Bpk. Santoso",
    message:
      "Selamat menempuh hidup baru Aurelia & Julian! Semoga menjadi keluarga yang sakinah, mawadah, warahmah.",
    time: "2 jam yang lalu",
  },
  {
    name: "Riana Putri",
    message:
      "Happy wedding ya guys! Lancar sampai hari H dan bahagia selalu selamanya!",
    time: "5 jam yang lalu",
  },
];

export default function RSVPSection() {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [wishText, setWishText] = useState("");
  const [rsvpName, setRsvpName] = useState("");
  const [guestCount, setGuestCount] = useState("1 Orang");
  const [attendance, setAttendance] = useState<string | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleSubmitWish = () => {
    if (wishText.trim()) {
      setWishes([
        {
          name: rsvpName || "Anonim",
          message: wishText,
          time: "Baru saja",
        },
        ...wishes,
      ]);
      setWishText("");
    }
  };

  const handleSubmitRSVP = () => {
    if (rsvpName.trim()) {
      setRsvpSubmitted(true);
      setTimeout(() => setRsvpSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-32 bg-surface" id="rsvp">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 gap-20">
        {/* RSVP Form */}
        <div>
          <h2 className="font-[var(--font-family-playfair)] text-[32px] leading-[1.3] font-medium text-primary mb-8 italic">
            Konfirmasi Kehadiran
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary mb-2 block">
                NAMA LENGKAP
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-secondary-fixed focus:ring-0 focus:border-primary focus:outline-none px-0 py-2 font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]"
                placeholder="Masukkan nama Anda"
                type="text"
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
              />
            </div>
            <div>
              <label className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary mb-2 block">
                JUMLAH TAMU
              </label>
              <select
                className="w-full bg-transparent border-0 border-b border-secondary-fixed focus:ring-0 focus:border-primary focus:outline-none px-0 py-2 font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              >
                <option>1 Orang</option>
                <option>2 Orang</option>
              </select>
            </div>
            <div>
              <label className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary mb-2 block">
                STATUS KEHADIRAN
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    className="text-primary focus:ring-primary border-outline accent-primary"
                    name="attendance"
                    type="radio"
                    checked={attendance === "hadir"}
                    onChange={() => setAttendance("hadir")}
                  />
                  <span className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]">
                    Hadir
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    className="text-primary focus:ring-primary border-outline accent-primary"
                    name="attendance"
                    type="radio"
                    checked={attendance === "tidak"}
                    onChange={() => setAttendance("tidak")}
                  />
                  <span className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]">
                    Tidak Hadir
                  </span>
                </label>
              </div>
            </div>
            <button
              className="w-full py-4 bg-on-secondary-fixed text-primary-fixed font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold rounded-[0.25rem] hover:opacity-90 transition-opacity tracking-widest mt-8 cursor-pointer"
              type="button"
              onClick={handleSubmitRSVP}
            >
              {rsvpSubmitted ? "✓ KONFIRMASI TERKIRIM" : "KIRIM KONFIRMASI"}
            </button>
          </form>
        </div>

        {/* Wishes Wall */}
        <div>
          <h2 className="font-[var(--font-family-playfair)] text-[32px] leading-[1.3] font-medium text-primary mb-8 italic">
            Ucapan &amp; Doa
          </h2>
          <div className="space-y-6 mb-8">
            <textarea
              className="w-full bg-surface-container-low border border-outline-variant/30 rounded-[0.5rem] p-4 font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] focus:ring-1 focus:ring-primary focus:outline-none h-32 resize-none"
              placeholder="Tuliskan ucapan dan doa restu Anda..."
              value={wishText}
              onChange={(e) => setWishText(e.target.value)}
            ></textarea>
            <button
              className="px-8 py-3 border border-primary text-primary font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold rounded-[0.75rem] hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
              onClick={handleSubmitWish}
            >
              KIRIM UCAPAN
            </button>
          </div>

          {/* Wishes List */}
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="p-4 bg-surface-container-lowest border border-outline-variant/20 rounded-[0.25rem]"
              >
                <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] font-semibold mb-1">
                  {wish.name}
                </p>
                <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary">
                  {wish.message}
                </p>
                <p className="text-[10px] text-outline-variant mt-2">
                  {wish.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
