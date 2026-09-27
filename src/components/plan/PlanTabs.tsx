"use client";

interface PlanTabsProps {
    activeTab: "plan" | "saved";
    onChange: (tab: "plan" | "saved") => void;
}

export default function PlanTabs({ activeTab, onChange }: PlanTabsProps) {
    return (
        <div className="inline-flex items-center gap-1 rounded-full border border-fitlog-border bg-fitlog-surface p-1">
            <button
                type="button"
                onClick={() => onChange("plan")}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${activeTab === "plan"
                        ? "bg-fitlog-surface-light text-fitlog-text"
                        : "text-fitlog-muted hover:text-fitlog-text"
                    }`}
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                onClick={() => onChange("saved")}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${activeTab === "saved"
                        ? "bg-fitlog-surface-light text-fitlog-text"
                        : "text-fitlog-muted hover:text-fitlog-text"
                    }`}
            >
                Saved
            </button>
        </div>
    );
}