import { Metadata } from "next";
import { WorldMap } from "@/components/map/WorldMap";

export const metadata: Metadata = {
    title: "World Breeds - WoofWise",
    description: "Discover dog breeds from around the world.",
};

export default function WorldBreedsPage() {
    return (
        <div className="container mx-auto py-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary">
                    Discover Breeds by Origin
                </h1>
                <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    Explore the globe and find out where your favorite breeds come from.
                </p>
            </div>

            <div className="w-full">
                <WorldMap />
            </div>
        </div>
    );
}
