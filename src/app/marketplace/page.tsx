import { products } from "@/data/products";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marketplace - WoofWise",
    description: "Shop the best products for your furry friend.",
};

export default function MarketplacePage() {
    return (
        <div className="container mx-auto py-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                    WoofWise Marketplace
                </h1>
                <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    Curated essentials for your dog's happiness and health.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="h-full">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
