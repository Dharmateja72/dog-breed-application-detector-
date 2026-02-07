"use client"

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { breedOrigins } from "@/data/breed-origins";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function WorldMap() {
    const [content, setContent] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const handleMouseEnter = (geo: any) => {
        const { name } = geo.properties;
        const originData = breedOrigins[name];
        if (originData) {
            setContent(`${name}: ${originData.breeds.length} breeds found`);
        } else {
            setContent("");
        }
    };

    const handleMouseLeave = () => {
        setContent("");
    };

    const handleClick = (geo: any) => {
        const { name } = geo.properties;
        if (breedOrigins[name]) {
            setSelectedCountry(name);
        } else {
            setSelectedCountry(null);
        }
    };

    const selectedData = selectedCountry ? breedOrigins[selectedCountry] : null;

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 border rounded-xl overflow-hidden shadow-lg bg-blue-50/30">
                <ComposableMap projectionConfig={{ scale: 200 }} height={500}>
                    <ZoomableGroup center={[0, 0]} zoom={1}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo: any) => {
                                    const { name } = geo.properties;
                                    const hasData = !!breedOrigins[name];

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={() => handleMouseEnter(geo)}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(geo)}
                                            style={{
                                                default: {
                                                    fill: hasData ? "#F59E0B" : "#D6D6DA",
                                                    outline: "none",
                                                    transition: "all 250ms"
                                                },
                                                hover: {
                                                    fill: hasData ? "#D97706" : "#EAEAEC",
                                                    outline: "none",
                                                    cursor: hasData ? "pointer" : "default"
                                                },
                                                pressed: {
                                                    fill: "#B45309",
                                                    outline: "none"
                                                }
                                            }}
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={content}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                <Tooltip id="my-tooltip" />
            </div>

            <div className="lg:w-1/3">
                {selectedData ? (
                    <Card className="h-full border-primary/20">
                        <CardHeader className="bg-primary/5">
                            <CardTitle className="text-2xl flex items-center gap-2 text-primary">
                                <PawPrint className="h-6 w-6" />
                                {selectedData.country}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <p className="text-muted-foreground mb-6 italic">
                                "{selectedData.description}"
                            </p>
                            <h3 className="font-semibold mb-4 text-lg">Native Breeds:</h3>
                            <ul className="space-y-3">
                                {selectedData.breeds.map((breed) => (
                                    <li key={breed} className="flex items-center gap-2 p-2 rounded-md bg-secondary/50 hover:bg-secondary transition-colors">
                                        <span className="h-2 w-2 rounded-full bg-primary" />
                                        {breed}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="h-full flex items-center justify-center p-8 text-center text-muted-foreground border-dashed">
                        <div>
                            <PawPrint className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p className="text-lg">Click on a highlighted country to discover its native dog breeds!</p>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}
