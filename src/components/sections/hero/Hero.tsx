import { BreedIdentifier } from "./BreedIdentifier";
import * as motion from "framer-motion/client";

export function Hero() {
    return (
        <section id="detector" className="relative py-20 px-4 md:py-32 overflow-hidden bg-[#fcfaf5]">
            {/* Background decorative elements could act here, e.g. blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/80 blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left space-y-6"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-4">
                            ✨ AI-Powered Dog Identification
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                            Curious About Your <span className="text-primary">Dog's Breed?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                            Upload a photo and let our advanced AI reveal your furry friend's ancestry in seconds. Discover their story today.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 text-sm text-gray-500 font-medium"
                        >
                            <span className="flex items-center gap-1">✓ Instant Results</span>
                            <span className="flex items-center gap-1">✓ High Accuracy</span>
                            <span className="flex items-center gap-1">✓ Free & Secure</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="lg:pl-8"
                    >
                        <BreedIdentifier />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
