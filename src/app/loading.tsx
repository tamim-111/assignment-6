export default function Loading() {
    return (
        <main className="container-fitlog flex min-h-[50vh] items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-fitlog-accent" />

                <p className="text-sm font-semibold uppercase tracking-widest text-fitlog-muted">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
}