import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiClock, FiStar, FiZap } from "react-icons/fi";

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
            <div className="relative aspect-[4/3] overflow-hidden bg-fitlog-surface-light">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-fitlog-bg/70 via-transparent to-transparent" />

                {/* Difficulty */}
                <div className="absolute top-4 right-4 rounded-full border border-white/10 bg-fitlog-bg/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-bold uppercase tracking-wide text-fitlog-accent">
                        {workout.difficulty}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscleGroup) => (
                        <span
                            key={muscleGroup}
                            className="rounded-full border border-fitlog-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-fitlog-muted"
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
                <p className="mt-3 text-sm text-fitlog-muted">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-fitlog-border pt-4">
                    <div className="flex items-center gap-2">
                        <FiClock className="shrink-0 text-fitlog-accent" />

                        <div>
                            <p className="text-xs text-fitlog-muted">Duration</p>
                            <p className="text-sm font-semibold text-fitlog-text">
                                {workout.duration} min
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <FiZap className="shrink-0 text-fitlog-accent" />

                        <div>
                            <p className="text-xs text-fitlog-muted">Calories</p>
                            <p className="text-sm font-semibold text-fitlog-text">
                                {workout.caloriesBurned}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <FiStar className="shrink-0 text-fitlog-accent" />

                        <div>
                            <p className="text-xs text-fitlog-muted">Rating</p>
                            <p className="text-sm font-semibold text-fitlog-text">
                                {workout.rating}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}