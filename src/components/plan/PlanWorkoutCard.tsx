"use client";

import Image from "next/image";
import Link from "next/link";

import {
    FiCheck,
    FiClock,
    FiEye,
    FiStar,
    FiTrash2,
    FiZap,
} from "react-icons/fi";
import { toast } from "react-toastify";

import { useFitLog } from "@/hooks/useFitLog";
import type { Workout } from "@/types/workout";

interface PlanWorkoutCardProps {
    workout: Workout;
    type: "plan" | "saved";
}

export default function PlanWorkoutCard({
    workout,
    type,
}: PlanWorkoutCardProps) {
    const {
        removeFromPlan,
        removeSavedWorkout,
        markAsDone,
    } = useFitLog();

    const handleRemove = () => {
        if (type === "plan") {
            removeFromPlan(workout.id);
            toast.success("Workout removed from today's plan.");
            return;
        }

        removeSavedWorkout(workout.id);
        toast.success("Workout removed from saved.");
    };

    const handleMarkAsDone = () => {
        markAsDone(workout);
        toast.success("Workout marked as done.");
    };

    return (
        <article className="overflow-hidden rounded-2xl border border-fitlog-border bg-fitlog-surface transition-colors hover:border-fitlog-accent/40">
            <div className="grid md:grid-cols-[220px_minmax(0,1fr)]">
                {/* Workout Image */}
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="object-cover"
                    />
                </div>

                {/* Workout Content */}
                <div className="flex flex-col p-5 sm:p-6">
                    <div className="flex-1">
                        {/* Muscle Groups */}
                        <div className="mb-3 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="rounded-full border border-fitlog-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-fitlog-muted"
                                >
                                    {muscleGroup}
                                </span>
                            ))}
                        </div>

                        {/* Workout Name */}
                        <h2 className="font-display text-2xl font-bold uppercase leading-tight text-fitlog-text sm:text-3xl">
                            {workout.name}
                        </h2>

                        {/* Equipment */}
                        <p className="mt-2 text-sm text-fitlog-muted">
                            {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                            <div className="flex items-center gap-2 text-sm text-fitlog-muted">
                                <FiClock className="text-fitlog-accent" />
                                <span>{workout.duration} min</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-fitlog-muted">
                                <FiZap className="text-fitlog-accent" />
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-fitlog-muted">
                                <FiStar className="text-fitlog-accent" />
                                <span>{workout.rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-fitlog-border pt-5 sm:flex-row">
                        <Link
                            href={`/workouts/${workout.id}`}
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fitlog-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02]"
                        >
                            <FiEye />
                            View Details
                        </Link>

                        {type === "plan" && (
                            <button
                                type="button"
                                onClick={handleMarkAsDone}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-fitlog-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-fitlog-accent transition-colors hover:bg-fitlog-accent hover:text-fitlog-bg"
                            >
                                <FiCheck />
                                Mark as Done
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={handleRemove}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-fitlog-border px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-fitlog-muted transition-colors hover:border-red-500 hover:text-red-500"
                        >
                            <FiTrash2 />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}