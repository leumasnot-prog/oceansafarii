"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Imagens reais da galeria de expedições
const galleryImages = [
    { src: "/galeria/galeria1.jpg", alt: "Expedição subaquática em Ilhabela" },
    { src: "/galeria/galeria2.jpg", alt: "Vida marinha de Ilhabela" },
    { src: "/galeria/galeria3.jpg", alt: "Mergulho com biólogo" },
    { src: "/galeria/galeria4.jpg", alt: "Biodiversidade marinha" },
    { src: "/galeria/galeria5.jpg", alt: "Encontro com vida marinha" },
    { src: "/galeria/galeria6.jpg", alt: "Ocean Safari aventura" },
    { src: "/galeria/galeria7.jpg", alt: "Mundo subaquático" },
    { src: "/galeria/galeria8.jpg", alt: "Expedição guiada" },
    { src: "/galeria/galeria9.jpg", alt: "Natureza preservada" },
];

export default function GallerySection() {
    const { t } = useLanguage();

    return (
        <section id="galeria" className="relative min-h-screen bg-[#050A14] overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Gallery Container */}
            <div className="relative h-screen">
                <InfiniteGallery
                    images={galleryImages}
                    speed={1.2}
                    visibleCount={12}
                    className="h-full w-full"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-center px-6">
                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.25, 0.4, 0.25, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
                    >
                        <Camera className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-teal-300 font-medium uppercase tracking-widest">
                            {t("gallery.tag")}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                            ease: [0.25, 0.4, 0.25, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mix-blend-exclusion"
                        style={{ fontFamily: "var(--font-lexend)" }}
                    >
                        <span className="italic" style={{ fontFamily: "var(--font-dm-serif)" }}>
                            {t("gallery.title")}
                        </span>{" "}
                        {t("gallery.titleHighlight")}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.2,
                            ease: [0.25, 0.4, 0.25, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-slate-400 text-lg md:text-xl mt-6 max-w-xl mix-blend-exclusion"
                    >
                        {t("gallery.subtitle")}
                    </motion.p>
                </div>

                {/* Navigation hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-0 right-0 text-center font-mono uppercase text-[11px] font-semibold pointer-events-none"
                >
                    <p className="text-white/60">{t("gallery.navHint")}</p>
                    <p className="text-white/30">{t("gallery.autoplayHint")}</p>
                </motion.div>
            </div>
        </section>
    );
}
