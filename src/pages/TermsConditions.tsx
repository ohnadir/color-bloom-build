import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const TermsConditions = () => {
  return (
    <Layout>
      <PageHero 
        title="Terms & Conditions" 
        subtitle="Membership Terms and Conditions"
      />

      <section className="py-16 bg-background">
        <div className="container-main max-w-4xl">
          <p className="text-sm text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Membership Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALPHA membership is exclusively available to professionals and leaders within the automotive industry. 
                All applicants must meet the eligibility criteria and provide accurate information during the application process.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">2. Membership Types</h2>
              <p className="text-muted-foreground mb-3">ALPHA offers the following membership types:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Individual Membership</li>
                <li>Couple / Family Membership</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Member Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Members receive access to exclusive benefits including beach clubs, gyms, restaurants, family attractions, 
                social events, and more through our trusted partner network. Benefits are subject to availability and partner terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Membership Fees</h2>
              <p className="text-muted-foreground leading-relaxed">
                Membership fees are determined based on the membership type selected. All fees are non-refundable unless 
                otherwise stated. Payment terms will be communicated upon membership approval.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Code of Conduct</h2>
              <p className="text-muted-foreground mb-3">Members are expected to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Conduct themselves professionally at all times</li>
                <li>Respect fellow members and partners</li>
                <li>Comply with venue and event rules</li>
                <li>Not misuse membership privileges</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALPHA reserves the right to suspend or terminate membership for violation of these terms, non-payment of fees, 
                or conduct deemed inappropriate. Members may cancel their membership with written notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALPHA is not liable for any injuries, losses, or damages incurred while using member benefits or attending events. 
                Members participate at their own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALPHA reserves the right to modify these terms at any time. Members will be notified of significant changes 
                via email or through the member portal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these terms, please contact us at{" "}
                <a href="mailto:info@alphaclub.ae" className="text-amber hover:underline">
                  info@alphaclub.ae
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
