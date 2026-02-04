import { useState } from "react";
import { Users, TrendingUp, Shield, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import { toast } from "sonner";

const partnerBenefits = [
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
  {
    icon: MessageSquare,
    title: "Direct Engagement",
    description: "Promote exclusive offers directly to members",
  },
];

const partnerReceives = [
  "Dedicated partner presence on the ALPHA website and members-only platform, including logo, brand description, and imagery",
  "Secure partner access to manage and update your brand profile, contact information, and content",
  "Opportunities to share exclusive offers, benefits, and promotions directly with members via the platform and selected ALPHA communication channels",
  "All partnerships are carefully curated to ensure relevance, quality, and long-term value for both our members and our partners",
];

const Partners = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Partnership enquiry submitted successfully!");
    setFormData({
      companyName: "",
      industry: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      website: "",
      message: "",
    });
  };

  return (
    <Layout>
      <PageHero 
        title="Partner with ALPHA" 
        subtitle="Connect with Automotive Decision-Makers"
      />

      {/* Intro Text */}
      <section className="py-12 bg-navy">
        <div className="container-main text-center">
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join our network of premium partners and reach a highly targeted 
            membership of automotive professionals
          </p>
        </div>
      </section>

      {/* Partnering with ALPHA */}
      <section className="py-16 bg-background">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Partnering with ALPHA</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At ALPHA, we collaborate with a select group of partners whose services and offerings align 
              with the lifestyle, expectations, and standards of our members. We value partners who deliver 
              quality, relevance, and genuine benefit to the automotive professionals and leaders within our network.
            </p>
            <p>
              As an ALPHA partner, your brand gains access to a highly targeted membership of automotive 
              professionals and leaders, along with their families, based in the UAE. Our members value 
              trusted recommendations, premium experiences, and meaningful engagement over traditional advertising.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container-main">
          <h2 className="section-title text-center mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
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

      {/* What Partners Receive */}
      <section className="py-16 bg-background">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">What Partners Receive</h2>
          <div className="bg-navy rounded-lg p-8">
            <ul className="space-y-4">
              {partnerReceives.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <span className="text-amber mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partner Enquiry Form */}
      <section className="py-16 bg-secondary">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-10">
            <MessageSquare className="w-10 h-10 text-amber mx-auto mb-4" />
            <h2 className="section-title">Partner Enquiry</h2>
            <p className="text-muted-foreground">
              Interested in partnering with ALPHA? Get in touch with us
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Industry*</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Contact Name*</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Contact Email*</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Contact Phone*</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Website*</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <label className="form-label">Tell us about your business and partnership interest*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input resize-none"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Submit Partnership Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
