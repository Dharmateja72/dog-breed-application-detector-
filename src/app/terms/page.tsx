export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using WoofWise, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2>2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on WoofWise's website for personal, non-commercial transitory viewing only.
                </p>

                <h2>3. Disclaimer</h2>
                <p>
                    The materials on WoofWise's website are provided on an 'as is' basis. WoofWise makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>4. Accuracy of Results</h2>
                <p>
                    The breed identification provided by our AI is for entertainment and informational purposes only. We do not guarantee 100% accuracy.
                </p>
            </div>
        </div>
    );
}
