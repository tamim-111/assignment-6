"use client";

import Link from "next/link";
import { FiArrowRight, FiClipboard } from "react-icons/fi";

interface EmptyPlanProps {
    type: "plan" | "saved";
}

export default function EmptyPlan({
    type,
}: EmptyPlanProps) {
    const isPlan = type === "plan";

    return (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-fitlog-border bg-fitlog-surface px-6 py-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-fitlog-border bg-fitlog-surface-light">
                <FiClipboard className="text-xl text-fitlog-accent" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-fitlog-accent">
                {isPlan ? "Today's Plan" : "Saved Workouts"}
            </p>

            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-fitlog-text sm:text-4xl">
                Nothing Here Yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-fitlog-muted">
                {isPlan
                    ? "Add workouts to your plan and they will appear here."
                    : "Save workouts for later and they will appear here."}
            </p>

            <Link
                href="/#library"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-fitlog-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-105"
            >
                Go to workouts
                <FiArrowRight />
            </Link>
        </div>
    );
}