import { HappyUsers } from "@/components/sections/testimonials/HappyUsers";

export default function ReviewsPage() {
    return (
        <div className="pt-8 bg-[#fcfaf5]">
            <div className="container px-4 mx-auto text-center mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Community Reviews</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    See what dog lovers around the world are saying about WoofWise.
                </p>
            </div>
            <HappyUsers />
        </div>
    );
}
