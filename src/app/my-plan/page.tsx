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
            return second.duration - first.duration; // was: first.duration - second.duration
        }

        if (sortBy === "calories") {
            return second.caloriesBurned - first.caloriesBurned;
        }

        return second.rating - first.rating;
    });

    return (
        <main className="container-fitlog py-12 lg:py-20">
            <div className="max-w-2xl">

                <h1 className="section-title">My Plan</h1>

                <p className="section-subtitle mt-4">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="mt-10">
                <PlanMetrics />
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <PlanTabs activeTab={activeTab} onChange={setActiveTab} />

                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-wide text-fitlog-muted">
                        Sort By
                    </span>

                    <SortDropdown value={sortBy} onChange={setSortBy} />
                </div>
            </div>

            <div className="mt-6">
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