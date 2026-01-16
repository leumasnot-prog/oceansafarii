"use client";

import { Waves, CheckCircle } from "lucide-react";
import { cta } from "@/data/siteContent";
import { TypewriterHighlight } from "./TypewriterHighlight";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FinalCallToAction() {
    const { t, language } = useLanguage();

    // Dynamic subtext based on language
    const subtext = language === "pt"
        ? "Não é apenas um *mergulho*. É uma *expedição científica* e visual no santuário de *Ilhabela* com quem entende do oceano."
        : "It's not just a *dive*. It's a *scientific expedition* and visual journey in the sanctuary of *Ilhabela* with someone who understands the ocean.";

    return (
        <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden py-32">
            {/* Immersive Deep Sea Background */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-b from-[#0F172A] via-[#042f2e] to-[#011627]`}>
                {/* Texture/Noise Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

                {/* Glow/Light Beam Effects */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full" />
            </div>

            {/* Content Container (Refined Dark Glass Card) */}
            <div className="relative z-10 w-full max-w-4xl mx-4">
                <div
                    className="relative overflow-hidden rounded-[3rem] border border-teal-500/20 p-8 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl bg-navy-900/40"
                    style={{
                        boxShadow: 'inset 0 0 20px rgba(45, 212, 191, 0.05)',
                    }}
                >
                    {/* Top Decorative Icon */}
                    <div className="flex justify-center mb-10">
                        <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20">
                            <Waves
                                className="h-10 w-10 text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]"
                                strokeWidth={1.5}
                            />
                        </div>
                    </div>

                    {/* Headline with Bioluminescent Effect */}
                    <h2 className="mb-8 font-nunito text-5xl font-extrabold text-white md:text-7xl tracking-tight leading-tight">
                        {t("finalCta.title")} <br className="hidden md:block" />
                        <span className="relative inline-block mt-2">
                            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                                {t("finalCta.titleHighlight")}
                            </span>
                        </span> {t("finalCta.subtitle")}
                    </h2>

                    {/* Subtext */}
                    <TypewriterHighlight
                        text={subtext}
                        className="mx-auto mb-12 max-w-2xl font-inter text-lg md:text-xl text-slate-300/90 leading-relaxed text-center"
                        highlightClassName="text-teal-400"
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row mb-16">
                        <a
                            href={cta.primary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3 rounded-full bg-teal-500 px-10 py-5 text-xl font-bold text-white transition-all hover:bg-teal-400 hover:shadow-[0_0_40px_rgba(20,184,166,0.6)] hover:scale-105 active:scale-95"
                        >
                            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.271.607-1.444.159-.173.346-.217.462-.217.115 0 .23 0 .331.005.109.004.258-.041.404.31.145.352.495 1.206.538 1.292.043.087.072.188.014.303-.058.115-.087.188-.173.289-.087.101-.183.226-.263.303-.092.088-.188.188-.081.371.107.182.474.782.997 1.25.674.601 1.242.787 1.416.874.174.087.275.072.376-.044.101-.116.434-.506.549-.68.116-.174.232-.145.391-.087.159.058 1.012.477 1.186.564.173.087.289.13.332.202.043.073.043.419-.101.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.528 3.653 1.439 5.161l-1.439 5.339 5.485-1.439A9.954 9.954 0 0 0 12 22c5.522 0 10-4.478 10-10S17.522 2 12 2zm0 18c-1.724 0-3.33-.538-4.66-1.455l-3.23.847.859-3.181A7.957 7.957 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                            </svg>
                            {t("finalCta.whatsappButton")}
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-3 group">
                            <div className="p-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                                <CheckCircle className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="font-medium text-slate-300 text-sm md:text-base">{t("finalCta.badges.spots")}</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="p-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                                <CheckCircle className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="font-medium text-slate-300 text-sm md:text-base">{t("finalCta.badges.equipment")}</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="p-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                                <CheckCircle className="h-5 w-5 text-teal-400" />
                            </div>
                            <span className="font-medium text-slate-300 text-sm md:text-base">{t("finalCta.badges.guide")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
