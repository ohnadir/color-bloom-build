import { useState } from "react";
import { Search, Gift, CalendarCheck, Users, CheckCircle, Clock, BarChart3, LogOut, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import alphaLogo from "@/assets/alpha-logo.png";
import { toast } from "sonner";

// Mock data
const mockOffers = [
  { id: 1, title: "20% Off Full Service", status: "approved", redemptions: 42 },
  { id: 2, title: "Free Car Wash with Detail", status: "pending", redemptions: 0 },
  { id: 3, title: "Complimentary Inspection", status: "approved", redemptions: 18 },
];

const mockAttendance = [
  { id: 1, memberName: "Ahmed Al Maktoum", memberId: "ALPHA-1042", time: "09:15 AM" },
  { id: 2, memberName: "Sarah Johnson", memberId: "ALPHA-2187", time: "10:30 AM" },
  { id: 3, memberName: "Omar Khalid", memberId: "ALPHA-0893", time: "11:45 AM" },
];

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState<"offers" | "attendance">("offers");
  const [memberSearch, setMemberSearch] = useState("");
  const [foundMember, setFoundMember] = useState<null | { name: string; id: string; eligible: boolean }>(null);

  const handleMemberSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (memberSearch.trim()) {
      setFoundMember({
        name: "Ahmed Al Maktoum",
        id: memberSearch || "ALPHA-1042",
        eligible: true,
      });
      toast.success("Member found!");
    }
  };

  const handleConfirmRedemption = () => {
    toast.success("Redemption confirmed successfully!");
    setFoundMember(null);
    setMemberSearch("");
  };

  const handleConfirmAttendance = () => {
    toast.success("Attendance confirmed!");
    setFoundMember(null);
    setMemberSearch("");
  };

  const tabs = [
    { key: "offers" as const, label: "Privileges & Discounts", icon: Gift },
    { key: "attendance" as const, label: "Daily Access Benefits", icon: CalendarCheck },
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Top Bar */}
      <header className="border-b border-white/10">
        <div className="container-main flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md overflow-hidden">
              <img src={alphaLogo} alt="ALPHA Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-base font-bold text-white">ALPHA</span>
              <span className="text-[10px] text-amber ml-2 tracking-wider">PARTNER PORTAL</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">AutoLux Detailing</span>
            <Link to="/partner-login" className="flex items-center gap-1.5 text-sm text-amber hover:text-amber/80 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      {/* Summary Cards */}
      <section className="py-8">
        <div className="container-main">
          <h1 className="text-2xl font-bold text-white mb-6">Partner Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Offers", value: "2", icon: Gift, color: "text-green-400" },
              { label: "Pending Approval", value: "1", icon: Clock, color: "text-yellow-400" },
              { label: "Total Redemptions", value: "60", icon: CheckCircle, color: "text-amber" },
              { label: "Today's Attendance", value: "3", icon: Users, color: "text-blue-400" },
            ].map((card) => (
              <div key={card.label} className="bg-navy-light rounded-lg border border-white/10 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">{card.label}</span>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <span className="text-2xl font-bold text-white">{card.value}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setFoundMember(null); setMemberSearch(""); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-amber text-navy"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Member Search */}
            <div className="lg:col-span-1">
              <div className="bg-navy-light rounded-lg border border-white/10 p-6">
                <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                  <Search className="w-4 h-4 text-amber" />
                  Search Member
                </h3>
                <form onSubmit={handleMemberSearch} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter membership number..."
                    value={memberSearch}
                    onChange={(e) => setMemberSearch(e.target.value)}
                    className="w-full bg-navy border border-white/10 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Search
                  </button>
                </form>

                {foundMember && (
                  <div className="mt-5 p-4 rounded-md bg-navy border border-amber/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-amber/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-amber" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{foundMember.name}</p>
                        <p className="text-xs text-white/50">{foundMember.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="w-3.5 h-3.5 text-white/40" />
                      <span className="text-xs text-white/60">Profile image verified</span>
                    </div>
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${
                      foundMember.eligible
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}>
                      {foundMember.eligible ? "Eligible" : "Not Eligible"}
                    </span>
                    {foundMember.eligible && (
                      <button
                        onClick={activeTab === "offers" ? handleConfirmRedemption : handleConfirmAttendance}
                        className="btn-primary w-full mt-4 text-sm"
                      >
                        {activeTab === "offers" ? "Confirm Redemption" : "Confirm Attendance"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === "offers" ? (
                <div className="bg-navy-light rounded-lg border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-base font-semibold text-white">Your Offers</h3>
                    <button className="text-sm text-amber hover:text-amber/80 transition-colors">
                      + Add New Offer
                    </button>
                  </div>
                  <p className="text-xs text-white/40 italic mb-4">
                    All content is subject to approval by ALPHA administration before being published.
                  </p>
                  <div className="space-y-3">
                    {mockOffers.map((offer) => (
                      <div key={offer.id} className="flex items-center justify-between p-4 rounded-md bg-navy border border-white/5">
                        <div>
                          <p className="text-sm font-medium text-white">{offer.title}</p>
                          <p className="text-xs text-white/40 mt-0.5">
                            {offer.redemptions} redemptions
                          </p>
                        </div>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded ${
                          offer.status === "approved"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {offer.status === "approved" ? "Approved" : "Pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-navy-light rounded-lg border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-base font-semibold text-white flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-amber" />
                      Today's Attendance
                    </h3>
                    <span className="text-sm text-white/50">
                      3 / 10 daily limit
                    </span>
                  </div>
                  <p className="text-xs text-white/40 italic mb-4">
                    Daily access limits are defined within each individual partnership agreement. Count resets automatically each day.
                  </p>
                  <div className="space-y-3">
                    {mockAttendance.map((entry) => (
                      <div key={entry.id} className="flex items-center justify-between p-4 rounded-md bg-navy border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-amber" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{entry.memberName}</p>
                            <p className="text-xs text-white/40">{entry.memberId}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-white/40" />
                          <span className="text-xs text-white/50">{entry.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerDashboard;
