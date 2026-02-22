import {
    LayoutDashboard,
    Home,
    Briefcase,
    Image as ImageIcon,
    FileText,
    User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
    { name: 'Page d\'Accueil', path: '/admin/home', icon: Home, description: 'Modifier le titre principal et le sous-titre.', color: 'bg-blue-50 text-blue-600' },
    { name: 'Services', path: '/admin/services', icon: Briefcase, description: 'Gérez la liste de vos services proposés.', color: 'bg-green-50 text-green-600' },
    { name: 'Réalisations', path: '/admin/realizations', icon: ImageIcon, description: 'Ajoutez ou modifiez les photos de vos projets.', color: 'bg-purple-50 text-purple-600' },
    { name: 'Histoire', path: '/admin/about', icon: FileText, description: 'Mettez à jour le texte de présentation de l\'entreprise.', color: 'bg-orange-50 text-orange-600' },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8 items-center justify-between flex">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Bienvenue dans votre espace d'administration. D'ici, vous pouvez gérer tout le contenu de votre site web.
                    </p>
                </div>
                <div className="hidden sm:block">
                    <LayoutDashboard className="w-10 h-10 text-gray-300" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {quickLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col"
                    >
                        <div className="p-5 flex-1">
                            <div className="flex items-center">
                                <div className={`flex-shrink-0 rounded-md p-3 ${link.color}`}>
                                    <link.icon className="w-6 h-6" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Gérer
                                        </dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">
                                                {link.name}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {link.description}
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                            <div className="text-sm text-[--color-brand-gold] font-medium hover:text-yellow-600">
                                Accéder &rarr;
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Note d'information pour le CEO */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <User className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Note concernant la sauvegarde</h3>
                        <div className="mt-2 text-sm text-blue-700">
                            <p>
                                Actuellement, les modifications que vous faites sont sauvegardées localement dans votre navigateur pour vous permettre de tester l'interface. Pour que ces changements soient visibles par tout le monde, une petite base de données (comme Supabase ou Firebase) devra être connectée ultérieurement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
