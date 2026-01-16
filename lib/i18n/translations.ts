export type TranslationKey = string;

interface TranslationSet {
    nav: {
        home: string;
        about: string;
        testimonials: string;
        contact: string;
        gallery: string;
    };
    hero: {
        badge: string;
        headline: string;
        headlineSecond: string;
        subheadline: string;
        slogan: string;
        scrollDown: string;
        oceanCan: string;
        incredible: string;
        passionate: string;
        surprising: string;
    };
    about: {
        tag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        description: string;
        stats: {
            years: string;
            yearsLabel: string;
            dives: string;
            divesLabel: string;
            students: string;
            studentsLabel: string;
        };
        skills: {
            certified: string;
            education: string;
            experience: string;
        };
    };
    expedition: {
        title: string;
        subtitle: string;
        navigation: {
            title: string;
            description: string;
        };
        briefing: {
            title: string;
            description: string;
        };
        encounters: {
            title: string;
            items: string[];
            disclaimer: string;
        };
        cta: {
            title: string;
            subtitle: string;
            button: string;
        };
    };
    gallery: {
        tag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        navHint: string;
        autoplayHint: string;
    };
    instagram: {
        tag: string;
        title: string;
        subtitle: string;
        followButton: string;
        viewMore: string;
    };
    testimonials: {
        tag: string;
        title: string;
        subtitle: string;
    };
    finalCta: {
        tag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        whatsappButton: string;
        badges: {
            spots: string;
            equipment: string;
            guide: string;
        };
    };
    footer: {
        location: string;
        tagline: string;
        copyright: string;
        links: {
            home: string;
            expedition: string;
            gallery: string;
            contact: string;
        };
        social: string;
        newsletter: {
            title: string;
            placeholder: string;
            button: string;
        };
    };
}

export const translations: Record<"pt" | "en", TranslationSet> = {
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            testimonials: "Depoimentos",
            contact: "Contato",
            gallery: "Galeria",
        },
        hero: {
            badge: "Ciência • Aventura • Ilhabela - SP 🇧🇷",
            headline: "Não mergulhe apenas.",
            headlineSecond: "Entenda o Oceano.",
            subheadline: "Expedições guiadas por biólogo em Ilhabela-SP. Viva a aventura, entenda a ciência e proteja o ecossistema.",
            slogan: "Te levo para viver, entender e proteger a natureza",
            scrollDown: "Role para explorar",
            oceanCan: "O oceano pode ser",
            incredible: "incrível",
            passionate: "apaixonante",
            surprising: "surpreendente",
        },
        about: {
            tag: "Seu Guia",
            title: "Conheça o",
            titleHighlight: "Biólogo",
            subtitle: "Uma experiência guiada por quem entende o mar",
            description: "Mergulhar com um instrutor é seguro. Mergulhar com um Biólogo é transformador. Em Ilhabela, cada fenda de rocha e cada cardume conta uma história. Eu traduzo essa linguagem para você.",
            stats: {
                years: "8+",
                yearsLabel: "Anos de Experiência",
                dives: "500+",
                divesLabel: "Mergulhos Guiados",
                students: "1000+",
                studentsLabel: "Alunos Formados",
            },
            skills: {
                certified: "Instrutor Certificado & Biólogo Marinho",
                education: "Foco em Educação Ambiental e Conservação",
                experience: "Experiência exclusiva em Ilhabela",
            },
        },
        expedition: {
            title: "A Expedição Ocean Safari",
            subtitle: "Não seguimos roteiros fixos. Seguimos a vida marinha.",
            navigation: {
                title: "Navegação Estratégica",
                description: "Monitoramos marés e visibilidade em tempo real. Escolhemos o ponto de mergulho (Ilha das Cabras, Saco do Eustáquio, etc.) onde a biodiversidade está mais ativa no dia.",
            },
            briefing: {
                title: "Briefing Científico",
                description: "Antes de cair na água, você entende o que vai ver. Uma aula rápida sobre o ecossistema local.",
            },
            encounters: {
                title: "O que podemos ver?",
                items: [
                    "Baleias",
                    "Golfinhos",
                    "Tubarões",
                    "Tartarugas-Verdes",
                    "Raias Chita",
                    "Cardumes de Frades",
                    "Vida Micro (Nudibrânquios)",
                ],
                disclaimer: "* Animais livres na natureza.",
            },
            cta: {
                title: "Vagas limitadas por saída.",
                subtitle: "Garanta sua imersão exclusiva em Ilhabela.",
                button: "Ver Próximas Datas",
            },
        },
        gallery: {
            tag: "Galeria Imersiva",
            title: "Momentos",
            titleHighlight: "que ficam",
            subtitle: "Registros das nossas expedições por Ilhabela",
            navHint: "Use scroll, setas ou toque para navegar",
            autoplayHint: "Auto-play retoma após 3 segundos de inatividade",
        },
        instagram: {
            tag: "Nossa Jornada",
            title: "Acompanhe nossas",
            subtitle: "aventuras em tempo real",
            followButton: "Seguir no Instagram",
            viewMore: "Ver mais no Instagram",
        },
        testimonials: {
            tag: "Depoimentos",
            title: "O que dizem nossos",
            subtitle: "exploradores",
        },
        finalCta: {
            tag: "Sua Vez",
            title: "Pronto para",
            titleHighlight: "Mergulhar",
            subtitle: "nesta aventura?",
            whatsappButton: "Falar no WhatsApp",
            badges: {
                spots: "Vagas Limitadas",
                equipment: "Equipamento Incluso",
                guide: "Guia Biólogo",
            },
        },
        footer: {
            location: "Ilhabela, São Paulo - Brasil",
            tagline: "Te levo para viver, entender e proteger a natureza.",
            copyright: "© 2026 Ocean Safari. Todos os direitos reservados.",
            links: {
                home: "Início",
                expedition: "Expedição",
                gallery: "Galeria",
                contact: "Contato",
            },
            social: "Redes Sociais",
            newsletter: {
                title: "Fique por dentro",
                placeholder: "Seu melhor e-mail",
                button: "Inscrever",
            },
        },
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            testimonials: "Testimonials",
            contact: "Contact",
            gallery: "Gallery",
        },
        hero: {
            badge: "Science • Adventure • Ilhabela - SP 🇧🇷",
            headline: "Don't just dive.",
            headlineSecond: "Understand the Ocean.",
            subheadline: "Expeditions guided by a marine biologist in Ilhabela-SP. Live the adventure, understand the science and protect the ecosystem.",
            slogan: "I take you to live, understand and protect nature",
            scrollDown: "Scroll to explore",
            oceanCan: "The ocean can be",
            incredible: "incredible",
            passionate: "passionate",
            surprising: "surprising",
        },
        about: {
            tag: "Your Guide",
            title: "Meet the",
            titleHighlight: "Biologist",
            subtitle: "An experience guided by someone who understands the sea",
            description: "Diving with an instructor is safe. Diving with a Biologist is transformative. In Ilhabela, every rock crevice and every school of fish tells a story. I translate that language for you.",
            stats: {
                years: "8+",
                yearsLabel: "Years of Experience",
                dives: "500+",
                divesLabel: "Guided Dives",
                students: "1000+",
                studentsLabel: "Students Trained",
            },
            skills: {
                certified: "Certified Instructor & Marine Biologist",
                education: "Focus on Environmental Education and Conservation",
                experience: "Exclusive experience in Ilhabela",
            },
        },
        expedition: {
            title: "The Ocean Safari Expedition",
            subtitle: "We don't follow fixed schedules. We follow marine life.",
            navigation: {
                title: "Strategic Navigation",
                description: "We monitor tides and visibility in real time. We choose the dive spot (Cabras Island, Saco do Eustáquio, etc.) where biodiversity is most active that day.",
            },
            briefing: {
                title: "Scientific Briefing",
                description: "Before entering the water, you understand what you'll see. A quick lesson about the local ecosystem.",
            },
            encounters: {
                title: "What can we see?",
                items: [
                    "Whales",
                    "Dolphins",
                    "Sharks",
                    "Green Sea Turtles",
                    "Spotted Eagle Rays",
                    "Schools of Fish",
                    "Micro Life (Nudibranchs)",
                ],
                disclaimer: "* Wild animals in their natural habitat.",
            },
            cta: {
                title: "Limited spots per trip.",
                subtitle: "Secure your exclusive immersion in Ilhabela.",
                button: "View Upcoming Dates",
            },
        },
        gallery: {
            tag: "Immersive Gallery",
            title: "Moments",
            titleHighlight: "that last",
            subtitle: "Records from our expeditions in Ilhabela",
            navHint: "Use scroll, arrow keys or touch to navigate",
            autoplayHint: "Auto-play resumes after 3 seconds of inactivity",
        },
        instagram: {
            tag: "Our Journey",
            title: "Follow our",
            subtitle: "adventures in real time",
            followButton: "Follow on Instagram",
            viewMore: "See more on Instagram",
        },
        testimonials: {
            tag: "Testimonials",
            title: "What our",
            subtitle: "explorers say",
        },
        finalCta: {
            tag: "Your Turn",
            title: "Ready to",
            titleHighlight: "Dive",
            subtitle: "into this adventure?",
            whatsappButton: "Chat on WhatsApp",
            badges: {
                spots: "Limited Spots",
                equipment: "Equipment Included",
                guide: "Biologist Guide",
            },
        },
        footer: {
            location: "Ilhabela, São Paulo - Brazil",
            tagline: "I take you to live, understand and protect nature.",
            copyright: "© 2026 Ocean Safari. All rights reserved.",
            links: {
                home: "Home",
                expedition: "Expedition",
                gallery: "Gallery",
                contact: "Contact",
            },
            social: "Social Media",
            newsletter: {
                title: "Stay updated",
                placeholder: "Your best email",
                button: "Subscribe",
            },
        },
    },
};
