import { useState } from "react";
import {
  LayoutDashboard, Store, Gift, Calendar, Bell, Star, MessageSquare, Phone, Tag, Snowflake, LogOut, User, Megaphone, Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import MemberOverviewTab from "@/components/member/MemberOverviewTab";
import PartnerDirectoryTab from "@/components/member/PartnerDirectoryTab";
import OffersTab from "@/components/member/OffersTab";
import EventsTab from "@/components/member/EventsTab";
import NotificationsTab from "@/components/member/NotificationsTab";
import FavoritesTab from "@/components/member/FavoritesTab";
import FeedbackTab from "@/components/member/FeedbackTab";
import ContactsTab from "@/components/member/ContactsTab";
import SpecialOffersTab from "@/components/member/SpecialOffersTab";
import SeasonalOffersTab from "@/components/member/SeasonalOffersTab";
import SponsorPlacementsTab from "@/components/member/SponsorPlacementsTab";

type Tab =
  | "overview"
  | "directory"
  | "offers"
  | "events"
  | "notifications"
  | "favorites"
  | "feedback"
  | "contacts"
  | "special"
  | "seasonal"
  | "sponsors";

const tabs: { key: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "overview", label: "Dashboard", icon: LayoutDashboard },
  { key: "directory", label: "Partner Directory", icon: Store },
  { key: "offers", label: "Offers", icon: Gift },
  { key: "special", label: "Special Offers", icon: Tag },
  { key: "seasonal", label: "Seasonal", icon: Snowflake },
  { key: "events", label: "Events", icon: Calendar },
  { key: "sponsors", label: "Sponsors", icon: Megaphone },
  { key: "favorites", label: "Favorites", icon: Star },
  { key: "feedback", label: "Feedback", icon: MessageSquare },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "contacts", label: "Contacts", icon: Phone },
];

const MemberDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-navy flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 shrink-0">
        <div className="flex items-center justify-between px-4 lg:px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white/60 hover:text-white transition-colors mr-1"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="w-9 h-9 rounded-full border-2 border-amber flex items-center justify-center">
              <User className="w-5 h-5 text-amber" />
            </div>
            <div>
              <p className="text-base font-bold text-white">Member Portal</p>
              <p className="text-xs text-white/50">Welcome back, John</p>
            </div>
          </div>
          <Link
            to="/member-signin"
            className="flex items-center gap-2 text-sm text-amber border border-amber/40 rounded-md px-4 py-2 hover:bg-amber/10 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </Link>
        </div>
      </header>

      {/* Gold gradient line */}
      <div
        className="h-0.5 shrink-0"
        style={{ background: "linear-gradient(90deg, #FCEFAE 0%, #DFBB0B 50%, #FCEFAE 100%)" }}
      />

      {/* Body: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`shrink-0 border-r border-white/10 bg-navy-light transition-all duration-300 overflow-y-auto ${
            sidebarOpen ? "w-56" : "w-14"
          }`}
        >
          <nav className="flex flex-col gap-1 p-2 mt-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  title={tab.label}
                  className={`flex items-center gap-3 rounded-md text-sm font-medium transition-colors ${
                    sidebarOpen ? "px-3 py-2.5" : "px-0 py-2.5 justify-center"
                  } ${
                    isActive
                      ? "text-navy"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  style={
                    isActive
                      ? { background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }
                      : undefined
                  }
                >
                  <tab.icon className="w-4 h-4 shrink-0" />
                  {sidebarOpen && <span className="truncate">{tab.label}</span>}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "overview" && <MemberOverviewTab />}
          {activeTab === "directory" && <PartnerDirectoryTab />}
          {activeTab === "offers" && <OffersTab />}
          {activeTab === "special" && <SpecialOffersTab />}
          {activeTab === "seasonal" && <SeasonalOffersTab />}
          {activeTab === "events" && <EventsTab />}
          {activeTab === "sponsors" && <SponsorPlacementsTab />}
          {activeTab === "favorites" && <FavoritesTab />}
          {activeTab === "feedback" && <FeedbackTab />}
          {activeTab === "notifications" && <NotificationsTab />}
          {activeTab === "contacts" && <ContactsTab />}
        </main>
      </div>
    </div>
  );
};

export default MemberDashboard;
