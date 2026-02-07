import { Client } from "@gradio/client";

export interface BreedPrediction {
    label: string;
    confidences: { [key: string]: number }[];
}

// Response structure based on Gradio generic output, typings may vary
export interface PredictionResult {
    label: string;
    confidence: number;
}

export async function identifyBreed(imageFile: File): Promise<PredictionResult[]> {
    try {
        const client = await Client.connect("SuryaKathyakeyaBoddi/dog-breed-ai");

        // Gradio client expects a Blob or File for image inputs
        const result = await client.predict("/predict", {
            image: imageFile,
        });

        console.log("Raw API Result:", result.data);

        // The result.data from Gradio usually comes as an array. 
        // For a classification label, it often returns { label: "Breed", confidences: [...] } or distinct structure.
        // Based on standard Gradio Image Classification, the output is typically a label and a dict of confidences.
        // We will inspect the output structure. 
        // Assuming standard layout: data[0] might be the label or the confidences object.

        // Let's assume the API returns the standard structure for this space type.
        // If it returns a standard Label output, data[0] is often the label object with details.

        const data = result.data;
        // console.log("Parsed API Data (Type):", typeof data, Array.isArray(data));

        let predictionData: any = null;

        // Gradio often wrap result in array, e.g. [ { "Breed": 0.9 } ]
        if (Array.isArray(data) && data.length > 0) {
            predictionData = data[0];
        } else if (typeof data === 'object') {
            predictionData = data;
        }

        if (!predictionData) return [];

        // Check for specific custom format found in debug:
        // [ { "Predicted Breed": "lakeland_terrier", "Decision Score": -0.0333 } ]
        if (predictionData && "Predicted Breed" in predictionData) {
            const label = predictionData["Predicted Breed"];
            let confidence = 0;

            // Handle Decision Score
            if ("Decision Score" in predictionData) {
                const score = Number(predictionData["Decision Score"]);
                confidence = 1 / (1 + Math.exp(-score));
            }

            return [{
                label: label,
                confidence: confidence
            }];
        }

        // Check Format 1: { label: "Breed", confidences: [...] }
        if (predictionData.confidences && Array.isArray(predictionData.confidences)) {
            return predictionData.confidences.map((item: any) => ({
                label: item.label,
                confidence: item.confidence
            }));
        }

        // Check Format 2: { "Breed A": 0.95, "Breed B": 0.05 }
        if (typeof predictionData === 'object') {
            const entries = Object.entries(predictionData);
            // Verify it looks like a prediction dictionary (key=string, value=number)
            const validEntries = entries.filter(([_, val]) => typeof val === 'number');

            if (validEntries.length > 0) {
                const parsedResults = validEntries.map(([label, confidence]) => ({
                    label,
                    confidence: Number(confidence) // Ensure number
                }));
                return parsedResults.sort((a, b) => b.confidence - a.confidence);
            }
        }

        return [];

        return [];
    } catch (error) {
        console.error("Breed identification failed:", error);
        throw new Error("Failed to identify breed. Please try again.");
    }
}
