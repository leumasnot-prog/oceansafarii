"use client";

import React from "react";
import { motion } from "framer-motion";

interface TypewriterHighlightProps {
    text: string;
    className?: string;
    delay?: number;
    highlightClassName?: string;
}

export const TypewriterHighlight: React.FC<TypewriterHighlightProps> = ({ text, className, delay = 0, highlightClassName = "text-teal-600" }) => {
    // Regex to split text by *, keeping the * as delimiters to identify highlighted parts
    const parts = text.split(/(\*[^*]+\*)/g);

    // Container variants for staggering children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        },
    };

    const highlightVariants = {
        hidden: { width: "0%" },
        visible: {
            width: "100%",
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2 // Small delay after the word appears
            } as any
        },
    };

    return (
        <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className={`${className}`}
        >
            {parts.filter(part => part !== "").map((part, index) => {
                const isHighlighted = part.startsWith("*") && part.endsWith("*");
                const cleanPart = isHighlighted ? part.slice(1, -1) : part;

                if (isHighlighted) {
                    return (
                        <span key={index} className="relative inline-block">
                            <motion.span
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className={`relative z-10 font-bold inline-block cursor-default ${highlightClassName}`}
                            >
                                {cleanPart}
                            </motion.span>
                            <motion.span
                                variants={highlightVariants}
                                className="absolute bottom-1 left-0 h-[40%] bg-teal-400/30 z-0 rounded-sm"
                                style={{ originX: 0 }}
                            />
                        </span>
                    );
                }

                // Split normal text into words
                const words = part.split(" ");
                return words.map((word, wordIndex) => (
                    <motion.span
                        key={`${index}-${wordIndex}`}
                        variants={itemVariants}
                        className="inline-block"
                    >
                        {word}{wordIndex < words.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                ));
            })}
        </motion.p>
    );
};
