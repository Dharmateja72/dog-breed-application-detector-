export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: "food" | "toy" | "accessory";
    rating: number;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Premium Dog Food - Chicken & Rice",
        description: "High-protein dry dog food with real chicken and wholesome rice. Perfect for active dogs.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=2670&auto=format&fit=crop",
        category: "food",
        rating: 4.8
    },
    {
        id: "2",
        name: "Durable Rubber Chew Toy",
        description: "Indestructible rubber toy for aggressive chewers. Keeps gums healthy.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2670&auto=format&fit=crop",
        category: "toy",
        rating: 4.5
    },
    {
        id: "3",
        name: "Reflective Dog Leash",
        description: "5ft heavy-duty leash with reflective stitching for night walks.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop",
        category: "accessory",
        rating: 4.7
    },
    {
        id: "4",
        name: "Orthopedic Dog Bed",
        description: "Memory foam bed providing joint relief for older dogs. Removable washable cover.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=2574&auto=format&fit=crop",
        category: "accessory",
        rating: 4.9
    },
    {
        id: "5",
        name: "Grain-Free Salmon Treats",
        description: "Delicious and healthy treats rich in Omega-3 for shiny coats.",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?q=80&w=2574&auto=format&fit=crop",
        category: "food",
        rating: 4.6
    },
    {
        id: "6",
        name: "Interactive Puzzle Toy",
        description: "Mental stimulation toy to keep your dog entertained and challenged.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?q=80&w=2669&auto=format&fit=crop",
        category: "toy",
        rating: 4.4
    }
];
