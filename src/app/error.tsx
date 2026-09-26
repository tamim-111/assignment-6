"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="container-fitlog flex min-h-[50vh] items-center justify-center py-20">
            <div className="max-w-md text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-fitlog-accent">
                    Something went wrong
                </p>

                <h1 className="font-display text-4xl font-bold uppercase">
                    Could not load workouts
                </h1>

                <p className="mt-4 text-fitlog-muted">
                    We couldn`t load the workout library right now. Please try again.
                </p>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="mt-6 rounded-full bg-fitlog-accent px-6 py-3 text-sm font-bold uppercase text-fitlog-bg transition-transform hover:scale-105"
                >
                    Try again
                </button>
            </div>
        </main>
    );
}