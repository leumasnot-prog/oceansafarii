"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollerProps {
    children: ReactNode;
    /** Enable scroll snap between sections */
    enableSnap?: boolean;
    /** Snap strength: 'mandatory' stops exactly, 'proximity' stops near sections */
    snapType?: "mandatory" | "proximity";
}

/**
 * SmoothScroller - Wrapper component for enhanced scrolling experience
 * 
 * Features:
 * - Smooth CSS scroll-behavior
 * - Optional scroll snap between sections
 * - Keyboard navigation support
 * - Performance optimized with will-change hints
 */
export default function SmoothScroller({
    children,
    enableSnap = true,
    snapType = "proximity",
}: SmoothScrollerProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add snap classes to child sections if enabled
        if (enableSnap && containerRef.current) {
            const sections = containerRef.current.querySelectorAll("section[id]");
            sections.forEach((section) => {
                section.classList.add("scroll-snap-section");
            });
        }

        // Keyboard navigation for smooth scrolling
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!containerRef.current) return;

            const scrollAmount = window.innerHeight * 0.8;

            if (e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
                e.preventDefault();
                window.scrollBy({ top: scrollAmount, behavior: "smooth" });
            } else if (e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
                e.preventDefault();
                window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [enableSnap]);

    return (
        <div
            ref={containerRef}
            className={enableSnap ? "scroll-snap-enabled" : ""}
            style={{
                // Apply GPU acceleration
                transform: "translateZ(0)",
            }}
        >
            {children}
        </div>
    );
}

/**
 * SectionWrapper - Wrapper for individual sections with scroll snap point
 */
interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`scroll-snap-section ${className}`}
        >
            {children}
        </section>
    );
}
