import { useState } from "react";
import { Search, CalendarCheck } from "lucide-react";
import { toast } from "sonner";

const DailyAttendanceTab = () => {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState<null | { name: string; id: string }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setFound({ name: "Ahmed Al Maktoum", id: search || "M-2024-001" });
      toast.success("Member found!");
    }
  };

  const handleConfirm = () => {
    toast.success("Attendance confirmed!");
    setFound(null);
    setSearch("");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Today's Check-ins", value: "23", sub: "Resets automatically at midnight", color: "text-amber" },
          { label: "Daily Limit", value: "50", sub: "As per partnership agreement", color: "text-blue-400" },
          { label: "Remaining", value: "27", sub: "Available slots today", color: "text-emerald-400" },
        ].map((s) => (
          <div key={s.label} className="bg-navy-light rounded-lg border border-white/10 p-5">
            <p className="text-sm text-white/50">{s.label}</p>
            <p className={`text-3xl font-bold mt-3 ${s.color}`}>{s.value}</p>
            <p className="text-xs text-white/40 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-navy-light rounded-lg border border-amber/30 p-6">
        <h3 className="text-base font-bold text-white">Attendance Validation System</h3>
        <p className="text-sm text-white/40 mb-5">Search members, confirm attendance, and track daily usage in real-time</p>

        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="text-sm font-medium text-amber block mb-1.5">Membership Number</label>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter membership number" className="w-full bg-navy border border-white/10 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber" />
          </div>
          <button onClick={handleSearch} className="self-end flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-navy text-sm" style={{ background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }}>
            <Search className="w-4 h-4" /> Search
          </button>
        </div>

        {!found ? (
          <div className="flex flex-col items-center justify-center py-16 text-white/30">
            <CalendarCheck className="w-12 h-12 mb-3 opacity-40" />
            <p className="text-sm">Enter a membership number to validate attendance</p>
          </div>
        ) : (
          <div className="p-5 rounded-lg bg-navy border border-amber/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-amber" />
              </div>
              <div>
                <p className="font-semibold text-white">{found.name}</p>
                <p className="text-xs text-white/50">{found.id}</p>
              </div>
            </div>
            <button onClick={handleConfirm} className="w-full py-2.5 rounded-md font-semibold text-navy text-sm" style={{ background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }}>
              Confirm Attendance
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyAttendanceTab;
