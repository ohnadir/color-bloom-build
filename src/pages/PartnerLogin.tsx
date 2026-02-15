import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { toast } from "sonner";

const PartnerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login successful! Redirecting to Partner Portal...");
    setTimeout(() => navigate("/partner-dashboard"), 800);
  };

  return (
    <Layout>
      <PageHero title="Partner Login" subtitle="Access Your Partner Portal" />

      <section className="py-16 bg-background">
        <div className="container-main max-w-md">
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-7 h-7 text-amber" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Welcome Back</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Sign in to manage your offers and benefits
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="form-label">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="partner@company.com"
                    className="form-input pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="form-label">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="form-input pl-10"
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">
                Sign In
              </button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-6">
              Don't have a partner account?{" "}
              <a href="/partners" className="text-amber hover:underline">
                Apply here
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnerLogin;
