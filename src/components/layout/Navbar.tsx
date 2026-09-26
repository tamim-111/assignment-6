"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useFitLog } from "@/hooks/useFitLog";

const navItems = [
    {
        label: "Workout",
        href: "/",
    },
    {
        label: "My Plan",
        href: "/my-plan",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { plan, saved } = useFitLog();

    const planCount = plan.length;
    const savedCount = saved.length;

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-fitlog-border bg-fitlog-bg/95 backdrop-blur-md">
            <nav className="container-fitlog flex h-18 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="font-display text-2xl font-bold uppercase tracking-tight"
                >
                    FIT<span className="text-fitlog-accent">LOG</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${isActive(item.href)
                                    ? "text-fitlog-accent"
                                    : "text-fitlog-muted hover:text-fitlog-text"
                                    }`}
                            >
                                {item.label}

                                {isActive(item.href) && (
                                    <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-fitlog-accent" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Counters */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/my-plan"
                            className="rounded-full bg-fitlog-accent px-4 py-2 text-sm font-bold uppercase text-fitlog-bg transition-transform hover:scale-105"
                        >
                            Plan <span className="ml-1">{planCount}</span>
                        </Link>

                        <Link
                            href="/my-plan"
                            className="rounded-full border border-fitlog-border px-4 py-2 text-sm font-bold uppercase text-fitlog-text transition-colors hover:border-fitlog-accent hover:text-fitlog-accent"
                        >
                            Saved <span className="ml-1">{savedCount}</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                    className="rounded-lg p-2 text-fitlog-text transition-colors hover:bg-fitlog-surface md:hidden"
                >
                    {isMenuOpen ? (
                        <FiX className="text-2xl" />
                    ) : (
                        <FiMenu className="text-2xl" />
                    )}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-fitlog-border bg-fitlog-bg md:hidden">
                    <div className="container-fitlog flex flex-col gap-3 py-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase transition-colors ${isActive(item.href)
                                    ? "bg-fitlog-surface text-fitlog-accent"
                                    : "text-fitlog-muted hover:bg-fitlog-surface hover:text-fitlog-text"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="mt-2 flex gap-3">
                            <Link
                                href="/my-plan"
                                onClick={closeMenu}
                                className="flex-1 rounded-full bg-fitlog-accent px-4 py-2.5 text-center text-sm font-bold uppercase text-fitlog-bg"
                            >
                                Plan {planCount}
                            </Link>

                            <Link
                                href="/my-plan"
                                onClick={closeMenu}
                                className="flex-1 rounded-full border border-fitlog-border px-4 py-2.5 text-center text-sm font-bold uppercase text-fitlog-text"
                            >
                                Saved {savedCount}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}