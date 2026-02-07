import { Client } from "@gradio/client";

async function run() {
    try {
        const client = await Client.connect("SuryaKathyakeyaBoddi/dog-breed-ai");
        const apiInfo = await client.view_api();
        console.log(JSON.stringify(apiInfo, null, 2));
    } catch (error) {
        console.error("Error connecting to Gradio space:", error);
    }
}

run();
