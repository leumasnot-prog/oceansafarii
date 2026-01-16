"use client";

import { motion } from "framer-motion";
import { MapPin, Instagram, MessageCircle, Youtube, Mail, ArrowUpRight, Waves } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { footer } from "@/data/siteContent";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Instagram, href: footer.social.instagram, label: "Instagram" },
        { icon: MessageCircle, href: footer.social.whatsapp, label: "WhatsApp" },
        { icon: TikTokIcon, href: footer.social.tiktok, label: "TikTok" },
        { icon: Youtube, href: footer.social.youtube, label: "YouTube" },
    ];

    const quickLinks = [
        { label: t("footer.links.home"), href: "#hero" },
        { label: t("footer.links.expedition"), href: "#expedicao" },
        { label: t("footer.links.gallery"), href: "#galeria" },
        { label: t("footer.links.contact"), href: "#contato" },
    ];

    return (
        <footer className="relative z-10 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5">
            {/* Decorative wave divider */}
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-teal-500/20">
                                <Waves className="w-6 h-6 text-teal-400" />
                            </div>
                            <span
                                className="text-lg font-semibold tracking-wide text-white"
                                style={{ fontFamily: "var(--font-lexend)" }}
                            >
                                Ocean Safari
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                            "{t("footer.tagline")}"
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPin className="w-4 h-4 text-teal-500" />
                            <span>{t("footer.location")}</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                            {t("footer.links.home")}
                        </h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                            {t("footer.social")}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
                            {t("footer.newsletter.title")}
                        </h4>
                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder={t("footer.newsletter.placeholder")}
                                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-white/10 transition-all"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-5 py-3 rounded-xl bg-teal-600 text-white text-sm font-medium hover:bg-teal-500 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                </motion.button>
                            </div>
                            <p className="text-xs text-slate-500">
                                {t("footer.newsletter.button")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-600">
                            © {currentYear} Ocean Safari. {t("footer.copyright").replace(/© \d{4} Ocean Safari\. /, "")}
                        </p>

                        <div className="flex items-center gap-6 text-xs text-slate-600">
                            <span className="flex items-center gap-2">
                                🇧🇷 Ilhabela, SP
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        </footer>
    );
}
