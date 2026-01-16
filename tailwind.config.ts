import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Ilhabela Palette - Organic & Scientific
                'ocean-teal': '#008080',      // Emerald-green water of Ilhabela
                'deep-navy': '#0F172A',       // Deep ocean sections background
                'sand-white': '#F8FAFC',      // Surface text color
                'action-green': '#10B981',    // CTA buttons, preservation theme

                // Legacy ocean colors (for compatibility)
                ocean: {
                    teal: '#008080',
                    surface: '#00C4CC',
                    reef: '#005F73',
                    deep: '#0A192F',
                    abyss: '#020205',
                },
            },
            fontFamily: {
                // Nunito for headings - rounded, friendly, modern
                heading: ['var(--font-nunito)', 'sans-serif'],
                display: ['var(--font-nunito)', 'sans-serif'],
                nunito: ['var(--font-nunito)', 'sans-serif'],
                // DM Sans for body text - clean legibility
                sans: ['var(--font-dm-sans)', 'sans-serif'],
                body: ['var(--font-dm-sans)', 'sans-serif'],
            },
            borderRadius: {
                // Organic, flowing borders like water
                'organic': '1.5rem',       // 24px - rounded-2xl equivalent
                'organic-lg': '1.875rem',  // 30px - rounded-3xl equivalent
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: "#008080",    // ocean-teal
                            foreground: "#F8FAFC", // sand-white
                        },
                        secondary: {
                            DEFAULT: "#10B981",    // action-green
                            foreground: "#F8FAFC",
                        },
                        background: "#0F172A",     // deep-navy
                        foreground: "#F8FAFC",     // sand-white
                    },
                },
            },
        }),
    ],
};

export default config;
