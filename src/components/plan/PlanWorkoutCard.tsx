"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FiCheck,
    FiClock,
    FiStar,
    FiX,
    FiZap,
} from "react-icons/fi";
import { toast } from "react-toastify";

import { useFitLog } from "@/hooks/useFitLog";
import type { Workout } from "@/types/workout";

interface PlanWorkoutCardProps {
    workout: Workout;
    isSaved?: boolean;
}

export default function PlanWorkoutCard({
    workout,
    isSaved = false,
}: PlanWorkoutCardProps) {
    const { removeFromPlan, removeSavedWorkout } = useFitLog();

    const handleRemove = () => {
        if (isSaved) {
            removeSavedWorkout(workout.id);
            toast.success("Workout removed from saved.");
            return;
        }

        removeFromPlan(workout.id);
        toast.success("Workout removed from today's plan.");
    };

    const handleMarkAsDone = () => {
        removeFromPlan(workout.id);
        toast.success("Workout marked as done.");
    };

    return (
        <article className="group overflow-hidden rounded-2xl border border-fitlog-border bg-fitlog-surface">
            <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
                {/* Workout Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-fitlog-surface-light md:aspect-auto md:min-h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-fitlog-bg/60 via-transparent to-transparent" />
                </div>

                {/* Workout Information */}
                <div className="flex flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="mb-3 flex flex-wrap gap-2">
                                {workout.muscleGroups.map((muscleGroup) => (
                                    <span
                                        key={muscleGroup}
                                        className="rounded-full border border-fitlog-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-fitlog-muted"
                                    >
                                        {muscleGroup}
                                    </span>
                                ))}
                            </div>

                            <h3 className="font-display text-2xl font-bold uppercase leading-tight text-fitlog-text">
                                {workout.name}
                            </h3>

                            <p className="mt-2 text-sm text-fitlog-muted">
                                {workout.equipment}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleRemove}
                            aria-label={`Remove ${workout.name}`}
                            className="shrink-0 rounded-full border border-fitlog-border p-2 text-fitlog-muted transition-colors hover:border-red-500 hover:text-red-500"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-3 border-y border-fitlog-border py-4">
                        <div className="flex items-center gap-2">
                            <FiClock className="shrink-0 text-fitlog-accent" />

                            <div>
                                <p className="text-[10px] uppercase tracking-wide text-fitlog-muted">
                                    Duration
                                </p>
                                <p className="text-sm font-semibold text-fitlog-text">
                                    {workout.duration} min
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <FiZap className="shrink-0 text-fitlog-accent" />

                            <div>
                                <p className="text-[10px] uppercase tracking-wide text-fitlog-muted">
                                    Calories
                                </p>
                                <p className="text-sm font-semibold text-fitlog-text">
                                    {workout.caloriesBurned}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <FiStar className="shrink-0 text-fitlog-accent" />

                            <div>
                                <p className="text-[10px] uppercase tracking-wide text-fitlog-muted">
                                    Rating
                                </p>
                                <p className="text-sm font-semibold text-fitlog-text">
                                    {workout.rating}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href={`/workouts/${workout.id}`}
                            className="inline-flex flex-1 items-center justify-center rounded-full border border-fitlog-border px-5 py-3 text-sm font-bold uppercase tracking-wide text-fitlog-text transition-colors hover:border-fitlog-accent hover:text-fitlog-accent"
                        >
                            View Details
                        </Link>

                        {!isSaved && (
                            <button
                                type="button"
                                onClick={handleMarkAsDone}
                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fitlog-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02]"
                            >
                                <FiCheck />
                                Mark as Done
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}