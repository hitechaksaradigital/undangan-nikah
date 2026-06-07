import { useState } from "react";

interface BankCardProps {
  bankName: string;
  accountNumber: string;
  displayNumber: string;
  accountHolder: string;
}

function BankCard({ bankName, accountNumber, displayNumber, accountHolder }: BankCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = accountNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="p-6 bg-surface border border-outline-variant rounded-[0.5rem] flex items-center justify-between">
      <div className="text-left">
        <p className="font-[var(--font-family-montserrat)] text-[12px] leading-[1.2] tracking-[0.15em] font-semibold text-secondary">
          {bankName}
        </p>
        <p className="font-[var(--font-family-montserrat)] text-[18px] leading-[1.6] tracking-[0.01em] font-bold tracking-widest mt-1">
          {displayNumber}
        </p>
        <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-on-surface-variant">
          A.n. {accountHolder}
        </p>
      </div>
      <button
        className="p-3 text-primary hover:bg-primary-container/20 rounded-full transition-colors cursor-pointer"
        onClick={copyToClipboard}
      >
        <span className="material-symbols-outlined">
          {copied ? "check" : "content_copy"}
        </span>
      </button>
    </div>
  );
}

export default function GiftSection() {
  return (
    <section className="py-32 bg-surface-container">
      <div className="max-w-xl mx-auto px-5 text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-6">
          featured_seasonal_and_gifts
        </span>
        <h2 className="font-[var(--font-family-playfair)] text-[32px] leading-[1.3] font-medium text-on-surface mb-6">
          Kado Digital
        </h2>
        <p className="font-[var(--font-family-montserrat)] text-[16px] leading-[1.6] text-secondary mb-12">
          Doa restu Anda adalah kado terindah. Namun jika Anda ingin memberikan
          kado tanda kasih, Anda dapat memberikannya melalui:
        </p>
        <div className="space-y-4">
          <BankCard
            bankName="BANK BCA"
            accountNumber="1234567890"
            displayNumber="1234 5678 90"
            accountHolder="Aurelia Widjaja"
          />
          <BankCard
            bankName="BANK MANDIRI"
            accountNumber="0987654321"
            displayNumber="0987 6543 21"
            accountHolder="Julian Pratama"
          />
        </div>
      </div>
    </section>
  );
}
