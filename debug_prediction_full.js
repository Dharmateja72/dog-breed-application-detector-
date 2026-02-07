import { Client } from "@gradio/client";

async function run() {
    try {
        console.log("Connecting to API...");
        const client = await Client.connect("SuryaKathyakeyaBoddi/dog-breed-ai");

        // Create a minimal 1x1 transparent PNG buffer
        // Signature: \x89PNG\r\n\x1a\n ...
        const base64Png = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
        const imageBuffer = Buffer.from(base64Png, 'base64');

        // Create a Blob-like object because @gradio/client on Node might need it or accepts Buffer directly if typed correctly.
        // The client.predict accepts Buffer in Node environment usually.

        console.log("Sending prediction request...");
        const result = await client.predict("/predict", {
            image: new Blob([imageBuffer], { type: 'image/png' })
        });

        console.log("--- RAW RESULT DATA ---");
        console.log(JSON.stringify(result.data, null, 2));
        console.log("-----------------------");

    } catch (error) {
        console.error("Error during prediction:", error);
    }
}

run();
