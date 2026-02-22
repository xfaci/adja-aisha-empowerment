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
            statYears: "5 ans",
            items: {
                security1: { title: "Sécurisation Ministère du Budget", category: "Sécurité" },
                security2: { title: "Sécurisation Ministère de l'Agriculture", category: "Sécurité" },
                solar: { title: "Installations Solaires Particuliers", category: "Énergie Solaire" },
            },
        },
        // Trust
        trust: {
            badge: "Ils nous font confiance",
        },
        // About
        about: {
            badge: "À propos",
            title: "AISHA",
            titleHighlight: "EMPOWERMENT",
            description1: "Dirigée par",
            leader: "Mamady Kalifa KEITA",
            leaderTitle: ", Président & Chef Exécutif, notre entreprise s'est imposée comme un acteur incontournable en Guinée.",
            description2: "Notre mission : fournir des solutions durables en énergie, sécurité et construction qui améliorent la qualité de vie et sécurisent les investissements de nos clients.",
            quote: "Dans un contexte où la sécurité des personnes, des biens et des informations devient une priorité stratégique, nous mettons notre expertise technique au service du renforcement de la protection des infrastructures.",
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
        // WhatsApp
        whatsapp: {
            message: "Bonjour AISHA EMPOWERMENT, je suis intéressé par vos services.",
            tooltip: "Discuter avec nous",
        },
        // History Page
        history: {
            badge: "Notre Histoire",
            title: "Bâtir l'avenir de la",
            titleHighlight: "Guinée",
            intro: "Depuis sa création, AISHA EMPOWERMENT s'engage pour le développement durable de la Guinée. Sous la direction de",
            leader: "Mamady Kalifa KEITA",
            introEnd: ", nous construisons un avenir où technologie et tradition se rencontrent pour créer des solutions innovantes.",
            mission: {
                title: "Notre Mission",
                description: "Fournir des solutions technologiques de pointe en énergie solaire, sécurité électronique et construction, adaptées aux réalités guinéennes, tout en garantissant qualité, fiabilité et accompagnement personnalisé à chaque client."
            },
            vision: {
                title: "Notre Vision",
                description: "Devenir le partenaire de référence en Afrique de l'Ouest pour les solutions intégrées d'infrastructure moderne, en contribuant activement à l'autonomie énergétique et à la sécurité des entreprises et des foyers guinéens."
            },
            valuesTitle: "Nos Valeurs",
            values: {
                engagement: { title: "Engagement", description: "Un dévouement total envers nos clients et la communauté guinéenne." },
                excellence: { title: "Excellence", description: "La recherche constante de la qualité dans chaque projet réalisé." },
                innovation: { title: "Innovation", description: "L'adoption des technologies les plus avancées pour des solutions durables." }
            },
            journeyTitle: "Notre Parcours",
            milestones: {
                foundation: { year: "Fondation", title: "Création de l'entreprise", description: "AISHA EMPOWERMENT voit le jour à Conakry avec une vision claire : contribuer au développement de la Guinée." },
                expansion: { year: "Expansion", title: "Diversification des services", description: "Extension de nos activités vers la sécurité électronique et les énergies renouvelables." },
                government: { year: "Partenariats", title: "Collaboration avec l'État", description: "Sollicitation officielle auprès des ministères guinéens pour l'installation de systèmes de vidéosurveillance et de contrôle d'accès sécurisés." },
                today: { year: "Aujourd'hui", title: "Leader du marché", description: "Partenaire de confiance des ministères du Budget, de l'Agriculture, de l'Enseignement Supérieur et des Affaires d'État." }
            },
            expertiseTitle: "Nos Domaines d'Expertise",
            expertise: {
                solar: { title: "Énergie Solaire", description: "Installation de systèmes photovoltaïques pour l'autonomie énergétique." },
                security: { title: "Sécurité Électronique", description: "Vidéosurveillance, contrôle d'accès et systèmes d'alarme." },
                construction: { title: "Construction & BTP", description: "Réalisation de projets résidentiels et commerciaux." }
            }
        },
        // Realizations Page
        realizations: {
            badge: "Portfolio",
            title: "Nos Réalisations",
            subtitle: "Découvrez les projets emblématiques qui témoignent de notre expertise en énergie solaire, sécurité et construction à travers la Guinée.",
            filters: {
                all: "Tous",
                solar: "Énergie Solaire",
                security: "Sécurité",
                construction: "Construction"
            },
            projects: {
                security1: {
                    title: "Ministère du Budget",
                    category: "Sécurité",
                    description: "Installation complète d'un système de sécurité pour le Ministère du Budget : vidéosurveillance HD, contrôle d'accès biométrique et portes sécurisées.",
                    specs: ["Caméras HD", "Biométrie", "Portes sécurisées"]
                },
                security2: {
                    title: "Ministère de l'Agriculture",
                    category: "Sécurité",
                    description: "Déploiement d'un système de sécurité intégré pour le Ministère de l'Agriculture : vidéosurveillance, contrôle d'accès et détection d'intrusion.",
                    specs: ["Vidéosurveillance", "Contrôle d'accès", "Alarme anti-intrusion"]
                },
                security3: {
                    title: "Ministère de l'Enseignement Supérieur",
                    category: "Sécurité",
                    description: "Sécurisation complète du Ministère de l'Enseignement Supérieur avec caméras, biométrie et systèmes d'alarme modernes.",
                    specs: ["Caméras", "Biométrie", "Systèmes d'alarme"]
                },
                security4: {
                    title: "Ministère des Affaires d'État",
                    category: "Sécurité",
                    description: "Installation de sécurité haute performance pour le Ministère des Affaires d'État : surveillance 24/7 et contrôle d'accès renforcé.",
                    specs: ["Surveillance 24/7", "Accès renforcé", "Portes sécurisées"]
                },
                solar1: {
                    title: "Installations Solaires Résidentielles",
                    category: "Énergie Solaire",
                    description: "Installation de panneaux solaires chez des particuliers à Conakry. Solutions sur mesure pour l'autonomie énergétique des foyers guinéens.",
                    specs: ["Panneaux photovoltaïques", "Batteries", "Onduleurs"]
                }
            },
            cta: {
                title: "Vous avez un projet ?",
                subtitle: "Rejoignez nos clients satisfaits et confiez-nous votre prochain projet. Nous vous accompagnons de la conception à la réalisation.",
                button: "Demander un devis gratuit"
            }
        },
        // 404 Page
        notFound: {
            title: "Page introuvable",
            subtitle: "La page que vous recherchez n'existe pas ou a été déplacée.",
            button: "Retour à l'accueil"
        },
        // Scroll to top
        scrollTop: "Retour en haut"
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
            statYears: "5 years",
            items: {
                security1: { title: "Ministry of Budget Security", category: "Security" },
                security2: { title: "Ministry of Agriculture Security", category: "Security" },
                solar: { title: "Residential Solar Installations", category: "Solar Energy" },
            },
        },
        // Trust
        trust: {
            badge: "They Trust Us",
        },
        // About
        about: {
            badge: "About Us",
            title: "AISHA",
            titleHighlight: "EMPOWERMENT",
            description1: "Led by",
            leader: "Mamady Kalifa KEITA",
            leaderTitle: ", President & CEO, our company has established itself as a key player in Guinea.",
            description2: "Our mission: to provide sustainable solutions in energy, security and construction that improve quality of life and secure our clients' investments.",
            quote: "In a context where security of people, property and information has become a strategic priority, we put our technical expertise at the service of strengthening infrastructure protection.",
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
        // WhatsApp
        whatsapp: {
            message: "Hello AISHA EMPOWERMENT, I am interested in your services.",
            tooltip: "Chat with us",
        },
        // History Page
        history: {
            badge: "Our History",
            title: "Building the future of",
            titleHighlight: "Guinea",
            intro: "Since its creation, AISHA EMPOWERMENT has been committed to the sustainable development of Guinea. Under the leadership of",
            leader: "Mamady Kalifa KEITA",
            introEnd: ", we are building a future where technology and tradition meet to create innovative solutions.",
            mission: {
                title: "Our Mission",
                description: "To provide cutting-edge technological solutions in solar energy, electronic security and construction, adapted to Guinean realities, while guaranteeing quality, reliability and personalized support for each client."
            },
            vision: {
                title: "Our Vision",
                description: "To become the reference partner in West Africa for integrated modern infrastructure solutions, actively contributing to energy independence and security for Guinean businesses and households."
            },
            valuesTitle: "Our Values",
            values: {
                engagement: { title: "Commitment", description: "Total dedication to our clients and the Guinean community." },
                excellence: { title: "Excellence", description: "The constant pursuit of quality in every project delivered." },
                innovation: { title: "Innovation", description: "Adoption of the most advanced technologies for sustainable solutions." }
            },
            journeyTitle: "Our Journey",
            milestones: {
                foundation: { year: "Foundation", title: "Company Creation", description: "AISHA EMPOWERMENT was born in Conakry with a clear vision: to contribute to Guinea's development." },
                expansion: { year: "Expansion", title: "Service Diversification", description: "Extension of our activities to electronic security and renewable energy." },
                government: { year: "Partnerships", title: "Government Collaboration", description: "Official request to Guinean ministries for installation of video surveillance and secure access control systems." },
                today: { year: "Today", title: "Market Leader", description: "Trusted partner of the Ministries of Budget, Agriculture, Higher Education and State Affairs." }
            },
            expertiseTitle: "Our Areas of Expertise",
            expertise: {
                solar: { title: "Solar Energy", description: "Installation of photovoltaic systems for energy independence." },
                security: { title: "Electronic Security", description: "Video surveillance, access control and alarm systems." },
                construction: { title: "Construction & Building", description: "Residential and commercial project delivery." }
            }
        },
        // Realizations Page
        realizations: {
            badge: "Portfolio",
            title: "Our Projects",
            subtitle: "Discover the flagship projects that demonstrate our expertise in solar energy, security and construction across Guinea.",
            filters: {
                all: "All",
                solar: "Solar Energy",
                security: "Security",
                construction: "Construction"
            },
            projects: {
                security1: {
                    title: "Ministry of Budget",
                    category: "Security",
                    description: "Complete security system installation for the Ministry of Budget: HD video surveillance, biometric access control and secure doors.",
                    specs: ["HD Cameras", "Biometrics", "Secure Doors"]
                },
                security2: {
                    title: "Ministry of Agriculture",
                    category: "Security",
                    description: "Deployment of an integrated security system for the Ministry of Agriculture: video surveillance, access control and intrusion detection.",
                    specs: ["Video Surveillance", "Access Control", "Anti-intrusion Alarm"]
                },
                security3: {
                    title: "Ministry of Higher Education",
                    category: "Security",
                    description: "Complete security for the Ministry of Higher Education with cameras, biometrics and modern alarm systems.",
                    specs: ["Cameras", "Biometrics", "Alarm Systems"]
                },
                security4: {
                    title: "Ministry of State Affairs",
                    category: "Security",
                    description: "High-performance security installation for the Ministry of State Affairs: 24/7 surveillance and reinforced access control.",
                    specs: ["24/7 Surveillance", "Reinforced Access", "Secure Doors"]
                },
                solar1: {
                    title: "Residential Solar Installations",
                    category: "Solar Energy",
                    description: "Solar panel installations for private homes in Conakry. Custom solutions for energy independence of Guinean households.",
                    specs: ["Photovoltaic Panels", "Batteries", "Inverters"]
                }
            },
            cta: {
                title: "Have a project?",
                subtitle: "Join our satisfied clients and entrust us with your next project. We support you from design to completion.",
                button: "Request a free quote"
            }
        },
        // 404 Page
        notFound: {
            title: "Page not found",
            subtitle: "The page you are looking for does not exist or has been moved.",
            button: "Back to home"
        },
        // Scroll to top
        scrollTop: "Back to top"
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
            statYears: "5年",
            items: {
                security1: { title: "预算部安防系统", category: "安防" },
                security2: { title: "农业部安防系统", category: "安防" },
                solar: { title: "住宅太阳能安装", category: "太阳能" },
            },
        },
        // Trust
        trust: {
            badge: "他们信任我们",
        },
        // About
        about: {
            badge: "关于我们",
            title: "AISHA",
            titleHighlight: "EMPOWERMENT",
            description1: "由",
            leader: "Mamady Kalifa KEITA",
            leaderTitle: "领导，总裁兼首席执行官，我们公司已成为几内亚的关键参与者。",
            description2: "我们的使命：提供能源、安防和建筑领域的可持续解决方案，改善生活质量并保护客户投资。",
            quote: "在人员、财产和信息安全已成为战略重点的背景下，我们将技术专长用于加强基础设施保护。",
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
        // WhatsApp
        whatsapp: {
            message: "您好 AISHA EMPOWERMENT，我对您的服务感兴趣。",
            tooltip: "与我们聊天",
        },
        // History Page
        history: {
            badge: "我们的历史",
            title: "建设",
            titleHighlight: "几内亚的未来",
            intro: "自成立以来，AISHA EMPOWERMENT 一直致力于几内亚的可持续发展。在",
            leader: "Mamady Kalifa KEITA",
            introEnd: "的领导下，我们正在构建一个技术与传统相结合的未来，创造创新解决方案。",
            mission: {
                title: "我们的使命",
                description: "提供太阳能、电子安防和建筑领域的尖端技术解决方案，适应几内亚的实际情况，同时保证每位客户的质量、可靠性和个性化支持。"
            },
            vision: {
                title: "我们的愿景",
                description: "成为西非地区现代基础设施集成解决方案的首选合作伙伴，积极促进几内亚企业和家庭的能源独立和安全。"
            },
            valuesTitle: "我们的价值观",
            values: {
                engagement: { title: "承诺", description: "全心全意为客户和几内亚社区服务。" },
                excellence: { title: "卓越", description: "在每个项目中不断追求质量。" },
                innovation: { title: "创新", description: "采用最先进的技术提供可持续解决方案。" }
            },
            journeyTitle: "我们的历程",
            milestones: {
                foundation: { year: "创立", title: "公司成立", description: "AISHA EMPOWERMENT 在科纳克里诞生，怀着明确的愿景：为几内亚的发展做出贡献。" },
                expansion: { year: "扩展", title: "服务多元化", description: "将业务扩展到电子安防和可再生能源领域。" },
                government: { year: "合作", title: "政府合作", description: "正式向几内亚各部委申请安装视频监控和安全门禁系统。" },
                today: { year: "今天", title: "市场领导者", description: "预算部、农业部、高等教育部和国务部的可信赖合作伙伴。" }
            },
            expertiseTitle: "我们的专业领域",
            expertise: {
                solar: { title: "太阳能", description: "安装光伏系统实现能源独立。" },
                security: { title: "电子安防", description: "视频监控、门禁和报警系统。" },
                construction: { title: "建筑工程", description: "住宅和商业项目交付。" }
            }
        },
        // Realizations Page
        realizations: {
            badge: "项目案例",
            title: "我们的项目",
            subtitle: "探索展示我们在几内亚太阳能、安防和建筑方面专业知识的标志性项目。",
            filters: {
                all: "全部",
                solar: "太阳能",
                security: "安防",
                construction: "建筑"
            },
            projects: {
                security1: {
                    title: "预算部",
                    category: "安防",
                    description: "为预算部安装完整的安防系统：高清视频监控、生物识别门禁和安全门。",
                    specs: ["高清摄像头", "生物识别", "安全门"]
                },
                security2: {
                    title: "农业部",
                    category: "安防",
                    description: "为农业部部署集成安防系统：视频监控、门禁控制和入侵检测。",
                    specs: ["视频监控", "门禁控制", "防入侵报警"]
                },
                security3: {
                    title: "高等教育部",
                    category: "安防",
                    description: "为高等教育部提供完整的安防系统：摄像头、生物识别和现代报警系统。",
                    specs: ["摄像头", "生物识别", "报警系统"]
                },
                security4: {
                    title: "国务部",
                    category: "安防",
                    description: "为国务部安装高性能安防系统：24/7监控和强化门禁控制。",
                    specs: ["24/7监控", "强化门禁", "安全门"]
                },
                solar1: {
                    title: "住宅太阳能安装",
                    category: "太阳能",
                    description: "为科纳克里的私人住宅安装太阳能板。为几内亚家庭提供定制的能源独立解决方案。",
                    specs: ["光伏板", "电池", "逆变器"]
                }
            },
            cta: {
                title: "有项目需求？",
                subtitle: "加入我们满意的客户行列，将您的下一个项目交给我们。我们从设计到完成全程陪伴您。",
                button: "申请免费报价"
            }
        },
        // 404 Page
        notFound: {
            title: "页面未找到",
            subtitle: "您查找的页面不存在或已被移动。",
            button: "返回首页"
        },
        // Scroll to top
        scrollTop: "返回顶部"
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
