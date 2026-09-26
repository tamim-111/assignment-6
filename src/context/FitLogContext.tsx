"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";

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

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
            const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);

            if (storedPlan) {
                const parsedPlan: Workout[] = JSON.parse(storedPlan);
                setPlan(parsedPlan);
            }

            if (storedSaved) {
                const parsedSaved: Workout[] = JSON.parse(storedSaved);
                setSaved(parsedSaved);
            }
        } catch {
            localStorage.removeItem(PLAN_STORAGE_KEY);
            localStorage.removeItem(SAVED_STORAGE_KEY);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            PLAN_STORAGE_KEY,
            JSON.stringify(plan),
        );
    }, [plan, isLoaded]);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            SAVED_STORAGE_KEY,
            JSON.stringify(saved),
        );
    }, [saved, isLoaded]);

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