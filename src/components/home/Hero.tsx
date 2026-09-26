import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

const heroImage =
    "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740";

export default function Hero() {
    return (
        <section className="border-b border-fitlog-border">
            <div className="container-fitlog grid min-h-[calc(100vh-4.5rem)] items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
                {/* Content */}
                <div className="max-w-2xl">
                    <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-fitlog-accent">
                        Workout Library
                    </p>

                    <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-fitlog-text sm:text-6xl lg:text-7xl xl:text-8xl">
                        Train with intent.
                        <br />
                        Log every set.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-fitlog-muted sm:text-lg">
                        Explore a focused collection of workouts, build your daily plan,
                        and keep track of every session.
                    </p>

                    <Link
                        href="#library"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-fitlog-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-105"
                    >
                        Browse workouts
                        <FiArrowDownRight className="text-lg" />
                    </Link>
                </div>

                {/* Image */}
                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                    <div className="absolute -inset-4 rounded-3xl bg-fitlog-accent/10 blur-3xl" />

                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-fitlog-border bg-fitlog-surface">
                        <Image
                            src={heroImage}
                            alt="Fitness workout"
                            fill
                            priority
                            sizes="(max-width: 1024px) 90vw, 45vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-fitlog-bg/70 via-transparent to-transparent" />

                        <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-fitlog-bg/80 px-4 py-2 backdrop-blur-sm">
                            <span className="text-xs font-bold uppercase tracking-widest text-fitlog-accent">
                                Train hard
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}