"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translations
import { translations, TranslationKey } from "./translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("pt");

    // Load language from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("ocean-safari-lang") as Language | null;
        if (saved && (saved === "pt" || saved === "en")) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("ocean-safari-lang", lang);
    };

    // Translation function with dot notation support
    const t = (key: string): string => {
        const keys = key.split(".");
        let result: unknown = translations[language];

        for (const k of keys) {
            if (result && typeof result === "object" && k in result) {
                result = (result as Record<string, unknown>)[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return typeof result === "string" ? result : key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
