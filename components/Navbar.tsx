"use client";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsScrolled(latest > 0.02);
    });

    const toggleLanguage = () => {
        setLanguage(language === "pt" ? "en" : "pt");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${isScrolled ? "backdrop-blur-xl" : ""
                }`}
            style={{
                background: isScrolled ? 'rgba(15, 23, 42, 0.7)' : 'transparent',
            }}
        >
            {/* Logo - OCEAN SAFARI - Clicável para ir ao topo */}
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="tracking-[0.4em] uppercase cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                    color: '#F8FAFC',
                    fontWeight: 300, // Lexend Light
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                }}
            >
                O C E A N &nbsp; S A F A R I
            </button>

            {/* Center Navigation - Lexend Light */}
            <div className="hidden md:flex items-center gap-8">
                {[
                    { label: t("nav.home"), href: '#hero' },
                    { label: t("nav.about"), href: '#about' },
                    { label: t("nav.testimonials"), href: '#depoimentos' },
                    { label: t("nav.contact"), href: '#contato' }
                ].map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="transition-opacity hover:opacity-70"
                        style={{
                            color: 'rgba(248, 250, 252, 0.9)',
                            fontWeight: 300, // Lexend Light for nav
                            fontSize: '0.875rem'
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Language Switcher */}
            <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-sm font-light transition-all hover:bg-white/10 hover:border-white/30"
            >
                <Globe className="w-4 h-4" />
                <span className="uppercase tracking-wider">
                    {language === "pt" ? "EN" : "PT"}
                </span>
            </motion.button>
        </nav>
    );
}
