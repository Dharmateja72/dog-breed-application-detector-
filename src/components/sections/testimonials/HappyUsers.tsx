import { TestimonialCard } from "./TestimonialCard";

export function HappyUsers() {
    const testimonials = [
        {
            name: "Alex Johnson",
            role: "Dog Mom",
            content: "I finally found out my shelter dog is a mix of Beagle and Terrier! The results were instant and so detailed.",
            rating: 5
        },
        {
            name: "Marcus Chen",
            role: "Veterinary Student",
            content: "Surprisingly accurate even for mixed breeds. I use it to double-check my own guesses at the clinic.",
            rating: 5
        },
        {
            name: "Sarah Williams",
            role: "Pet Photographer",
            content: "A fun tool to share with my clients. The interface is beautiful and easy to use on mobile.",
            rating: 4
        }
    ];

    return (
        <section className="py-20 bg-[#fcfaf5]">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Users</h2>
                    <p className="text-muted-foreground text-lg">
                        Join thousands of dog lovers who have discovered their pet's true heritage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
