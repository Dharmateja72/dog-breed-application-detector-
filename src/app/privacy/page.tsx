export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to WoofWise. We respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                </p>

                <h2>2. Data We Collect</h2>
                <p>
                    We do not collect any personal data when you use the breed identification tool.
                    Images uploaded are processed securely and are not stored permanently on our servers.
                </p>

                <h2>3. Third-Party Services</h2>
                <p>
                    We use Hugging Face for our AI model hosting. Please refer to their privacy policy for more information
                    on how they handle data processing.
                </p>

                <h2>4. Contact Us</h2>
                <p>
                    If you have any questions about this privacy policy, please contact us.
                </p>
            </div>
        </div>
    );
}
