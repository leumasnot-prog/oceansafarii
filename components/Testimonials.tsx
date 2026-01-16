"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const testimonials = [
    {
        text: "Mergulhar com um biólogo faz toda a diferença. Aprendi mais sobre o ecossistema de Ilhabela em um dia do que em anos de mergulho.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Ricardo Mendes",
        role: "Mergulhador Open Water",
    },
    {
        text: "A expedição para a Ilha das Cabras foi mágica. Vimos tartarugas e cavalos-marinhos. A atenção aos detalhes e segurança foi impecável.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Juliana Costa",
        role: "Turista e Bióloga",
    },
    {
        text: "Equipamentos novos e um atendimento super personalizado. O Ocean Safari é, sem dúvida, a melhor escolha em Ilhabela.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Sérgio Silva",
        role: "Fotógrafo Subaquático",
    },
    {
        text: "Levei minha família para o Batismo e todos amaram. O guia teve uma paciência incrível com as crianças. Experiência nota 10!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Carla Oliveira",
        role: "Mãe e Aventureira",
    },
    {
        text: "O conhecimento técnico aliado à paixão pelo oceano torna cada saída única. Recomendo para quem busca profundidade, não só no mergulho.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Marcos Paulo",
        role: "Mergulhador Autônomo",
    },
    {
        text: "Ilhabela tem segredos que só quem entende do mar consegue mostrar. O Ocean Safari nos levou em pontos exclusivos e preservados.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Beatriz Santos",
        role: "Pesquisadora Marinha",
    },
    {
        text: "Serviço VIP do início ao fim. As fotos subaquáticas ficaram profissionais. Um dia inesquecível no santuário marinho.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Thiago Ferraz",
        role: "Entusiasta de Natureza",
    },
    {
        text: "A preocupação com a preservação é real. Não é apenas um passeio, é uma aula de conscientização ambiental.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Aline Rocha",
        role: "Educadora Ambiental",
    },
    {
        text: "Melhor visibilidade que já peguei em Ilhabela, graças à escolha certeira do ponto de mergulho pelo Ocean Safari.",
        image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
        name: "Bruno Lima",
        role: "Mergulhador de Resgate",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
    const { language } = useLanguage();

    // Translated content
    const content = language === "pt" ? {
        tag: "Depoimentos",
        title: "O que nossos exploradores dizem",
        subtitle: "Acompanhe as experiências de quem já viveu a magia do oceano com o Ocean Safari em Ilhabela.",
    } : {
        tag: "Testimonials",
        title: "What our explorers say",
        subtitle: "Follow the experiences of those who have lived the magic of the ocean with Ocean Safari in Ilhabela.",
    };

    return (
        <section id="depoimentos" className="bg-deep-navy py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,128,128,0.1)_0%,transparent_70%)] pointer-events-none" />

            <div className="container z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.1,
                        ease: [0.25, 0.4, 0.25, 1]
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center justify-center max-w-[700px] mx-auto text-center"
                >
                    <div className="flex justify-center">
                        <div className="border border-teal-500/30 bg-teal-500/10 text-teal-400 py-1 px-4 rounded-full text-sm font-medium backdrop-blur-md flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            {content.tag}
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-6 text-white leading-tight">
                        {content.title}
                    </h2>
                    <p className="mt-6 text-lg text-slate-400 max-w-lg">
                        {content.subtitle}
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
                </div>
            </div>
        </section>
    );
};
