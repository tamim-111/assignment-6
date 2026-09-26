import WorkoutCard from "@/components/home/WorkoutCard";
import type { Workout } from "@/types/workout";

interface LibraryProps {
    workouts: Workout[];
}

export default function Library({ workouts }: LibraryProps) {
    return (
        <section id="library" className="container-fitlog py-20 lg:py-28">
            {/* Section Header */}
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fitlog-accent">
                        The Library
                    </p>

                    <h2 className="section-title">The Library</h2>

                    <p className="section-subtitle mt-4 max-w-xl">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-fitlog-muted">
                    {workouts.length} workouts
                </p>
            </div>

            {/* Workout Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </section>
    );
}