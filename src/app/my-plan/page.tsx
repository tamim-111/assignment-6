"use client";

import { useState } from "react";

import EmptyPlan from "@/components/plan/EmptyPlan";
import PlanMetrics from "@/components/plan/PlanMetrics";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import SortDropdown, {
    type SortOption,
} from "@/components/home/SortDropdown";
import { useFitLog } from "@/hooks/useFitLog";

export default function MyPlanPage() {
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<SortOption>("duration");

    const { plan, saved } = useFitLog();

    const workouts = activeTab === "plan" ? plan : saved;

    const sortedWorkouts = [...workouts].sort((first, second) => {
        if (sortBy === "duration") {
            return first.duration - second.duration;
        }

        if (sortBy === "calories") {
            return second.caloriesBurned - first.caloriesBurned;
        }

        return second.rating - first.rating;
    });

    return (
        <main className="container-fitlog py-12 lg:py-20">
            <div className="max-w-2xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fitlog-accent">
                    Your Training
                </p>

                <h1 className="section-title">My Plan</h1>

                <p className="section-subtitle mt-4">
                    Keep your workouts organized and stay consistent with your training.
                </p>
            </div>

            <div className="mt-10">
                <PlanMetrics />
            </div>

            <div className="mt-12">
                <PlanTabs
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />
            </div>

            <div className="mt-8">
                <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-fitlog-muted">
                        {sortedWorkouts.length}{" "}
                        {activeTab === "plan" ? "planned" : "saved"} workouts
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold uppercase tracking-wide text-fitlog-muted">
                            Sort By
                        </span>

                        <SortDropdown
                            value={sortBy}
                            onChange={setSortBy}
                        />
                    </div>
                </div>

                {sortedWorkouts.length === 0 ? (
                    <EmptyPlan type={activeTab} />
                ) : (
                    <div className="space-y-4">
                        {sortedWorkouts.map((workout) => (
                            <PlanWorkoutCard
                                key={workout.id}
                                workout={workout}
                                isSaved={activeTab === "saved"}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}