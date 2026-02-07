import { FAQ } from "@/components/sections/faq/FAQ";

export default function FAQPage() {
    return (
        <div className="pt-12 pb-20">
            <div className="container px-4 mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Got questions about using WoofWise? We've got answers.
                </p>
            </div>
            <FAQ />
        </div>
    );
}
