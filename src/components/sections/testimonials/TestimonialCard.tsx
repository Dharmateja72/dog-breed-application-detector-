import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import * as motion from "framer-motion/client";

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating: number;
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            <Card className="h-full border-none shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                            />
                        ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">"{content}"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                            {name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm">{name}</h4>
                            <p className="text-xs text-muted-foreground">{role}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
