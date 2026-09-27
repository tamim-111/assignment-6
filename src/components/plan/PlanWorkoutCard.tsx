"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiClock, FiStar, FiX, FiZap } from "react-icons/fi";
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
        <article className="flex flex-col gap-4 rounded-2xl border border-fitlog-border bg-fitlog-surface p-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Thumbnail + info */}
            <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-fitlog-surface-light">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                    />
                </div>

                <div>
                    <h3 className="font-display text-base font-bold uppercase leading-tight text-fitlog-text">
                        {workout.name}
                    </h3>

                    <p className="text-xs text-fitlog-muted">{workout.equipment}</p>

                    <div className="mt-1 flex items-center gap-3 text-xs text-fitlog-muted">
                        <span className="flex items-center gap-1">
                            <FiClock className="text-fitlog-accent" />
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <FiZap className="text-fitlog-accent" />
                            {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <FiStar className="text-fitlog-accent" />
                            {workout.rating}
                        </span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
                <Link
                    href={`/workouts/${workout.id}`}
                    className="inline-flex items-center justify-center rounded-full border border-fitlog-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-fitlog-text transition-colors hover:border-fitlog-accent hover:text-fitlog-accent"
                >
                    View Details
                </Link>

                {!isSaved && (
                    <button
                        type="button"
                        onClick={handleMarkAsDone}
                        className="inline-flex items-center gap-1.5 rounded-full bg-fitlog-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02]"
                    >
                        <FiCheck />
                        Mark as Done
                    </button>
                )}

                <button
                    type="button"
                    onClick={handleRemove}
                    aria-label={`Remove ${workout.name}`}
                    className="shrink-0 text-fitlog-muted transition-colors hover:text-red-500"
                >
                    <FiX />
                </button>
            </div>
        </article>
    );
}