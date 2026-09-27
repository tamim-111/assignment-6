import type { Workout } from "@/types/workout";

interface WorkoutSpecsProps {
    workout: Workout;
}

const SPEC_ROWS = (workout: Workout) => [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
];

export default function WorkoutSpecs({ workout }: WorkoutSpecsProps) {
    return (
        <div className="overflow-hidden rounded-xl border border-fitlog-border bg-fitlog-surface">
            {SPEC_ROWS(workout).map((row, index) => (
                <div
                    key={row.label}
                    className={`flex items-center justify-between px-4 py-3 ${index !== 0 ? "border-t border-fitlog-border" : ""
                        }`}
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-fitlog-muted">
                        {row.label}
                    </span>

                    <span className="text-sm font-semibold text-fitlog-text">
                        {row.value}
                    </span>
                </div>
            ))}
        </div>
    );
}