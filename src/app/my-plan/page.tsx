"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import EmptyPlan from "@/components/plan/EmptyPlan";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import { useFitLog } from "@/hooks/useFitLog";

type PlanTab = "plan" | "saved";
type SortOption = "duration" | "calories" | "rating";

export default function MyPlanPage() {
    const { plan, saved } = useFitLog();

    const [activeTab, setActiveTab] = useState<PlanTab>("plan");
    const [sortBy, setSortBy] = useState<SortOption>("duration");

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0,
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
    );

    const currentWorkouts = activeTab === "plan" ? plan : saved;

    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
        if (sortBy === "duration") {
            return b.duration - a.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    return (
        <section className="container-fitlog py-12 lg:py-16">
            {/* Page Header */}
            <div className="mb-10">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fitlog-accent">
                    Your workout log
                </p>

                <h1 className="section-title">My Plan</h1>

                <p className="section-subtitle mt-4 max-w-2xl">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Metrics */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-fitlog-border bg-fitlog-surface p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-fitlog-muted">
                        Exercises
                    </p>

                    <p className="mt-2 font-display text-4xl font-bold text-fitlog-text">
                        {plan.length}
                    </p>
                </div>

                <div className="rounded-2xl border border-fitlog-border bg-fitlog-surface p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-fitlog-muted">
                        Minutes
                    </p>

                    <p className="mt-2 font-display text-4xl font-bold text-fitlog-text">
                        {totalMinutes}
                    </p>
                </div>

                <div className="rounded-2xl border border-fitlog-border bg-fitlog-surface p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-fitlog-muted">
                        Calories
                    </p>

                    <p className="mt-2 font-display text-4xl font-bold text-fitlog-text">
                        {totalCalories}
                    </p>
                </div>
            </div>

            {/* Tabs + Sort */}
            <div className="mb-8 flex flex-col gap-5 border-b border-fitlog-border sm:flex-row sm:items-end sm:justify-between">
                <div className="flex gap-8">
                    <button
                        type="button"
                        onClick={() => setActiveTab("plan")}
                        className={`relative pb-4 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === "plan"
                                ? "text-fitlog-accent"
                                : "text-fitlog-muted hover:text-fitlog-text"
                            }`}
                    >
                        Today's Plan

                        {activeTab === "plan" && (
                            <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-fitlog-accent" />
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("saved")}
                        className={`relative pb-4 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === "saved"
                                ? "text-fitlog-accent"
                                : "text-fitlog-muted hover:text-fitlog-text"
                            }`}
                    >
                        Saved

                        {activeTab === "saved" && (
                            <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-fitlog-accent" />
                        )}
                    </button>
                </div>

                {/* Sort */}
                <label className="relative mb-3 flex items-center gap-3 sm:mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-fitlog-muted">
                        Sort By
                    </span>

                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(event) => {
                                setSortBy(
                                    event.target.value as SortOption,
                                );
                            }}
                            className="appearance-none rounded-full border border-fitlog-border bg-fitlog-surface py-2.5 pr-10 pl-4 text-sm font-bold text-fitlog-text outline-none transition-colors focus:border-fitlog-accent"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                        <FiChevronDown
                            aria-hidden="true"
                            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-fitlog-muted"
                        />
                    </div>
                </label>
            </div>

            {/* Workout List */}
            <div className="space-y-4">
                {sortedWorkouts.length === 0 ? (
                    <EmptyPlan type={activeTab} />
                ) : (
                    sortedWorkouts.map((workout) => (
                        <PlanWorkoutCard
                            key={workout.id}
                            workout={workout}
                            type={activeTab}
                        />
                    ))
                )}
            </div>
        </section>
    );
}