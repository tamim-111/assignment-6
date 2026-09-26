import Link from "next/link";

interface EmptyPlanProps {
    type: "plan" | "saved";
}

export default function EmptyPlan({ type }: EmptyPlanProps) {
    const isPlan = type === "plan";

    return (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-fitlog-border bg-fitlog-surface px-6 py-12 text-center">
            <p className="font-display text-3xl font-bold uppercase text-fitlog-text">
                Nothing Here Yet
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-fitlog-muted">
                {isPlan
                    ? "Add workouts to your plan and they will appear here."
                    : "Save workouts you want to come back to later."}
            </p>

            <Link
                href="/#workouts"
                className="mt-6 rounded-full bg-fitlog-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02]"
            >
                Go to workouts
            </Link>
        </div>
    );
}