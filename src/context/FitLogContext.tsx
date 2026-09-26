"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

interface FitLogContextValue {
    plan: Workout[];
    saved: Workout[];

    addToPlan: (workout: Workout) => void;
    removeFromPlan: (workoutId: number) => void;

    saveWorkout: (workout: Workout) => void;
    removeSavedWorkout: (workoutId: number) => void;
}

const FitLogContext = createContext<FitLogContextValue | undefined>(
    undefined,
);

interface FitLogProviderProps {
    children: ReactNode;
}

export function FitLogProvider({
    children,
}: FitLogProviderProps) {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    const addToPlan = (workout: Workout) => {
        setPlan((currentPlan) => {
            for (const item of currentPlan) {
                if (item.id === workout.id) {
                    return currentPlan;
                }
            }

            return [...currentPlan, workout];
        });
    };

    const removeFromPlan = (workoutId: number) => {
        setPlan((currentPlan) => {
            const updatedPlan: Workout[] = [];

            for (const workout of currentPlan) {
                if (workout.id !== workoutId) {
                    updatedPlan.push(workout);
                }
            }

            return updatedPlan;
        });
    };

    const saveWorkout = (workout: Workout) => {
        setSaved((currentSaved) => {
            for (const item of currentSaved) {
                if (item.id === workout.id) {
                    return currentSaved;
                }
            }

            return [...currentSaved, workout];
        });
    };

    const removeSavedWorkout = (workoutId: number) => {
        setSaved((currentSaved) => {
            const updatedSaved: Workout[] = [];

            for (const workout of currentSaved) {
                if (workout.id !== workoutId) {
                    updatedSaved.push(workout);
                }
            }

            return updatedSaved;
        });
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeSavedWorkout,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
}

export function useFitLog() {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider",
        );
    }

    return context;
}