import { BlogCard } from "./BlogCard";

export function PawsAndPonder() {
    const articles = [
        {
            title: "Understanding Dog Body Language",
            excerpt: "Learn what your furry friend is trying to tell you through their tail wags, ear positions, and posture.",
            imageUrl: "/images/blog/blog-1.jpg",
            slug: "dog-body-language",
            author: "Dr. Sarah Woof",
            date: "Oct 12, 2024"
        },
        {
            title: "Top 10 Healthiest Dog Breeds",
            excerpt: "Discover which dog breeds are known for their longevity and robust health to help you choose your next companion.",
            imageUrl: "/images/blog/blog-2.jpg",
            slug: "healthiest-dog-breeds",
            author: "Mike Barker",
            date: "Oct 08, 2024"
        },
        {
            title: "Nutrition Tips for Puppies",
            excerpt: "Essential dietary advice to ensure your growing puppy gets all the nutrients they need for a healthy life.",
            imageUrl: "/images/blog/blog-3.jpg",
            slug: "puppy-nutrition",
            author: "Emily Paw",
            date: "Sep 28, 2024"
        }
    ];

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Paws & Ponder</h2>
                    <p className="text-muted-foreground text-lg">
                        Expert advice, breed guides, and heartwarming stories for every dog lover.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <BlogCard key={article.slug} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
