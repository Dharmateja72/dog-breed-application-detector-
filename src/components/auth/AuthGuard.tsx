"use client"

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { PawPrint } from 'lucide-react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatBot } from "@/components/chat/ChatBot";

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useUser();
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simple check to prevent flashing
        const checkAuth = () => {
            // Allow public assets or api if needed, but here we just check pages
            if (pathname === '/login' || pathname === '/signup') {
                if (isAuthenticated) {
                    router.push('/');
                }
            } else {
                if (!isAuthenticated) {
                    router.push('/login');
                }
            }
            setIsLoading(false);
        };

        // Small delay to allow localStorage to load in UserContext
        const timer = setTimeout(checkAuth, 100);
        return () => clearTimeout(timer);

    }, [isAuthenticated, pathname, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fcfaf5]">
                <div className="flex flex-col items-center animate-pulse">
                    <PawPrint className="h-16 w-16 text-primary mb-4" />
                    <p className="text-xl font-semibold text-primary">Loading WoofWise...</p>
                </div>
            </div>
        );
    }

    // If not authenticated and trying to access protected route, render nothing (will redirect)
    if (!isAuthenticated && pathname !== '/login' && pathname !== '/signup') {
        return null;
    }

    // Login/Signup pages: No Header/Footer
    if (pathname === '/login' || pathname === '/signup') {
        return <>{children}</>;
    }

    // Protected pages: Show full layout
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <ChatBot />
            <Footer />
        </div>
    );
}


