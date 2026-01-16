"use client";

import React from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export const TypingText = ({ text, className, delay = 0 }: TypingTextProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.p
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ display: "inline-block", marginRight: "5px" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
};
