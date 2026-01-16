"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypewriterHighlight } from "./TypewriterHighlight";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Badge = ({ children, className, delay, emoji, floatDuration = 3 }: { children: React.ReactNode; className?: string; delay: number; emoji: string; floatDuration?: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0, y: 0 }}
        whileInView={{
            scale: 1,
            opacity: 1,
            y: [0, -12, 0],
        }}
        transition={{
            scale: { delay, type: "spring", stiffness: 260, damping: 20 },
            opacity: { delay, duration: 0.5 },
            y: {
                delay: delay + 0.5,
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }}
        whileHover={{
            scale: 1.15,
            y: -25,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        className={`absolute z-30 flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-white font-bold text-sm backdrop-blur-md shadow-xl cursor-default ${className}`}
    >
        <motion.span
            className="text-xl"
            whileHover={{
                scale: 1.4,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
            }}
            style={{ display: 'inline-block' }}
        >
            {emoji}
        </motion.span>
        <span>{children}</span>
    </motion.div>
);

export default function AboutHero() {
    const { t, language } = useLanguage();

    // Dynamic description based on language
    const description1 = language === "pt"
        ? "Somos movidos por uma paixão incontrolável por todas as formas de vida na Terra. No nosso *Ocean Safari*, não seremos apenas seus instrutores de segurança, mas seus biólogos guias."
        : "We are driven by an uncontrollable passion for all forms of life on Earth. On our *Ocean Safari*, we won't just be your safety instructors, but your biologist guides.";

    const description2 = language === "pt"
        ? "Nossa *missão* é *traduzir o ecossistema marinho para você*, transformando curiosidade em *conhecimento e preservação*."
        : "Our *mission* is to *translate the marine ecosystem for you*, transforming curiosity into *knowledge and preservation*.";

    // Badge translations
    const badges = language === "pt"
        ? { fluent: "Fluentes em Inglês", biologist: "Biólogos", instructor: "Instrutores de Mergulho", nature: "Amantes da Natureza" }
        : { fluent: "Fluent in English", biologist: "Biologists", instructor: "Diving Instructors", nature: "Nature Lovers" };

    const title = language === "pt" ? "Quem somos?" : "Who are we?";

    return (
        <section id="about" className="relative py-32 px-6 bg-slate-50 overflow-hidden flex flex-col items-center">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.25, 0.4, 0.25, 1] // Custom smooth easing
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-lexend)', color: '#008080' }}>
                    {title}
                </h2>
            </motion.div>

            {/* 3D Composition Container */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">

                {/* Layer 1: Círculo BRANCO (fundo) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 rounded-full bg-white border-4 border-teal-400/30 shadow-[0_0_60px_rgba(45,212,191,0.3)] z-0"
                />

                {/* Layer 2: fundo.png - Imagem do oceano (meio) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 0.92 }}
                    whileHover={{ scale: 0.88, rotate: -1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute inset-0 rounded-full overflow-hidden z-5"
                >
                    <Image
                        src="/fundo.png"
                        alt="Ocean Texture"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Layer 3: perfil.png - Foto (frente) */}
                <motion.div
                    initial={{ y: 60, opacity: 0, scale: 0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 0.9 }}
                    whileHover={{ scale: 0.93, rotate: 2 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring", damping: 12 }}
                    className="absolute inset-0 z-10 rounded-full overflow-hidden"
                >
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <Image
                            src="/perfil.png"
                            alt="Daniel Munhoz - Marine Biologist"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Border layer on top */}
                <div className="absolute inset-0 rounded-full border-4 border-teal-400/30 z-20 pointer-events-none" />

                {/* Badges com Emojis Apple */}
                <Badge
                    emoji="🌍"
                    className="top-10 -right-8 md:-right-20"
                    delay={0.8}
                    floatDuration={3.2}
                >
                    {badges.fluent}
                </Badge>

                <Badge
                    emoji="🧬"
                    className="bottom-20 -right-12 md:-right-24"
                    delay={1.0}
                    floatDuration={2.8}
                >
                    {badges.biologist}
                </Badge>

                <Badge
                    emoji="🤿"
                    className="bottom-12 -left-12 md:-left-24"
                    delay={1.2}
                    floatDuration={3.5}
                >
                    {badges.instructor}
                </Badge>

                <Badge
                    emoji="🌿"
                    className="top-24 -left-12 md:-left-20"
                    delay={1.4}
                    floatDuration={3}
                >
                    {badges.nature}
                </Badge>
            </div>

            {/* Persona Name */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 text-center"
            >
                <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-lexend)', color: '#008080' }}>
                    Daniel Munhoz & Larissa Uema
                </h3>
            </motion.div>

            {/* Description Paragraph */}
            <div className="max-w-3xl mt-10 text-center px-4 flex flex-col gap-6">
                <TypewriterHighlight
                    text={description1}
                    className="text-xl md:text-2xl leading-relaxed text-teal-900/80 font-medium"
                />
                <TypewriterHighlight
                    text={description2}
                    className="text-xl md:text-2xl leading-relaxed text-teal-900/80 font-medium"
                    delay={4}
                />
            </div>
        </section>
    );
}
