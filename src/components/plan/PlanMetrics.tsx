"use client";

import { FiActivity, FiClock, FiZap } from "react-icons/fi";

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
        {
            label: "Exercises",
            value: plan.length,
            icon: FiActivity,
        },
        {
            label: "Minutes",
            value: totalMinutes,
            icon: FiClock,
        },
        {
            label: "Calories",
            value: totalCalories,
            icon: FiZap,
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                    <div
                        key={metric.label}
                        className="rounded-2xl border border-fitlog-border bg-fitlog-surface p-5"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-fitlog-muted">
                                {metric.label}
                            </p>

                            <Icon className="text-lg text-fitlog-accent" />
                        </div>

                        <p className="mt-4 font-display text-4xl font-bold text-fitlog-text">
                            {metric.value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}