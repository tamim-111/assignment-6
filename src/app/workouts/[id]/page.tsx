import { notFound } from "next/navigation";

import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkoutById } from "@/lib/api";

interface WorkoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WorkoutDetailsPage({
    params,
}: WorkoutDetailsPageProps) {
    const { id } = await params;

    let workout;

    try {
        workout = await getWorkoutById(id);
    } catch {
        notFound();
    }

    if (!workout) {
        notFound();
    }

    return <WorkoutDetails workout={workout} />;
}