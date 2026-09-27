import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

import WorkoutActions from "@/components/workout/WorkoutActions";
import WorkoutSpecs from "@/components/workout/WorkoutSpecs";

import type { Workout } from "@/types/workout";

interface WorkoutDetailsProps {
    workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
    return (
        <main className="container-fitlog py-10 lg:py-16">
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
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-fitlog-text sm:text-6xl lg:text-7xl">
                        {workout.name}
                    </h1>

                    <p className="mt-6 text-base leading-7 text-fitlog-muted sm:text-lg">
                        {workout.description}
                    </p>

                    <div className="my-5 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscleGroup) => (
                            <span
                                key={muscleGroup}
                                className="rounded-full bg-fitlog-accent px-3 py-1.5 text-xs font-bold text-fitlog-bg"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8">
                        <WorkoutSpecs workout={workout} />
                    </div>

                    <div className="mt-8">
                        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-fitlog-text">
                            Instructions
                        </p>

                        <ol className="space-y-2">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={`${workout.id}-${index}`}
                                    className="flex gap-2 text-sm leading-6 text-fitlog-muted sm:text-base"
                                >
                                    <span className="shrink-0 text-fitlog-text">
                                        {index + 1}.
                                    </span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-8">
                        <WorkoutActions workout={workout} />
                    </div>
                </div>
            </div>
        </main>
    );
}