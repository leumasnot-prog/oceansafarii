"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["incrível", "apaixonante", "surpreendente"],
        []
    );

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

    return (
        <div className="w-full relative z-20"> {/* z-20 para ficar acima do background parallax se houver */}
            <div className="container mx-auto px-4">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

                    {/* Badge Superior */}
                    <div>
                        <Button variant="secondary" size="sm" className="gap-4 rounded-full bg-teal-900/50 text-teal-100 hover:bg-teal-900 border border-teal-700 backdrop-blur-sm">
                            Expedições em Ilhabela <Anchor className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Título Principal */}
                    <div className="flex gap-4 flex-col items-center">
                        <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-bold font-nunito text-white drop-shadow-lg">
                            <span className="text-teal-300 block mb-2 md:inline md:mb-0 md:mr-3">O oceano pode ser</span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 h-[1.2em]">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-bold text-white"
                                        initial={{ opacity: 0, y: 50 }} // Ajustei animação para vir de baixo
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
                        </h1>

                        {/* Subtítulo / Bio */}
                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-200 max-w-2xl text-center font-medium drop-shadow-md">
                            Te levo para viver, entender e proteger a natureza.
                            <br className="hidden md:block" />
                            Ilhabela-SP | Biólogo & Instrutor de Mergulho.
                        </p>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-row gap-4 mt-4">
                        <Button size="lg" className="gap-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg shadow-teal-500/20 border-0">
                            Agende sua Aventura <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="gap-4 rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-md">
                            Conheça o Guia <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Hero };
