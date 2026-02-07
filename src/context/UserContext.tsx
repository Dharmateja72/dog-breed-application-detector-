"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export interface UserProfile {
    name: string;
    email: string;
    bio: string;
    avatar: string; // URL
}

interface Order {
    id: string;
    date: string;
    total: number;
    items: { name: string; quantity: number; price: number }[];
    status: 'Delivered' | 'Processing' | 'Shipped';
}

interface UserContextType {
    user: UserProfile;
    updateUser: (updates: Partial<UserProfile>) => void;
    orders: Order[];
    addOrder: (order: Order) => void;
    isAuthenticated: boolean;
    login: (email: string) => void;
    signup: (name: string, email: string) => void;
    logout: () => void;
}

const defaultUser: UserProfile = {
    name: "Dog Lover",
    email: "woof@example.com",
    bio: "Passionate about all things canine! Proud parent of two retrievers.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile>(defaultUser);
    const [orders, setOrders] = useState<Order[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    // Load from local storage
    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
        }

        const storedUser = localStorage.getItem('user_profile');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user profile", e);
            }
        }

        const storedOrders = localStorage.getItem('user_orders');
        if (storedOrders) {
            try {
                setOrders(JSON.parse(storedOrders));
            } catch (e) {
                console.error("Failed to parse orders", e);
            }
        } else {
            // Mock some orders if empty
            const mockOrders: Order[] = [
                {
                    id: "ORD-1023",
                    date: "2023-11-15",
                    total: 64.98,
                    status: 'Delivered',
                    items: [
                        { name: "Premium Dog Food", quantity: 1, price: 49.99 },
                        { name: "Rubber Chew Toy", quantity: 1, price: 14.99 }
                    ]
                }
            ];
            setOrders(mockOrders);
        }
    }, []);

    const updateUser = (updates: Partial<UserProfile>) => {
        setUser(prev => {
            const newUser = { ...prev, ...updates };
            localStorage.setItem('user_profile', JSON.stringify(newUser));
            return newUser;
        });
    };

    const addOrder = (order: Order) => {
        setOrders(prev => {
            const newOrders = [order, ...prev];
            localStorage.setItem('user_orders', JSON.stringify(newOrders));
            return newOrders;
        });
    };

    const login = (email: string) => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        // In a real app, we'd fetch user data here.
        // For now, we keep the existing Mock User or update email if needed.
        updateUser({ email });
        router.push('/');
    };

    const signup = (name: string, email: string) => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        updateUser({ name, email });
        router.push('/');
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        router.push('/login');
    };

    return (
        <UserContext.Provider value={{ user, updateUser, orders, addOrder, isAuthenticated, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
