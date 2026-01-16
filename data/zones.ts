/**
 * Ocean Safari - Dive Zones Data
 * Location: Ilhabela, SP - Brazil
 * Enhanced with educational & conservation-focused content
 */

// Section Content for Expedition Areas
export const expeditionSection = {
    title: "Explore as Profundezas",
    subtitle: "Cada metro de descida revela um novo mundo. Escolha sua aventura.",
    ctaText: "Ver Detalhes",
};

export interface DiveZone {
    id: string;
    zoneName: string;
    depth: string;
    scientistNote: string;
    instructorTip: string;
    primaryColor: string;
    marineLife: string[];
    backgroundLayer: string; // Slow mvt
    midLayer: string;       // Normal mvt (Content layer)
    foregroundLayer: string;// Fast mvt
    details: {
        title: string;
        description: string;
        highlightSpecies: string;
        conservationNote?: string;
    };
    booking: {
        price: string;
        certificationLevel: string;
        duration: string;
    };
}

export const zones: DiveZone[] = [
    {
        id: "surface",
        zoneName: "Sol Costeiro",
        depth: "0m - 10m",
        scientistNote: "A fotossíntese é maior aqui. 90% da vida marinha depende desta zona iluminada.",
        instructorTip: "Equilibre cedo e frequentemente. A maior mudança de pressão está nos primeiros 10 metros.",
        primaryColor: "#00C4CC",
        marineLife: ["Tartaruga Verde", "Caranha", "Barracuda"],
        backgroundLayer: "/images/surface_bg.jpg",
        midLayer: "/images/surface_mid.png",
        foregroundLayer: "/images/surface_fg.png",
        details: {
            title: "A Zona Iluminada",
            description: "Explore as vibrantes águas rasas onde a luz dança no fundo arenoso.",
            highlightSpecies: "Chelonia mydas",
        },
        booking: {
            price: "R$ 600",
            certificationLevel: "Águas Abertas",
            duration: "45 mins",
        }
    },
    {
        id: "reef",
        zoneName: "Reino de Coral",
        depth: "10m - 30m",
        scientistNote: "Pólipos de coral são animais, não plantas. Esta estrutura suporta 25% de todas as espécies oceânicas.",
        instructorTip: "Cuidado com sua flutuabilidade. Não toque no recife para proteger você e o coral.",
        primaryColor: "#005F73",
        marineLife: ["Tubarão de Recife", "Peixe-palhaço", "Moreia"],
        backgroundLayer: "/images/reef_bg.jpg",
        midLayer: "/images/reef_mid.png",
        foregroundLayer: "/images/reef_fg.png",
        details: {
            title: "Cidades Tecnicolor",
            description: "Desça na metrópole movimentada do recife, repleta de vida e cor.",
            highlightSpecies: "Carcharhinus perezi",
        },
        booking: {
            price: "R$ 750",
            certificationLevel: "Águas Abertas Avançado",
            duration: "50 mins",
        }
    },
    {
        id: "deep",
        zoneName: "Azul Profundo",
        depth: "30m+",
        scientistNote: "A bioluminescência torna-se a principal fonte de luz abaixo. A vida aqui se move mais devagar.",
        instructorTip: "Monitore seu limite não descompressivo (NDL) de perto. A narcose pode acontecer nesta profundidade.",
        primaryColor: "#0A192F",
        marineLife: ["Tubarão-martelo", "Raia-águia", "Mero Gigante"],
        backgroundLayer: "/images/deep_bg.jpg",
        midLayer: "/images/deep_mid.png",
        foregroundLayer: "/images/deep_fg.png",
        details: {
            title: "No Abismo",
            description: "Experimente o silêncio e a majestade do oceano profundo onde gigantes vagam.",
            highlightSpecies: "Sphyrnidae",
        },
        booking: {
            price: "R$ 1000",
            certificationLevel: "Mergulhador Profundo",
            duration: "40 mins",
        }
    }
];
