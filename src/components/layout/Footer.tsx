import Link from "next/link";
import { FiActivity, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="border-t border-fitlog-border bg-fitlog-surface">
            <div className="container-fitlog flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="group inline-flex items-center gap-3"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fitlog-accent text-fitlog-bg">
                        <FiActivity className="text-xl" />
                    </span>

                    <span className="font-display text-2xl font-bold uppercase tracking-wide text-fitlog-text">
                        Fit<span className="text-fitlog-accent">Log</span>
                    </span>
                </Link>

                {/* Copyright */}
                <div className="flex items-center gap-2 text-sm text-fitlog-muted">
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>

                    <FiArrowUpRight className="hidden text-fitlog-accent sm:block" />
                </div>
            </div>
        </footer>
    );
}