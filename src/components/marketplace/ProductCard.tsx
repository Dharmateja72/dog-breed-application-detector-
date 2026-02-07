"use client"

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {product.rating}
                </div>
            </div>

            <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1 h-10">
                    {product.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="p-4 pt-2 flex-grow">
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                    </span>
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full gap-2 group"
                    onClick={() => addToCart(product)}
                >
                    <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
