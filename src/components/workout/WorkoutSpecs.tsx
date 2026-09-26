import {
    FiActivity,
    FiClock,
    FiStar,
    FiTarget,
    FiZap,
} from "react-icons/fi";

import type { Workout } from "@/types/workout";

interface WorkoutSpecsProps {
    workout: Workout;
}

export default function WorkoutSpecs({
    workout,
}: WorkoutSpecsProps) {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiActivity />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Equipment
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.equipment}
                </p>
            </div>

            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiTarget />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Difficulty
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.difficulty}
                </p>
            </div>

            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiActivity />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Sets
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.sets}
                </p>
            </div>

            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiActivity />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Reps
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.reps}
                </p>
            </div>

            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiClock />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Duration
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.duration} min
                </p>
            </div>

            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiZap />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Calories
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.caloriesBurned}
                </p>
            </div>

            <div className="rounded-xl border border-fitlog-border bg-fitlog-surface p-4 sm:col-span-3">
                <div className="mb-3 flex items-center gap-2 text-fitlog-accent">
                    <FiStar />
                    <span className="text-xs font-bold uppercase tracking-wide">
                        Rating
                    </span>
                </div>

                <p className="text-sm font-semibold text-fitlog-text">
                    {workout.rating}
                </p>
            </div>
        </div>
    );
}