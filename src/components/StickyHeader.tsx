import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const logo = "/images/findolor-logo.svg";
const PHONE_NUMBER = "573186912799";

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling past hero section (approximately 100vh)
      setIsVisible(scrollY > window.innerHeight * 0.5);
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div
            className={`
              glass-card border-b border-border/50
              ${isScrolled ? "shadow-lg" : ""}
            `}
            style={{
              background: "hsla(0, 0%, 100%, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="container">
              <div className="flex items-center justify-between h-16 md:h-18">
                {/* Logo */}
                <a href="#" className="flex items-center">
                  <img
                    src={logo}
                    alt="Findolor"
                    className="h-9 md:h-10 w-auto"
                  />
                </a>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-3">
                  {/* Click-to-Call - visible on mobile */}
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    className="md:hidden"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 px-3 border-primary text-primary hover:bg-primary/10 rounded-xl"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </a>

                  {/* Desktop phone */}
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>318 691 2799</span>
                  </a>

                  {/* CTA Button */}
                  <a href="#agendar">
                    <Button
                      className="btn-cta h-10 md:h-11 px-4 md:px-6 rounded-xl text-sm md:text-base font-semibold"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Agendar Cita</span>
                      <span className="sm:hidden">Agendar</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
