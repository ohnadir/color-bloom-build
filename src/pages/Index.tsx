import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import heroCar from "@/assets/hero-car.jpg";

const privilegeCards = [
  { title: "Beach Clubs", description: "Exclusive access to premium beach clubs" },
  { title: "Gym & Fitness Center", description: "Access to world-class fitness facilities" },
  { title: "Restaurants", description: "Exclusive access to premium restaurants" },
  { title: "Social Events", description: "Exclusive access to premium social events" },
];

const whyChooseFeatures = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver the same high standards our members provide to their customers",
  },
  {
    icon: Shield,
    title: "Exclusivity",
    description: "Curated partnerships and experiences for automotive professionals",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building meaningful connections within the automotive industry",
  },
  {
    icon: TrendingUp,
    title: "Value",
    description: "Genuine benefits that enhance your lifestyle and career",
  },
];

const sponsorLogos = [
  { name: "Hyundai", placeholder: "HYUNDAI" },
  { name: "Porsche", placeholder: "PORSCHE" },
  { name: "Audi", placeholder: "AUDI" },
  { name: "Ford", placeholder: "FORD" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url(${heroCar}) center/cover no-repeat`
        }}
      >
        <div className="container-main text-center py-20 relative z-10">
          <p className="text-amber text-lg mb-4 animate-fade-in">★ ALPHA ★</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            "Delivering Excellence to Those Who Drive It"
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            An exclusive social and lifestyle club for automotive professionals and leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/membership" className="btn-primary">
              Become an Alpha Member
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Member Privileges */}
      <section className="py-20 bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Member Privileges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our privileges are curated to reflect the lifestyles and expectations of senior automotive professionals.
              Through our Trusted Partner Network, you will receive access to the best and most exclusive experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {privilegeCards.map((card, index) => (
              <div 
                key={index} 
                className="relative h-48 rounded-lg overflow-hidden group cursor-pointer"
                style={{
                  background: `linear-gradient(to bottom, transparent 40%, rgba(15, 23, 42, 0.9) 100%), 
                              linear-gradient(45deg, hsl(222 47% 15%), hsl(222 35% 25%))`
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                  <p className="text-white/70 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/membership" className="btn-outline">
              View Membership Benefits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-20 bg-navy">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-light rounded-lg p-8 border-t-4 border-amber">
              <h3 className="text-amber font-semibold mb-4">Mission</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To deliver excellence to both our members and partners by creating a trusted, private 
                network for automotive leaders through meaningful, high-value relationships.
              </p>
            </div>
            <div className="bg-navy-light rounded-lg p-8 border-t-4 border-amber">
              <h3 className="text-amber font-semibold mb-4">Vision</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To be the UAE's most trusted private network for automotive leaders.
              </p>
            </div>
            <div className="bg-navy-light rounded-lg p-8 border-t-4 border-amber">
              <h3 className="text-amber font-semibold mb-4">Goals</h3>
              <ul className="text-white/80 text-sm leading-relaxed space-y-2">
                <li>• Curate premium, relevant partnerships</li>
                <li>• Deliver exceptional member experiences</li>
                <li>• Create long-term value for partners</li>
                <li>• Build a respected automotive leadership community</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/about" className="btn-primary">
              Learn More About ALPHA
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose ALPHA */}
      <section className="py-20 bg-secondary">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose ALPHA</h2>
            <p className="text-muted-foreground">
              Built for automotive professionals, by automotive professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="py-20 bg-background">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Sponsors</h2>
            <p className="text-muted-foreground">
              Trusted partners supporting automotive excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorLogos.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg border border-border p-8 flex items-center justify-center h-24 hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-bold text-muted-foreground">{sponsor.placeholder}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
