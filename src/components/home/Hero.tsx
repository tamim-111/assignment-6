import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="container-fitlog py-8 lg:py-10">
            <div className="relative overflow-hidden rounded-2xl border border-fitlog-border bg-fitlog-surface">
                <div className="grid min-h-[360px] items-center lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Content */}
                    <div className="relative z-10 px-7 py-12 sm:px-10 lg:px-12 lg:py-14">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-fitlog-accent">
                            Workout Library
                        </p>

                        <h1 className="font-display max-w-2xl text-5xl font-bold uppercase leading-[0.9] tracking-tight text-fitlog-text sm:text-6xl lg:text-7xl">
                            Train with intent.
                            <br />
                            Log every set.
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-6 text-fitlog-muted sm:text-base">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                            it into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <Link
                            href="#library"
                            className="mt-6 inline-flex items-center gap-2 rounded-md bg-fitlog-accent px-5 py-3 text-xs font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-105"
                        >
                            Browse workouts
                            <FiArrowDownRight className="text-base" />
                        </Link>
                    </div>

                    {/* Banner Image */}
                    <div className="relative flex h-[280px] items-center justify-center px-6 sm:h-[320px] lg:h-[360px] lg:px-8">
                        <Image
                            src="/images/banner.png"
                            alt="FitLog workout illustration"
                            width={500}
                            height={500}
                            priority
                            className="h-full w-full object-contain object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}