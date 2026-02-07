"use client";

import { useState, useEffect } from "react";
import { Upload, ImageIcon, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { identifyBreed, PredictionResult } from "@/services/api"; // Ensure this path is correct
import { BreedResults } from "./BreedResults"; // Ensure this is imported
import Image from "next/image";

export function BreedIdentifier() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [predictions, setPredictions] = useState<PredictionResult[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // cleanup preview url
    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles?.[0]) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
            setError(null);
            setPredictions(null);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.webp']
        },
        maxFiles: 1,
        multiple: false
    });

    const handleIdentify = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);

        try {
            const results = await identifyBreed(file);
            if (results && results.length > 0) {
                setPredictions(results);
            } else {
                setError("Could not identify the breed. Please try a clearer image.");
            }
        } catch (err) {
            console.error(err);
            setError("Failed to connect to the AI model. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setPreviewUrl(null);
        setPredictions(null);
        setError(null);
    };

    if (predictions) {
        return (
            <BreedResults
                imageFile={file}
                predictions={predictions}
                onReset={handleReset}
            />
        );
    }

    return (
        <Card className="w-full max-w-xl mx-auto p-6 md:p-8 bg-white/80 backdrop-blur-sm shadow-xl border-primary/10">
            <div
                {...getRootProps()}
                className={cn(
                    "border-2 border-dashed rounded-xl p-8 transition-colors flex flex-col items-center justify-center min-h-[300px] cursor-pointer relative overflow-hidden",
                    isDragActive ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/50 hover:bg-gray-50",
                    file ? "border-primary/50 bg-primary/5" : ""
                )}
            >
                <input {...getInputProps()} />

                {file && previewUrl ? (
                    <div className="w-full h-full flex flex-col items-center justify-center z-10">
                        <div className="relative w-full h-48 md:h-64 mb-4 rounded-lg overflow-hidden shadow-sm flex items-center justify-center bg-gray-100">
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500 mb-2">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleReset();
                            }}
                        >
                            Remove Image
                        </Button>
                    </div>
                ) : (
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <Upload className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-gray-900">
                                {isDragActive ? "Drop the photo here" : "Upload your dog's photo"}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Drag & drop or click to browse
                            </p>
                        </div>
                        <p className="text-xs text-gray-400">
                            Supports PNG, JPG, WEBP
                        </p>
                    </div>
                )}
            </div>

            {error && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-md text-center border border-red-100">
                    {error}
                </div>
            )}

            <Button
                size="lg"
                className="w-full mt-6 text-lg font-semibold h-12"
                disabled={!file || loading}
                onClick={handleIdentify}
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Analyzing...
                    </>
                ) : (
                    "Identify Breed"
                )}
            </Button>
        </Card>
    );
}
