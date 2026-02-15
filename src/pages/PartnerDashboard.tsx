import { useState } from "react";
import { LayoutDashboard, Gift, Users, CalendarCheck, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardTab from "@/components/partner/DashboardTab";
import ManageOffersTab from "@/components/partner/ManageOffersTab";
import MemberValidationTab from "@/components/partner/MemberValidationTab";
import DailyAttendanceTab from "@/components/partner/DailyAttendanceTab";

type Tab = "dashboard" | "offers" | "validation" | "attendance";

const tabs: { key: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "offers", label: "Manage Offers", icon: Gift },
  { key: "validation", label: "Member Validation", icon: Users },
  { key: "attendance", label: "Daily Attendance", icon: CalendarCheck },
];

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container-main flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-amber flex items-center justify-center">
              <User className="w-5 h-5 text-amber" />
            </div>
            <div>
              <p className="text-base font-bold text-white">Partner Portal</p>
              <p className="text-xs text-white/50">Welcome back, Partner</p>
            </div>
          </div>
          <Link to="/partner-login" className="flex items-center gap-2 text-sm text-amber border border-amber/40 rounded-md px-4 py-2 hover:bg-amber/10 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </div>
      </header>

      {/* Gold gradient line */}
      <div className="h-0.5" style={{ background: "linear-gradient(90deg, #FCEFAE 0%, #DFBB0B 50%, #FCEFAE 100%)" }} />

      {/* Content */}
      <div className="container-main py-6">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 bg-navy-light rounded-lg border border-white/10 p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "text-navy"
                  : "text-white/60 hover:text-white/80 hover:bg-white/5"
              }`}
              style={activeTab === tab.key ? { background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" } : undefined}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "offers" && <ManageOffersTab />}
        {activeTab === "validation" && <MemberValidationTab />}
        {activeTab === "attendance" && <DailyAttendanceTab />}
      </div>
    </div>
  );
};

export default PartnerDashboard;
