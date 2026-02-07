import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/client";

interface BlogCardProps {
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
    author: string;
    date: string;
}

export function BlogCard({ title, excerpt, imageUrl, slug, author, date }: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-white h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <CardHeader className="p-6 pb-2">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                        <span>{date}</span>
                        <span>By {author}</span>
                    </div>
                    <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/blog/${slug}`} className="line-clamp-2">
                            {title}
                        </Link>
                    </h3>
                </CardHeader>
                <CardContent className="p-6 pt-2 flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {excerpt}
                    </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform" asChild>
                        <Link href={`/blog/${slug}`}>
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
