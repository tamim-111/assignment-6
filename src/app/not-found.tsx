import Link from "next/link";

export default function NotFound() {
    return (
        <section className="container-fitlog flex min-h-[70vh] items-center justify-center py-16">
            <div className="max-w-xl text-center">
                <p className="font-display text-8xl font-bold leading-none text-fitlog-accent sm:text-9xl">
                    404
                </p>

                <h1 className="mt-6 font-display text-4xl font-bold uppercase text-fitlog-text sm:text-5xl">
                    Workout Not Found
                </h1>

                <p className="mt-4 text-sm leading-7 text-fitlog-muted sm:text-base">
                    The workout or page you are looking for does not exist.
                    Check the URL or head back to the workout library.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-full bg-fitlog-accent px-7 py-3 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02]"
                >
                    Back to Workouts
                </Link>
            </div>
        </section>
    );
}