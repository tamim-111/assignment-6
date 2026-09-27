"use client";

import { useFitLog } from "@/hooks/useFitLog";

export default function PlanMetrics() {
    const { plan } = useFitLog();

    let totalMinutes = 0;
    let totalCalories = 0;

    for (const workout of plan) {
        totalMinutes += workout.duration;
        totalCalories += workout.caloriesBurned;
    }

    const metrics = [
        { label: "Exercises", value: plan.length, accent: true },
        { label: "Minutes", value: totalMinutes, accent: false },
        { label: "Calories", value: totalCalories, accent: false },
    ];

    return (
        <div className="grid grid-cols-3 divide-x divide-fitlog-border rounded-2xl border border-fitlog-border bg-fitlog-surface">
            {metrics.map((metric) => (
                <div key={metric.label} className="px-6 py-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-fitlog-muted">
                        {metric.label}
                    </p>

                    <p
                        className={`mt-2 font-display text-3xl font-bold ${metric.accent ? "text-fitlog-accent" : "text-fitlog-text"
                            }`}
                    >
                        {metric.value}
                    </p>
                </div>
            ))}
        </div>
    );
}