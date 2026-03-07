import { useState } from "react";
import {
  LayoutDashboard, Store, Gift, Calendar, Bell, Star, MessageSquare, Phone, Tag, Snowflake, LogOut, User, Megaphone,
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
        className="h-0.5"
        style={{ background: "linear-gradient(90deg, #FCEFAE 0%, #DFBB0B 50%, #FCEFAE 100%)" }}
      />

      {/* Content */}
      <div className="container-main py-6">
        {/* Tab Navigation — scrollable on mobile */}
        <div className="flex gap-1 mb-8 bg-navy-light rounded-lg border border-white/10 p-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-navy"
                  : "text-white/60 hover:text-white/80 hover:bg-white/5"
              }`}
              style={
                activeTab === tab.key
                  ? { background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }
                  : undefined
              }
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

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
      </div>
    </div>
  );
};

export default MemberDashboard;
