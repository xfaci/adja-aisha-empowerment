import { useState } from 'react';

// Initial default data
export const defaultSiteData = {
    hero: {
        title: "L'Énergie Solaire et la Sécurité à Votre Portée",
        subtitle: "Expert en installation de panneaux solaires, systèmes de sécurité électronique et solutions de construction innovantes en Guinée."
    },
    about: {
        title: "L'Humain au Cœur de Notre",
        titleHighlight: "Expertise",
        description1: "Fondée sur des valeurs d'intégrité et de travail acharné, HADJA AISHA EMPOWERMENT est le fruit de la vision de",
        leader: "Mamady Kalifa KEITA",
        leaderTitle: " , un entrepreneur guinéen dévoué à l'innovation.",
        description2: "Notre mission est de sécuriser, d'éclairer et de construire l'avenir de la Guinée. Nous mettons un point d'honneur à fournir des solutions de haute qualité, accessibles à tous, tout en créant des opportunités d'emploi pour la jeunesse.",
        quote: "Chaque projet que nous réalisons est une pierre ajoutée à l'édifice de notre nation. Notre force réside dans notre capacité à allier technologie moderne et valeurs traditionnelles.",
        phone: "+224 00 00 00 00",
        email: "contact@hadjaaisha.gn",
        address: "Republique de Guinée",
    },
    servicesData: [
        {
            id: 'security',
            title: "Sécurité Électronique",
            description: "Installation de caméras, alarmes et systèmes de contrôle d'accès pour protéger vos biens.",
        },
        {
            id: 'solar',
            title: "Énergie Solaire",
            description: "Panneaux solaires, onduleurs et batteries pour une énergie propre et autonome.",
        },
        {
            id: 'construction',
            title: "Génie Civil & BTP",
            description: "Construction de bâtiments, rénovation et aménagement de qualité supérieure.",
        }
    ],
    realizationsData: [
        {
            id: 1,
            title: "Installation de Caméras",
            category: "Sécurité",
            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Sécurisation Biométrique",
            category: "Contrôle d'accès",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Parc Solaire Industriel",
            category: "Énergie Verte",
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop"
        }
    ]
};

const STORE_KEY = 'hadja_site_data';

// Helper to get data from local storage or default
export function getSiteData() {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Error parsing site data', e);
        }
    }
    return defaultSiteData;
}

// Helper to save data to local storage
export function saveSiteData(data: typeof defaultSiteData) {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

// React hook to use the store
export function useSiteData() {
    const [data, setData] = useState<typeof defaultSiteData>(getSiteData);

    const updateData = (newData: Partial<typeof defaultSiteData>) => {
        const updated = { ...data, ...newData };
        setData(updated);
        saveSiteData(updated);
    };

    return {
        data,
        updateData,
        heroData: data.hero,
        aboutData: data.about,
        servicesData: data.servicesData,
        realizationsData: data.realizationsData
    };
}
