import { PawsAndPonder } from "@/components/sections/blog/PawsAndPonder";

export default function BlogPage() {
    return (
        <div className="pt-8">
            {/* Reusing the section but we could customize title if we refactored the component to accept props */}
            <div className="container px-4 mx-auto text-center mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">WoofWise Blog</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore our latest articles on dog care, breed histories, and training tips.
                </p>
            </div>
            {/* The component has its own padding/container, but that's fine for now */}
            <PawsAndPonder />
        </div>
    );
}
