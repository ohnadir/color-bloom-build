import { useState } from "react";
import { Search, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const MemberValidationTab = () => {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState<null | { name: string; id: string; eligible: boolean }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setFound({ name: "Ahmed Al Maktoum", id: search || "M-2024-001", eligible: true });
      toast.success("Member found!");
    }
  };

  const handleConfirm = () => {
    toast.success("Redemption confirmed successfully!");
    setFound(null);
    setSearch("");
  };

  return (
    <div className="bg-navy-light rounded-lg border border-amber/30 p-6">
      <h3 className="text-base font-bold text-white">Validate Member & Confirm Redemption</h3>
      <p className="text-sm text-white/40 mb-5">Search for members using their unique membership number and confirm privilege redemptions</p>

      <div className="flex gap-3 mb-6">
        <div className="flex-1">
          <label className="text-sm font-medium text-amber block mb-1.5">Membership Number</label>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter membership number (e.g., M-2024-001)" className="w-full bg-navy border border-white/10 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber" />
        </div>
        <button onClick={handleSearch} className="self-end flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-navy text-sm" style={{ background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }}>
          <Search className="w-4 h-4" /> Search
        </button>
      </div>

      {!found ? (
        <div className="flex flex-col items-center justify-center py-16 text-white/30">
          <Users className="w-12 h-12 mb-3 opacity-40" />
          <p className="text-sm">Enter a membership number to search for a member</p>
        </div>
      ) : (
        <div className="p-5 rounded-lg bg-navy border border-amber/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-amber/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-amber" />
            </div>
            <div>
              <p className="font-semibold text-white">{found.name}</p>
              <p className="text-xs text-white/50">{found.id}</p>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400">
              <CheckCircle className="w-3 h-3" /> Eligible
            </span>
          </div>
          <button onClick={handleConfirm} className="w-full py-2.5 rounded-md font-semibold text-navy text-sm" style={{ background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }}>
            Confirm Redemption
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberValidationTab;
