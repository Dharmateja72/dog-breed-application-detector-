import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PredictionResult } from "@/services/api";
import { RotateCcw } from "lucide-react";
import Image from "next/image";
import * as motion from "framer-motion/client";

interface BreedResultsProps {
    imageFile: File | null;
    predictions: PredictionResult[];
    onReset: () => void;
}

export function BreedResults({ imageFile, predictions, onReset }: BreedResultsProps) {
    if (!imageFile) return null;

    const imageUrl = URL.createObjectURL(imageFile);
    const topBreed = predictions[0];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full max-w-xl mx-auto overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl border-primary/10">
                <CardContent className="p-0">
                    <div className="relative w-full h-64 bg-gray-100">
                        <Image
                            src={imageUrl}
                            alt="Uploaded dog"
                            fill
                            className="object-contain"
                            onLoad={() => URL.revokeObjectURL(imageUrl)}
                        />
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                        <div className="text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg font-medium text-muted-foreground uppercase tracking-wider text-sm mb-1"
                            >
                                It looks like a
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="text-3xl md:text-4xl font-bold text-primary"
                            >
                                {topBreed ? topBreed.label : "Unknown Breed"}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm font-medium text-gray-500 mt-2"
                            >
                                {topBreed ? `${(topBreed.confidence * 100).toFixed(1)}% Confidence` : ""}
                            </motion.p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="font-semibold text-gray-900 border-b pb-2">Top Predictions</h3>
                            {predictions.slice(0, 3).map((pred, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (idx * 0.1) }}
                                    className="space-y-1"
                                >
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-gray-700">{pred.label}</span>
                                        <span className="text-gray-500">{(pred.confidence * 100).toFixed(1)}%</span>
                                    </div>
                                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                                        {/* Custom animated progress bar since generic Transition might not work on 'value' prop directly without more setup */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${pred.confidence * 100}%` }}
                                            transition={{ delay: 0.8 + (idx * 0.1), duration: 1, ease: "easeOut" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Button
                            onClick={onReset}
                            variant="outline"
                            className="w-full mt-4 gap-2 h-12 text-base"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Identify Another Dog
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
