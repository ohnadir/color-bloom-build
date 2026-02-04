import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageHero 
        title="About ALPHA" 
        subtitle="Automotive Leaders and Professional Hub Association"
      />

      <section className="py-16 bg-background">
        <div className="container-main max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                ALPHA (Automotive Leaders and Professional Hub Association) is an exclusive social and lifestyle club 
                designed specifically for automotive professionals and leaders in the UAE. We bring together industry 
                executives, dealership owners, managers, and professionals who share a passion for excellence in the 
                automotive sector.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                We exist to deliver excellence to those who drive it. Through carefully curated partnerships and 
                exclusive member benefits, we provide access to premium experiences that match the standards and 
                expectations of automotive industry leaders.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As an ALPHA member, you gain access to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Exclusive beach clubs and leisure facilities</li>
                <li>Premium gym and fitness centers</li>
                <li>Fine dining restaurants</li>
                <li>Family-friendly attractions and activities</li>
                <li>Social networking events with industry peers</li>
                <li>Automotive and motorsport experiences</li>
                <li>Travel and hospitality benefits</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain the same high standards that our members deliver to their customers.
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Exclusivity</h3>
                  <p className="text-sm text-muted-foreground">
                    Membership is carefully curated for automotive professionals only.
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    We foster meaningful connections within the automotive industry.
                  </p>
                </div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Value</h3>
                  <p className="text-sm text-muted-foreground">
                    Every partnership and benefit is selected for genuine member value.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link to="/membership" className="btn-primary">
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
