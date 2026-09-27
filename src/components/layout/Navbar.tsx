"use client";

import Image from "next/image";
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
            <nav className="container-fitlog relative flex h-18 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2"
                >
                    <Image
                        src="/images/logo.png"
                        alt="FitLog logo"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                    />

                    <span className="font-display text-2xl font-bold uppercase tracking-tight">
                        FIT<span className="text-fitlog-accent">LOG</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${isActive(item.href)
                                    ? "bg-fitlog-accent/10 text-fitlog-accent"
                                    : "text-fitlog-muted hover:bg-fitlog-surface hover:text-fitlog-text"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Desktop Counters */}
                <div className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/my-plan"
                        className="group flex items-center gap-2 text-sm font-semibold text-fitlog-muted transition-colors hover:text-fitlog-text"
                    >
                        <span>Plan</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-fitlog-accent px-1.5 text-xs font-bold text-fitlog-bg transition-transform group-hover:scale-105">
                            {planCount}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="group flex items-center gap-2 text-sm font-semibold text-fitlog-muted transition-colors hover:text-fitlog-text"
                    >
                        <span>Saved</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-fitlog-border px-1.5 text-xs font-medium text-fitlog-muted transition-colors group-hover:border-fitlog-accent group-hover:text-fitlog-accent">
                            {savedCount}
                        </span>
                    </Link>
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