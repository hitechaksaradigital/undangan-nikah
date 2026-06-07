import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export default function RSVPSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [wishText, setWishText] = useState("");
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpPhone, setRsvpPhone] = useState("");
  const [guestCount, setGuestCount] = useState("1 Orang");
  const [attendance, setAttendance] = useState<string | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  useEffect(() => {
    fetchWishes();
    fetchGuest();
  }, []);

  const fetchGuest = async () => {
    const slug = new URLSearchParams(window.location.search).get("to");
    if (slug) {
      const { data } = await supabase
        .from("guests")
        .select("name")
        .eq("slug", slug)
        .single();
      if (data) setRsvpName(data.name);
    }
  };

  const fetchWishes = async () => {
    const { data } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setWishes(data);
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    if (diffHours < 1) return "Baru saja";
    return `${diffHours} jam yang lalu`;
  };

  const handleSubmitWish = async () => {
    if (wishText.trim()) {
      const { error } = await supabase.from("wishes").insert({
        name: rsvpName || "Anonim",
        message: wishText,
      });

      if (!error) {
        setWishText("");
        fetchWishes();
      }
    }
  };

  const handleSubmitRSVP = async () => {
    if (rsvpName.trim() && rsvpPhone.trim() && attendance) {
      const { error } = await supabase.from("rsvp").insert({
        name: rsvpName,
        phone: rsvpPhone.replace(/\D/g, ""),
        guest_count: guestCount,
        attendance: attendance,
      });

      if (!error) {
        setRsvpSubmitted(true);
        const phone = rsvpPhone.replace(/\D/g, "");
        const waTarget = phone.startsWith("0") ? "62" + phone.slice(1) : phone;
        const attendanceText = attendance === "hadir" ? "Hadir" : "Tidak Hadir";
        const waMessage = `Halo ${rsvpName},\n\nTerima kasih telah mengonfirmasi kehadiran.\n\nNama: ${rsvpName}\nNo HP: ${rsvpPhone}\nJumlah Tamu: ${guestCount}\nStatus: ${attendanceText}\n\nSemoga dapat hadir dan berbagi kebahagiaan bersama kami.`;

        try {
          await fetch("https://api.fonnte.com/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              target: waTarget,
              message: waMessage,
              token: import.meta.env.VITE_FONTTE_TOKEN,
            }),
          });
        } catch (waError) {
          console.error("Gagal mengirim WhatsApp:", waError);
        }

        setTimeout(() => setRsvpSubmitted(false), 3000);
      }
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
                NOMOR HP
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-secondary-fixed focus:ring-0 focus:border-primary focus:outline-none px-0 py-2 font-[var(--font-family-montserrat)] text-[16px] leading-[1.6]"
                placeholder="Contoh: 08123456789"
                type="tel"
                value={rsvpPhone}
                onChange={(e) => setRsvpPhone(e.target.value)}
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
              className="w-full py-4 bg-on-secondary-fixed text-primary-fixed font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold rounded-[0.25rem] hover:opacity-90 transition-opacity tracking-widest mt-8 cursor-pointer disabled:opacity-50"
              type="button"
              onClick={handleSubmitRSVP}
              disabled={!attendance || !rsvpPhone.trim()}
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
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="p-4 bg-surface-container-lowest border border-outline-variant/20 rounded-[0.25rem]"
              >
                <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] font-semibold mb-1">
                  {wish.name}
                </p>
                <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary">
                  {wish.message}
                </p>
                <p className="text-[10px] text-outline-variant mt-2">
                  {formatTimeAgo(wish.created_at)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
