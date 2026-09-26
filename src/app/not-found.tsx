import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <main className="container-fitlog flex min-h-[70vh] items-center justify-center py-20">
            <div className="max-w-2xl text-center">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-fitlog-accent">
                    Error 404
                </p>

                <h1 className="font-display text-7xl font-bold uppercase leading-none tracking-tight text-fitlog-text sm:text-8xl lg:text-9xl">
                    Lost rep.
                </h1>

                <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-fitlog-muted sm:text-lg">
                    Looks like this page skipped the workout. The page you are looking
                    for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-fitlog-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-105"
                >
                    <FiHome />
                    Back to workouts
                </Link>
            </div>
        </main>
    );
}