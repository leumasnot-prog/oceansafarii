"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from "framer-motion";
import { Microscope, Compass, MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const FRAME_COUNT = 192;
const IMAGES_FOLDER = "/capturas/";

// Generate frame filenames based on the naming pattern
const getFrameFilename = (index: number): string => {
    const seconds = Math.floor(index / 25); // ~25 frames per second
    const subFrame = index % 25;

    // Base second format: frame_0-00-XX
    const secondStr = seconds.toString().padStart(2, "0");

    if (subFrame === 0) {
        return `frame_0-00-${secondStr}.jpg`;
    }

    // Subframe format: frame_0-00-XX_XXXXXX
    const subFrameValues = ["040000", "080000", "120000", "170000", "210000", "250000", "290000", "330000", "380000", "420000", "460000", "500000", "540000", "580000", "620000", "670000", "710000", "750000", "790000", "830000", "880000", "920000", "960000"];
    const subFrameIndex = Math.min(subFrame - 1, subFrameValues.length - 1);

    return `frame_0-00-${secondStr}_${subFrameValues[subFrameIndex]}.jpg`;
};

export default function HeroScrollSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useLanguage();

    // Animated Title State - usando traduções
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => [
        t("hero.incredible"),
        t("hero.passionate"),
        t("hero.surprising")
    ], [t]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 30,  // Lower = smoother, more fluid motion
        damping: 50,    // Higher = less bounce, more controlled
        mass: 0.5,      // Lower mass = quicker response but still smooth
        restDelta: 0.0001
    });

    const currentIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Parallax effect for text - decoupled for depth
    const textY1 = useTransform(smoothProgress, [0, 0.7], [0, 150]); // Moves slower
    const textY2 = useTransform(smoothProgress, [0, 0.7], [0, 300]); // Moves faster
    const textOpacity = useTransform(smoothProgress, [0, 0.7, 0.85], [1, 1, 0]);
    const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    useEffect(() => {
        const loadImages = async () => {
            // Carregamento paralelo - todas as imagens são carregadas simultaneamente
            const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
                return new Promise<HTMLImageElement | null>((resolve) => {
                    const img = new Image();
                    const filename = getFrameFilename(i);
                    img.src = `${IMAGES_FOLDER}${filename}`;
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(null);
                });
            });

            const loadedImages = await Promise.all(promises);
            // Filtra imagens que falharam, mas mantém a ordem
            setImages(loadedImages.filter((img): img is HTMLImageElement => img !== null));
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    useEffect(() => {
        const render = (index: number) => {
            const canvas = canvasRef.current;
            if (!canvas || images.length === 0) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(index))
            );

            const img = images[frameIndex];
            if (!img) return;

            // Get the DPR to calculate logical dimensions
            const dpr = window.devicePixelRatio || 1;

            // Use logical dimensions (CSS pixels) for calculations
            // canvas.width/height are physical pixels
            const canvasWidth = canvas.width / dpr;
            const canvasHeight = canvas.height / dpr;

            // Clear using logical dimensions (context transform applies DPR)
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            const hRatio = canvasWidth / img.width;
            const vRatio = canvasHeight / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvasWidth - img.width * ratio) / 2;
            const centerShift_y = (canvasHeight - img.height * ratio) / 2;

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        };

        const unsubscribe = currentIndex.on("change", (latest) => {
            render(latest);
        });

        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;
                canvasRef.current.style.width = `${window.innerWidth}px`;
                canvasRef.current.style.height = `${window.innerHeight}px`;

                const ctx = canvasRef.current.getContext("2d");
                if (ctx) ctx.scale(dpr, dpr);

                render(currentIndex.get());
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [currentIndex, images, isLoaded]);

    return (
        <div id="hero" ref={containerRef} className="h-[400vh] w-full relative" style={{ background: '#0A192F' }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                {/* Loading State */}
                {!isLoaded && (
                    <div
                        className="absolute inset-0 flex items-center justify-center z-50"
                        style={{ background: '#0A192F' }}
                    >
                        <div className="text-center">
                            <div
                                className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-t-transparent animate-spin"
                                style={{ borderColor: '#008080', borderTopColor: 'transparent' }}
                            />
                            <p style={{ color: '#F8FAFC', opacity: 0.7 }}>Loading...</p>
                        </div>
                    </div>
                )}

                {/* Hero Content Overlay */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-6 pt-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center max-w-5xl pointer-events-auto"
                    >
                        {/* Glassmorphism Badge - Floating & Interactive */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/50 animate-pulse"
                        >
                            {t("hero.scrollDown")}
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 cursor-pointer"
                            style={{
                                background: 'rgba(255, 255, 255, 0.15)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            {/* Small Icon Circles */}
                            <div className="flex -space-x-1">
                                <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center"
                                    style={{ background: '#EF4444' }}
                                >
                                    <Microscope className="w-3 h-3 text-white" />
                                </div>
                                <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center"
                                    style={{ background: '#F59E0B' }}
                                >
                                    <Compass className="w-3 h-3 text-white" />
                                </div>
                                <div
                                    className="w-6 h-6 rounded-full flex items-center justify-center"
                                    style={{ background: '#10B981' }}
                                >
                                    <MapPin className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <span
                                className="text-sm font-medium"
                                style={{ color: '#F8FAFC' }}
                            >
                                {t("hero.badge")}
                            </span>
                        </motion.div>

                        <motion.h1
                            style={{
                                y: textY1,
                                fontFamily: 'var(--font-lexend), system-ui, sans-serif',
                                color: '#FFFFFF',
                                letterSpacing: '-0.02em'
                            }}
                            className="flex flex-col items-center justify-center text-center font-nunito"
                        >
                            <span className="text-white block mb-2 md:mb-4 text-3xl md:text-5xl font-normal opacity-90">
                                {t("hero.oceanCan")}
                            </span>
                            <span className="relative flex w-full justify-center overflow-visible h-[1.4em] text-5xl md:text-8xl font-bold">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-gradient-text px-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? { y: 0, opacity: 1 }
                                                : { y: titleNumber > index ? -50 : 50, opacity: 0 }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>
                    </motion.div>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
                >
                    <span className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">
                        {t("hero.scrollDown")}
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-white/40" />
                    </motion.div>
                </motion.div>




            </div >
        </div >
    );
}
