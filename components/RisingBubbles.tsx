"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function RisingBubbles() {
    // Generate bubbles once on the client side
    const bubbles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 40 + 10, // 10px to 50px
            left: `${Math.random() * 100}%`,
            initialTop: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 15, // 15s to 25s
            delay: Math.random() * -20, // Negative delay so they start at different points in their animation
            wiggle: Math.random() * 40 - 20,
        }));
    }, []);

    return (
        <div className="absolute top-[100vh] inset-x-0 bottom-0 overflow-hidden pointer-events-none z-0">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute bg-teal-200/5 border border-white/5 rounded-full backdrop-blur-[0.5px]"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.left,
                        top: bubble.initialTop,
                    }}
                    animate={{
                        y: [0, -1000], // Each bubble rises 1000px
                        x: [0, bubble.wiggle, 0, -bubble.wiggle, 0],
                        opacity: [0, 1, 1, 0], // Fade in and out
                    }}
                    transition={{
                        y: {
                            duration: bubble.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: bubble.delay,
                        },
                        x: {
                            duration: bubble.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        opacity: {
                            duration: bubble.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: bubble.delay,
                        }
                    }}
                />
            ))}
        </div>
    );
}
