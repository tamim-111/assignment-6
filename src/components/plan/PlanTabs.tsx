"use client";

interface PlanTabsProps {
    activeTab: "plan" | "saved";
    onChange: (tab: "plan" | "saved") => void;
}

export default function PlanTabs({
    activeTab,
    onChange,
}: PlanTabsProps) {
    return (
        <div className="flex gap-6 border-b border-fitlog-border">
            <button
                type="button"
                onClick={() => onChange("plan")}
                className={`border-b-2 pb-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === "plan"
                        ? "border-fitlog-accent text-fitlog-accent"
                        : "border-transparent text-fitlog-muted hover:text-fitlog-text"
                    }`}
            >
                Today&apos;s Plan
            </button>

            <button
                type="button"
                onClick={() => onChange("saved")}
                className={`border-b-2 pb-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === "saved"
                        ? "border-fitlog-accent text-fitlog-accent"
                        : "border-transparent text-fitlog-muted hover:text-fitlog-text"
                    }`}
            >
                Saved
            </button>
        </div>
    );
}