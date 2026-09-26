"use client";

import { FiBookmark, FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

import { useFitLog } from "@/hooks/useFitLog";
import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
    workout: Workout;
}

export default function WorkoutActions({
    workout,
}: WorkoutActionsProps) {
    const { plan, saved, addToPlan, saveWorkout } = useFitLog();

    let isAlreadyInPlan = false;
    let isAlreadySaved = false;

    for (const item of plan) {
        if (item.id === workout.id) {
            isAlreadyInPlan = true;
            break;
        }
    }

    for (const item of saved) {
        if (item.id === workout.id) {
            isAlreadySaved = true;
            break;
        }
    }

    const handleAddToPlan = () => {
        if (isAlreadyInPlan) {
            toast.info("Workout is already in today's plan.");
            return;
        }

        addToPlan(workout);
        toast.success("Workout added to today's plan.");
    };

    const handleSaveWorkout = () => {
        if (isAlreadySaved) {
            toast.info("Workout is already saved.");
            return;
        }

        saveWorkout(workout);
        toast.success("Workout saved for later.");
    };

    return (
        <div className="flex flex-col gap-3 sm:flex-row">
            <button
                type="button"
                onClick={handleAddToPlan}
                disabled={isAlreadyInPlan}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fitlog-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
                <FiPlus />

                {isAlreadyInPlan
                    ? "Already in today's plan"
                    : "Add to today's plan"}
            </button>

            <button
                type="button"
                onClick={handleSaveWorkout}
                disabled={isAlreadySaved}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-fitlog-border px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-fitlog-text transition-colors hover:border-fitlog-accent hover:text-fitlog-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-fitlog-border disabled:hover:text-fitlog-text"
            >
                <FiBookmark />

                {isAlreadySaved
                    ? "Saved for later"
                    : "Save for later"}
            </button>
        </div>
    );
}