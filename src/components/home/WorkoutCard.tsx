import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiClock, FiZap, FiStar } from "react-icons/fi";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
    workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-2xl border border-fitlog-border bg-fitlog-surface transition-all duration-300 hover:-translate-y-1 hover:border-fitlog-accent/50"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-fitlog-surface-light">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fitlog-bg via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Muscle Groups — solid pills */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscleGroup) => (
                        <span
                            key={muscleGroup}
                            className="rounded-full bg-fitlog-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-fitlog-bg"
                        >
                            {muscleGroup}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight text-fitlog-text transition-colors group-hover:text-fitlog-accent">
                        {workout.name}
                    </h3>

                    <FiArrowUpRight className="mt-1 shrink-0 text-xl text-fitlog-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fitlog-accent" />
                </div>

                {/* Equipment */}
                <p className="mt-2 text-sm text-fitlog-muted">
                    {workout.equipment}
                </p>

                {/* Stats — single inline row, icon + value */}
                <div className="mt-5 flex items-center gap-4 border-t border-fitlog-border pt-4 text-sm text-fitlog-text">
                    <div className="flex items-center gap-1.5">
                        <FiClock className="text-fitlog-muted" />
                        <span>{workout.duration} min</span>
                    </div>

                    <span className="text-fitlog-border">•</span>

                    <div className="flex items-center gap-1.5">
                        <FiZap className="text-fitlog-muted" />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <span className="text-fitlog-border">•</span>

                    <div className="flex items-center gap-1.5">
                        <FiStar className="text-fitlog-muted" />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}