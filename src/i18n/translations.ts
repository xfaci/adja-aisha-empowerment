export type Language = 'fr' | 'en' | 'zh';

export const translations = {
    fr: {
        // Navigation
        nav: {
            services: "Services",
            realizations: "Réalisations",
            history: "Histoire",
            contact: "Contact",
            quote: "Devis gratuit",
            requestQuote: "Demander un devis",
        },
        // Hero
        hero: {
            badge: "N°1 en Guinée",
            title1: "Énergie solaire,",
            title2: "sécurité",
            title3: "& BTP",
            subtitle: "Solutions professionnelles pour vos projets d'envergure à Conakry.",
            subtitleHighlight: "Installation, maintenance et accompagnement",
            subtitleEnd: "sur mesure.",
            cta1: "Demander un devis gratuit",
            cta2: "Découvrir nos services",
            trust1: "100+ projets réalisés",
            trust2: "5 ans d'expertise",
            trust3: "Garantie satisfaction",
            statProjects: "Projets",
            statClients: "Clients",
            statExpertise: "Expertises",
        },
        // Services
        services: {
            badge: "Nos expertises",
            title: "Trois domaines",
            titleHighlight: "d'excellence",
            subtitle: "Des solutions intégrées et professionnelles pour répondre à tous vos besoins en infrastructure moderne.",
            security: {
                title: "Sécurité Électronique",
                description: "Vidéosurveillance HD, contrôle d'accès biométrique, systèmes d'alarme et détection incendie.",
                features: ["CCTV & Supervision", "Biométrie", "Alarmes", "Contrôle d'accès"],
                cta: "Sécuriser mon site"
            },
            solar: {
                title: "Énergie Solaire",
                description: "Installation de panneaux photovoltaïques, onduleurs hybrides et batteries lithium pour votre autonomie énergétique.",
                features: ["Panneaux solaires", "Batteries", "Onduleurs", "Maintenance"],
                cta: "Passer au solaire"
            },
            construction: {
                title: "Construction & BTP",
                description: "Projets résidentiels et commerciaux : gros œuvre, étanchéité, plomberie et électricité bâtiment.",
                features: ["Gros œuvre", "Finitions", "Plomberie", "Électricité"],
                cta: "Démarrer un projet"
            },
            bottomCta: "Obtenir un devis personnalisé",
        },
        // Quote Form
        quote: {
            badge: "Devis gratuit & sans engagement",
            title: "Démarrez votre",
            titleHighlight: "projet",
            subtitle: "Décrivez votre besoin et recevez une estimation personnalisée via WhatsApp sous 24h.",
            fullName: "Nom complet",
            phone: "Téléphone WhatsApp",
            email: "Email (optionnel)",
            location: "Ville / Quartier",
            projectType: "Type de projet",
            projectTypes: {
                solar: "Installation de Panneaux Solaires",
                security: "Système de Sécurité / Vidéosurveillance",
                construction: "Construction / BTP",
                other: "Autre demande"
            },
            description: "Description du projet",
            descriptionPlaceholder: "Décrivez votre projet en quelques mots...",
            submit: "Envoyer via WhatsApp",
            guarantee: "Réponse rapide garantie sous 24h",
        },
        // Projects
        projects: {
            badge: "Portfolio",
            title: "Réalisations",
            titleHighlight: "récentes",
            viewAll: "Voir tous les projets",
            stat1: "Projets livrés",
            stat2: "Clients satisfaits",
            stat3: "D'expérience",
        },
        // Trust
        trust: {
            badge: "Ils nous font confiance",
        },
        // About
        about: {
            badge: "À propos",
            title: "HADJA AISHA",
            titleHighlight: "EMPOWERMENT",
            description1: "Dirigée par",
            leader: "Mamady Kalifa KEITA",
            leaderTitle: ", Président & Chef Exécutif, notre entreprise s'est imposée comme un acteur incontournable en Guinée.",
            description2: "Notre mission : fournir des solutions durables en énergie, sécurité et construction qui améliorent la qualité de vie et sécurisent les investissements de nos clients.",
            values: {
                quality: { title: "Qualité", description: "Matériel certifié et normes internationales." },
                deadline: { title: "Délais", description: "Respect rigoureux des plannings." },
                team: { title: "Équipe", description: "Personnel qualifié et expérimenté." }
            },
            cta: "Découvrir notre histoire",
        },
        // Contact
        contact: {
            badge: "Contact",
            title: "Parlons de",
            titleHighlight: "votre projet",
            subtitle: "Notre équipe est prête à vous accompagner dans tous vos projets.",
            address: "Adresse",
            emailLabel: "Email",
            phoneLabel: "Téléphone",
            formTitle: "Envoyez-nous un message",
            fullName: "Nom complet",
            email: "Email",
            message: "Message",
            messagePlaceholder: "Comment pouvons-nous vous aider ?",
            submit: "Envoyer via WhatsApp",
            guarantee: "Réponse rapide garantie sous 24h",
        },
        // Footer
        footer: {
            description: "Solutions professionnelles en énergie solaire, sécurité électronique et construction en Guinée.",
            navigation: "Navigation",
            contactTitle: "Contact",
            copyright: "Tous droits réservés.",
        },
    },
    en: {
        // Navigation
        nav: {
            services: "Services",
            realizations: "Projects",
            history: "History",
            contact: "Contact",
            quote: "Free Quote",
            requestQuote: "Request a Quote",
        },
        // Hero
        hero: {
            badge: "#1 in Guinea",
            title1: "Solar Energy,",
            title2: "Security",
            title3: "& Construction",
            subtitle: "Professional solutions for your large-scale projects in Conakry.",
            subtitleHighlight: "Installation, maintenance and support",
            subtitleEnd: "tailored to you.",
            cta1: "Request a Free Quote",
            cta2: "Discover Our Services",
            trust1: "100+ completed projects",
            trust2: "5 years of expertise",
            trust3: "Satisfaction guaranteed",
            statProjects: "Projects",
            statClients: "Clients",
            statExpertise: "Expertise",
        },
        // Services
        services: {
            badge: "Our Expertise",
            title: "Three Areas of",
            titleHighlight: "Excellence",
            subtitle: "Integrated and professional solutions to meet all your modern infrastructure needs.",
            security: {
                title: "Electronic Security",
                description: "HD video surveillance, biometric access control, alarm systems and fire detection.",
                features: ["CCTV & Monitoring", "Biometrics", "Alarms", "Access Control"],
                cta: "Secure My Site"
            },
            solar: {
                title: "Solar Energy",
                description: "Installation of photovoltaic panels, hybrid inverters and lithium batteries for your energy independence.",
                features: ["Solar Panels", "Batteries", "Inverters", "Maintenance"],
                cta: "Go Solar"
            },
            construction: {
                title: "Construction & Building",
                description: "Residential and commercial projects: structural work, waterproofing, plumbing and building electricity.",
                features: ["Structural Work", "Finishes", "Plumbing", "Electrical"],
                cta: "Start a Project"
            },
            bottomCta: "Get a Personalized Quote",
        },
        // Quote Form
        quote: {
            badge: "Free quote & no commitment",
            title: "Start Your",
            titleHighlight: "Project",
            subtitle: "Describe your needs and receive a personalized estimate via WhatsApp within 24 hours.",
            fullName: "Full Name",
            phone: "WhatsApp Phone",
            email: "Email (optional)",
            location: "City / Area",
            projectType: "Project Type",
            projectTypes: {
                solar: "Solar Panel Installation",
                security: "Security System / Video Surveillance",
                construction: "Construction / Building",
                other: "Other Request"
            },
            description: "Project Description",
            descriptionPlaceholder: "Describe your project in a few words...",
            submit: "Send via WhatsApp",
            guarantee: "Fast response guaranteed within 24h",
        },
        // Projects
        projects: {
            badge: "Portfolio",
            title: "Recent",
            titleHighlight: "Projects",
            viewAll: "View All Projects",
            stat1: "Projects Delivered",
            stat2: "Satisfied Clients",
            stat3: "Years Experience",
        },
        // Trust
        trust: {
            badge: "They Trust Us",
        },
        // About
        about: {
            badge: "About Us",
            title: "HADJA AISHA",
            titleHighlight: "EMPOWERMENT",
            description1: "Led by",
            leader: "Mamady Kalifa KEITA",
            leaderTitle: ", President & CEO, our company has established itself as a key player in Guinea.",
            description2: "Our mission: to provide sustainable solutions in energy, security and construction that improve quality of life and secure our clients' investments.",
            values: {
                quality: { title: "Quality", description: "Certified equipment and international standards." },
                deadline: { title: "Deadlines", description: "Strict adherence to schedules." },
                team: { title: "Team", description: "Qualified and experienced staff." }
            },
            cta: "Discover Our History",
        },
        // Contact
        contact: {
            badge: "Contact",
            title: "Let's Talk About",
            titleHighlight: "Your Project",
            subtitle: "Our team is ready to support you in all your projects.",
            address: "Address",
            emailLabel: "Email",
            phoneLabel: "Phone",
            formTitle: "Send Us a Message",
            fullName: "Full Name",
            email: "Email",
            message: "Message",
            messagePlaceholder: "How can we help you?",
            submit: "Send via WhatsApp",
            guarantee: "Fast response guaranteed within 24h",
        },
        // Footer
        footer: {
            description: "Professional solutions in solar energy, electronic security and construction in Guinea.",
            navigation: "Navigation",
            contactTitle: "Contact",
            copyright: "All rights reserved.",
        },
    },
    zh: {
        // Navigation
        nav: {
            services: "服务",
            realizations: "项目案例",
            history: "历史",
            contact: "联系我们",
            quote: "免费报价",
            requestQuote: "申请报价",
        },
        // Hero
        hero: {
            badge: "几内亚第一",
            title1: "太阳能,",
            title2: "安防",
            title3: "& 建筑",
            subtitle: "为您在科纳克里的大型项目提供专业解决方案。",
            subtitleHighlight: "安装、维护和支持",
            subtitleEnd: "量身定制。",
            cta1: "申请免费报价",
            cta2: "了解我们的服务",
            trust1: "100+ 已完成项目",
            trust2: "5年专业经验",
            trust3: "满意度保证",
            statProjects: "项目",
            statClients: "客户",
            statExpertise: "专业领域",
        },
        // Services
        services: {
            badge: "我们的专长",
            title: "三大",
            titleHighlight: "卓越领域",
            subtitle: "集成化专业解决方案，满足您所有现代基础设施需求。",
            security: {
                title: "电子安防",
                description: "高清视频监控、生物识别门禁、报警系统和火灾探测。",
                features: ["监控系统", "生物识别", "报警", "门禁控制"],
                cta: "保护我的场所"
            },
            solar: {
                title: "太阳能",
                description: "光伏板安装、混合逆变器和锂电池，实现能源自主。",
                features: ["太阳能板", "电池", "逆变器", "维护"],
                cta: "使用太阳能"
            },
            construction: {
                title: "建筑工程",
                description: "住宅和商业项目：土建、防水、管道和建筑电气。",
                features: ["土建工程", "装修", "管道", "电气"],
                cta: "开始项目"
            },
            bottomCta: "获取个性化报价",
        },
        // Quote Form
        quote: {
            badge: "免费报价，无需承诺",
            title: "开始您的",
            titleHighlight: "项目",
            subtitle: "描述您的需求，24小时内通过WhatsApp获得个性化报价。",
            fullName: "全名",
            phone: "WhatsApp电话",
            email: "邮箱（可选）",
            location: "城市/地区",
            projectType: "项目类型",
            projectTypes: {
                solar: "太阳能板安装",
                security: "安防系统/视频监控",
                construction: "建筑工程",
                other: "其他需求"
            },
            description: "项目描述",
            descriptionPlaceholder: "简要描述您的项目...",
            submit: "通过WhatsApp发送",
            guarantee: "24小时内快速响应",
        },
        // Projects
        projects: {
            badge: "项目案例",
            title: "近期",
            titleHighlight: "项目",
            viewAll: "查看所有项目",
            stat1: "已交付项目",
            stat2: "满意客户",
            stat3: "年经验",
        },
        // Trust
        trust: {
            badge: "他们信任我们",
        },
        // About
        about: {
            badge: "关于我们",
            title: "HADJA AISHA",
            titleHighlight: "EMPOWERMENT",
            description1: "由",
            leader: "Mamady Kalifa KEITA",
            leaderTitle: "领导，总裁兼首席执行官，我们公司已成为几内亚的关键参与者。",
            description2: "我们的使命：提供能源、安防和建筑领域的可持续解决方案，改善生活质量并保护客户投资。",
            values: {
                quality: { title: "质量", description: "认证设备和国际标准。" },
                deadline: { title: "时效", description: "严格遵守时间表。" },
                team: { title: "团队", description: "合格且经验丰富的员工。" }
            },
            cta: "了解我们的历史",
        },
        // Contact
        contact: {
            badge: "联系我们",
            title: "让我们谈谈",
            titleHighlight: "您的项目",
            subtitle: "我们的团队随时准备在所有项目中为您提供支持。",
            address: "地址",
            emailLabel: "邮箱",
            phoneLabel: "电话",
            formTitle: "给我们留言",
            fullName: "全名",
            email: "邮箱",
            message: "留言",
            messagePlaceholder: "我们能为您做什么？",
            submit: "通过WhatsApp发送",
            guarantee: "24小时内快速响应",
        },
        // Footer
        footer: {
            description: "几内亚太阳能、电子安防和建筑领域的专业解决方案。",
            navigation: "导航",
            contactTitle: "联系方式",
            copyright: "版权所有。",
        },
    },
};

export const languageNames: Record<Language, string> = {
    fr: "Français",
    en: "English",
    zh: "中文",
};

export const languageFlags: Record<Language, string> = {
    fr: "🇫🇷",
    en: "🇬🇧",
    zh: "🇨🇳",
};
