"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Map,
    Microscope,
    CheckCircle2,
    ChevronRight,
    Search
} from "lucide-react";
import { cta } from "@/data/siteContent";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const BentoCard = ({
    children,
    className = "",
    delay = 0
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            duration: 0.9,
            delay,
            ease: [0.25, 0.4, 0.25, 1] // Smooth cubic bezier
        }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{
            scale: 1.02,
            borderColor: "rgba(20, 184, 166, 0.5)",
            transition: { duration: 0.3, ease: "easeOut" }
        }}
        className={`relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

export default function SafariExpedition() {
    const { t, language } = useLanguage();

    // Get encounters list from translations
    const encounterItems = language === "pt"
        ? ["Baleias", "Golfinhos", "Tubarões", "Tartarugas-Verdes", "Raias Chita", "Cardumes de Frades", "Vida Micro (Nudibrânquios)"]
        : ["Whales", "Dolphins", "Sharks", "Green Sea Turtles", "Spotted Eagle Rays", "Schools of Fish", "Micro Life (Nudibranchs)"];

    return (
        <section id="expedicao" className="relative py-32 px-6 bg-[#0B1121] overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                        style={{ fontFamily: 'var(--font-lexend)' }}
                    >
                        {t("expedition.title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto"
                    >
                        {t("expedition.subtitle")}
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">

                    {/* Card 1: Navegação Estratégica (Wide) */}
                    <BentoCard className="md:col-span-2 p-8 flex flex-col justify-end" delay={0.1}>
                        {/* Background Map Texture Decor */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-500" />
                                <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-500" />
                                <path d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-500" />
                            </svg>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-teal-500/20">
                                    <Map className="w-6 h-6 text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t("expedition.navigation.title")}</h3>
                            </div>
                            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                                {t("expedition.navigation.description")}
                            </p>
                        </div>
                    </BentoCard>

                    {/* Card 2: Briefing Científico (Square) */}
                    <BentoCard className="p-8 flex flex-col justify-center text-center" delay={0.2}>
                        <div className="mx-auto p-4 rounded-full bg-blue-500/20 w-fit mb-6">
                            <Microscope className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{t("expedition.briefing.title")}</h3>
                        <p className="text-slate-400">
                            {t("expedition.briefing.description")}
                        </p>
                    </BentoCard>

                    {/* Card 3: Encontros Possíveis (Vertical) */}
                    <BentoCard className="md:row-span-2 p-8" delay={0.3}>
                        <div className="h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-emerald-500/20">
                                    <Search className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{t("expedition.encounters.title")}</h3>
                            </div>

                            <ul className="space-y-6 flex-grow">
                                {encounterItems.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-center gap-3 text-slate-300 font-medium"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-xs text-slate-500 italic uppercase tracking-widest">
                                    {t("expedition.encounters.disclaimer")}
                                </p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 4: CTA (Wide) */}
                    <BentoCard className="md:col-span-2 bg-teal-600/90 border-teal-400/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8" delay={0.4}>
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-3xl font-bold text-white">{t("expedition.cta.title")}</h3>
                            <p className="text-teal-50/80 font-medium">{t("expedition.cta.subtitle")}</p>
                        </div>

                        <motion.a
                            href={cta.primary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-teal-700 font-bold rounded-2xl flex items-center gap-2 shadow-xl shadow-teal-900/20 transition-all hover:bg-teal-50"
                        >
                            {t("expedition.cta.button")}
                            <ChevronRight className="w-5 h-5" />
                        </motion.a>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
}
