import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    return (
        <section className="py-20 bg-white">
            <div className="container max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">
                        Everything you need to know about WoofWise and breed identification.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How accurate is the breed identification?</AccordionTrigger>
                        <AccordionContent>
                            Our AI model is trained on thousands of dog images and covers over 120 breeds. While highly accurate, results for very complex mixed breeds may vary.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What kind of photos work best?</AccordionTrigger>
                        <AccordionContent>
                            Clear, well-lit photos where the dog's face and body are visible work best. Avoid heavy filters, extreme angles, or photos with multiple dogs for best results.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is my data and my dog's photo safe?</AccordionTrigger>
                        <AccordionContent>
                            Yes! We value your privacy. Photos are processed for identification and then discarded. We do not store your personal photos without permission.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Is this service really free?</AccordionTrigger>
                        <AccordionContent>
                            Yes, WoofWise is currently 100% free to use for all dog lovers.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
