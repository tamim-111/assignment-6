import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

import WorkoutActions from "@/components/workout/WorkoutActions";
import WorkoutSpecs from "@/components/workout/WorkoutSpecs";

import type { Workout } from "@/types/workout";

interface WorkoutDetailsProps {
    workout: Workout;
}

export default function WorkoutDetails({
    workout,
}: WorkoutDetailsProps) {
    return (
        <main className="container-fitlog py-10 lg:py-16">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-fitlog-muted transition-colors hover:text-fitlog-accent"
            >
                <FiArrowLeft />
                Back to workouts
            </Link>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
                {/* Image */}
                <div className="lg:sticky lg:top-28">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-fitlog-border bg-fitlog-surface">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-fitlog-bg/60 via-transparent to-transparent" />

                        <div className="absolute top-5 left-5 rounded-full border border-white/10 bg-fitlog-bg/80 px-4 py-2 backdrop-blur-sm">
                            <span className="text-xs font-bold uppercase tracking-widest text-fitlog-accent">
                                {workout.difficulty}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <div className="mb-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="rounded-full border border-fitlog-border px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-fitlog-muted"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-fitlog-text sm:text-6xl lg:text-7xl">
                        {workout.name}
                    </h1>

                    <p className="mt-6 text-base leading-7 text-fitlog-muted sm:text-lg">
                        {workout.description}
                    </p>

                    <div className="mt-8">
                        <WorkoutSpecs workout={workout} />
                    </div>

                    <div className="mt-10 border-t border-fitlog-border pt-8">
                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-fitlog-accent">
                            How to do it
                        </p>

                        <div className="space-y-5">
                            {workout.instructions.map((instruction, index) => (
                                <div
                                    key={`${workout.id}-${index}`}
                                    className="flex gap-4"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fitlog-accent text-fitlog-bg">
                                        <FiCheck className="text-sm" />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-fitlog-muted">
                                            Step {index + 1}
                                        </p>

                                        <p className="text-sm leading-6 text-fitlog-text sm:text-base">
                                            {instruction}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 border-t border-fitlog-border pt-8">
                        <WorkoutActions workout={workout} />
                    </div>
                </div>
            </div>
        </main>
    );
}