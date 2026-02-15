import { useState } from "react";
import { Upload, Plus, X } from "lucide-react";
import { toast } from "sonner";

const existingOffers = [
  { title: "20% Off Premium Detailing", status: "approved", views: 245, redemptions: 34 },
  { title: "Free Car Wash with Service", status: "pending", views: 0, redemptions: 0 },
  { title: "VIP Lounge Access", status: "approved", views: 189, redemptions: 67 },
];

const ManageOffersTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) { toast.error("Please enter an offer title"); return; }
    toast.success("Offer submitted for review!");
    setTitle("");
    setDescription("");
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header with New Offer button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Manage Offers</h2>
          <p className="text-sm text-white/40">Create and manage your partnership offers</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-navy text-sm"
          style={{ background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }}
        >
          <Plus className="w-4 h-4" /> New Offer
        </button>
      </div>

      {/* Your Offers */}
      <div className="bg-navy-light rounded-lg border border-amber/30 p-6">
        <h3 className="text-base font-bold text-white">Your Offers</h3>
        <p className="text-sm text-white/40 mb-4">Manage and update your existing offers</p>
        <div className="space-y-3">
          {existingOffers.map((o) => (
            <div key={o.title} className="p-4 rounded-lg bg-navy border border-white/5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{o.title}</p>
                  <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mt-1 ${
                    o.status === "approved" ? "bg-emerald-500/20 text-emerald-400" : "bg-orange-500/20 text-orange-400"
                  }`}>{o.status}</span>
                </div>
                <button className="text-xs text-amber border border-amber/40 rounded px-3 py-1 hover:bg-amber/10 transition-colors">Edit</button>
              </div>
              <div className="flex gap-6 mt-3 text-xs text-white/40">
                <span>Total Views: {o.views}</span>
                <span>Redemptions: {o.redemptions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-navy-light border border-white/10 rounded-xl w-full max-w-lg mx-4 p-6 relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-1">Submit New Offer</h3>
            <p className="text-sm text-white/40 mb-5">All content is subject to approval by ALPHA administration before being published on the platform</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-amber block mb-1.5">Offer Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., 20% Off Premium Detailing Service" className="w-full bg-navy border border-white/10 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber" />
              </div>
              <div>
                <label className="text-sm font-medium text-amber block mb-1.5">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Describe your offer in detail..." className="w-full bg-navy border border-white/10 rounded-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-amber resize-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-amber block mb-1.5">Offer Image</label>
                <div className="w-28 h-24 border-2 border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-amber/50 transition-colors">
                  <Upload className="w-5 h-5 text-white/40 mb-1" />
                  <span className="text-xs text-white/40">Upload Image</span>
                </div>
              </div>
              <button type="submit" className="w-full py-3 rounded-md font-semibold text-navy text-sm" style={{ background: "linear-gradient(180deg, #FCEFAE 0%, #DFBB0B 100%)" }}>
                Submit for Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageOffersTab;
