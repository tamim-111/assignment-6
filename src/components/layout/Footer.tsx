import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-fitlog-border bg-fitlog-surface">
            <div className="container-fitlog flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <Link
                        href="/"
                        className="font-display text-2xl font-bold uppercase tracking-tight text-fitlog-text"
                    >
                        Fit<span className="text-fitlog-accent">Log</span>
                    </Link>

                    <p className="mt-2 text-sm text-fitlog-muted">
                        Train with intent. Log every set.
                    </p>
                </div>

                <nav className="flex flex-wrap gap-5 text-sm font-medium text-fitlog-muted">
                    <Link
                        href="/"
                        className="transition-colors hover:text-fitlog-accent"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="transition-colors hover:text-fitlog-accent"
                    >
                        My Plan
                    </Link>
                </nav>

                <p className="text-sm text-fitlog-muted">
                    © {new Date().getFullYear()} FitLog
                </p>
            </div>
        </footer>
    );
}