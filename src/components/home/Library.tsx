"use client";

import { useState } from "react";

import WorkoutCard from "@/components/home/WorkoutCard";
import SortDropdown, {
    type SortOption,
} from "@/components/home/SortDropdown";

import type { Workout } from "@/types/workout";

interface LibraryProps {
    workouts: Workout[];
}

export default function Library({ workouts }: LibraryProps) {
    const [sortBy, setSortBy] = useState<SortOption>("duration");

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
        <section id="library" className="container-fitlog py-20 lg:py-28">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>

                    <h2 className="section-title">The Library</h2>

                    <p className="section-subtitle mt-4 max-w-xl">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* <div className="flex items-center justify-between gap-4 md:justify-end">
                    <p className="text-sm font-semibold uppercase tracking-wide text-fitlog-muted">
                        {workouts.length} workouts
                    </p>

                    <SortDropdown
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div> */}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sortedWorkouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}
            </div>
        </section>
    );
}