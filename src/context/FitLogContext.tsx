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
    saveWorkout: (workout: Workout) => void;
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

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveWorkout,
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