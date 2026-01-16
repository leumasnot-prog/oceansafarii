"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Instagram,
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    MoreHorizontal,
    Home,
    Search,
    PlusSquare,
    Play,
    User,
    Camera
} from "lucide-react";
import { footer } from "@/data/siteContent";
import { TypewriterHighlight } from "./TypewriterHighlight";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const IPhoneMockup = () => {
    // Reels content
    const reelsContent = [
        { src: "/insta/videoinsta0.mp4", title: "Encontro inesquecível com a vida marinha! 🐋", likes: "12.4k", comments: "842" },
        { src: "/insta/videoinsta1.mp4", title: "A transparência desse mar é surreal... 🌊", likes: "8.9k", comments: "315" },
        { src: "/insta/videoinsta2.mp4", title: "Expedição Safari: Explorando o desconhecido. ⚓", likes: "15.2k", comments: "1.2k" },
        { src: "/insta/videoinsta3.mp4", title: "O oceano real, sem filtros. Apenas a natureza. ✨", likes: "20.1k", comments: "2.5k" },
    ];

    // Mouse movement for 3D effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const x = (e.clientX - rect.left) / width - 0.5;
        const y = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative mx-auto w-[280px] h-[580px] md:w-[310px] md:h-[630px] z-20 group"
            >
                {/* iPhone Frame - Deep Black */}
                <div className="absolute inset-0 bg-black rounded-[3rem] border-[14px] border-[#0a0a0a] shadow-[0_0_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10">

                    {/* Metallic Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#1a1a1a] translate-x-3" />
                    </div>

                    {/* Main Screen Content */}
                    <div className="h-full w-full bg-black overflow-y-auto hide-scrollbar relative">
                        {/* Immersive Reels Feed (No Header/Footer as requested) */}
                        <div className="flex flex-col gap-[1px]">
                            {reelsContent.map((reel, i) => (
                                <div key={i} className="relative aspect-[9/16] w-full bg-[#050505] overflow-hidden group/reel text-left">
                                    <video
                                        src={reel.src}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />

                                    {/* Minimalist Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                                        <div className="flex items-end justify-between gap-4 mb-2 text-left">
                                            <div className="space-y-4 flex-1">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] shadow-lg">
                                                        <div className="w-full h-full rounded-full bg-black p-[1.5px] overflow-hidden">
                                                            <img src="/insta/instaperfil.jpg" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[12px] font-bold text-white drop-shadow-md">thecrazybiology</span>
                                                        <span className="text-[10px] text-white/60">Ocean Safari</span>
                                                    </div>
                                                </div>
                                                <p className="text-[12px] text-white/90 line-clamp-2 drop-shadow-md leading-relaxed font-medium">
                                                    {reel.title} 🌊 Registros reais da nossa última expedição!
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-center gap-6 text-white/80">
                                                <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                                    <Heart className="w-7 h-7 drop-shadow-lg" />
                                                    <span className="text-[11px] font-bold">{reel.likes}</span>
                                                </div>
                                                <div className="flex flex-col items-center gap-1 hover:text-white transition-colors cursor-pointer">
                                                    <MessageCircle className="w-7 h-7 drop-shadow-lg" />
                                                    <span className="text-[11px] font-bold">{reel.comments}</span>
                                                </div>
                                                <Send className="w-7 h-7 drop-shadow-lg hover:text-white transition-colors cursor-pointer" />
                                                <Bookmark className="w-7 h-7 drop-shadow-lg hover:text-white transition-colors cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Immersive Progress Bar */}
                                    <div className="absolute bottom-0 left-0 h-[3px] bg-white/10 w-full">
                                        <motion.div
                                            className="h-full bg-white shadow-[0_0_12px_white]"
                                            animate={{ width: ["0%", "100%"] }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Camera Lens Reflection Overlay */}
                <div className="absolute inset-[14px] rounded-[2.1rem] bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none z-30" />
            </motion.div>

            {/* Ambient Lighting Orbs */}
            <motion.div
                style={{ x: rotateY, y: rotateX }}
                className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                style={{ x: rotateY, y: rotateX }}
                className="absolute -bottom-20 -left-20 w-48 h-48 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"
            />
        </div>
    );
};

export default function InstagramFeedSection() {
    const { language } = useLanguage();

    // Translations for this section
    const content = language === "pt" ? {
        tag: "Acompanhe nossa jornada",
        headline: "Bastidores das Aventuras",
        description: "Acompanhe as *experiências* de quem já viveu a *magia do oceano* com o *Ocean Safari* em *Ilhabela*.",
        expeditions: "Expedições",
        followers: "Seguidores",
        likes: "Curtidas",
    } : {
        tag: "Follow our journey",
        headline: "Behind the Adventures",
        description: "Follow the *experiences* of those who have lived the *magic of the ocean* with *Ocean Safari* in *Ilhabela*.",
        expeditions: "Expeditions",
        followers: "Followers",
        likes: "Likes",
    };

    return (
        <section id="social" className="relative py-24 px-6 bg-gradient-to-br from-[#0B1121] to-[#0F172A] overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* Left Column: Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 0.4, 0.25, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider">
                            <Camera className="w-4 h-4" />
                            {content.tag}
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: 'var(--font-lexend)' }}>
                            {content.headline}
                        </h2>

                        <TypewriterHighlight
                            text={content.description}
                            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.2,
                            ease: [0.25, 0.4, 0.25, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4"
                    >
                        <a
                            href={footer.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-slate-400 font-bold rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-pink-900/20 group"
                        >
                            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            @thecrazybiology
                        </a>

                        <a
                            href={footer.social.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-7 py-4 bg-white/5 text-slate-400 font-bold rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 hover:bg-black hover:text-white hover:border-white/20 hover:shadow-xl hover:shadow-slate-900/40"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                            </svg>
                            TikTok
                        </a>

                        <a
                            href={footer.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 text-slate-400 font-bold rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 hover:bg-red-600 hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-red-900/20"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            YouTube
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.4,
                            ease: [0.25, 0.4, 0.25, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex justify-center lg:justify-start gap-8 text-white text-sm font-medium"
                    >
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">+130</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">{content.expeditions}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">+110 mil</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">{content.followers}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">+2M</span>
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">{content.likes}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: interactive Device */}
                <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                    {/* Shadow for the floating phone */}
                    <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-48 h-12 bg-black/40 blur-2xl rounded-full scale-150 z-0" />

                    <IPhoneMockup />

                    {/* Floating Decorative Elements around phone */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute top-1/2 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

            </div>
        </section>
    );
}
