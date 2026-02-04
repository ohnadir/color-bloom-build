import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageHero 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us"
      />

      <section className="py-16 bg-background">
        <div className="container-main max-w-4xl">
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALPHA (Automotive Leaders and Professional Hub Association) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Professional information (job title, company, industry sector)</li>
                <li>Membership application data</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Process membership applications</li>
                <li>Provide member services and benefits</li>
                <li>Communicate with you about events and offers</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@alphaclub.ae" className="text-amber hover:underline">
                  privacy@alphaclub.ae
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
