import { Users, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";

const sponsorBenefits = [
  {
    icon: Users,
    title: "Targeted Audience",
    description: "Access to automotive professionals and leaders in the UAE",
  },
  {
    icon: TrendingUp,
    title: "Brand Visibility",
    description: "Dedicated presence on ALPHA website and members portal",
  },
  {
    icon: Shield,
    title: "Curated Partnership",
    description: "Quality-focused, long-term value partnerships",
  },
];

const sponsorLogos = [
  { name: "Hyundai", placeholder: "HYUNDAI" },
  { name: "Porsche", placeholder: "PORSCHE" },
  { name: "Audi", placeholder: "AUDI" },
  { name: "Ford", placeholder: "FORD" },
];

const Sponsors = () => {
  return (
    <Layout>
      <PageHero 
        title="Our Sponsors" 
        subtitle="Partners in Excellence"
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container-main max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            ALPHA is proud to partner with leading brands that share our commitment to excellence and 
            quality. Our sponsors play a vital role in delivering exceptional experiences and benefits to our members.
          </p>
        </div>
      </section>

      {/* Sponsor Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Valued Sponsors */}
      <section className="py-16 bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Valued Sponsors</h2>
            <p className="text-muted-foreground">
              Trusted partners supporting automotive excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorLogos.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg border border-border p-8 flex items-center justify-center h-28 hover:shadow-lg transition-shadow"
              >
                <span className="text-xl font-bold text-muted-foreground">{sponsor.placeholder}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
