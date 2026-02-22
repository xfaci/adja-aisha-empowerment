import { useState } from 'react';

const AUTH_KEY = 'aisha_admin_auth';

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem(AUTH_KEY) === 'true';
    });

    const login = (password: string) => {
        // Simple password check for demonstration
        if (password === 'admin123') {
            localStorage.setItem(AUTH_KEY, 'true');
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem(AUTH_KEY);
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
}
