import { useState, useEffect, useRef } from "react";
import HeroOverlay from "./components/HeroOverlay";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import EventSection from "./components/EventSection";
import GallerySection from "./components/GallerySection";
import GiftSection from "./components/GiftSection";
import RSVPSection from "./components/RSVPSection";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayHidden, setOverlayHidden] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setNavVisible(true);
    document.body.classList.remove("hide-overflow");

    setTimeout(() => {
      setOverlayHidden(true);
    }, 1000);
  };

  // Lock scroll on mount
  useEffect(() => {
    document.body.classList.add("hide-overflow");
    return () => {
      document.body.classList.remove("hide-overflow");
    };
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
      sectionsRef.current.push(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [overlayHidden]);

  return (
    <>
      {/* Hero Overlay */}
      {!overlayHidden && (
        <div
          className="fixed inset-0 z-[100] transition-all duration-1000"
          style={{
            transform: isOpen ? "translateY(-100%)" : "translateY(0)",
          }}
        >
          <HeroOverlay onOpen={handleOpenInvitation} />
        </div>
      )}

      {/* Top Navigation */}
      <TopNav visible={navVisible} />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <CoupleSection />
        <EventSection />
        <GallerySection />
        <GiftSection />
        <RSVPSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Navigation Mobile */}
      <BottomNav visible={navVisible} />
    </>
  );
}

export default App;
