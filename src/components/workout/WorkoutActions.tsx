import { FiBookmark, FiPlus } from "react-icons/fi";

export default function WorkoutActions() {
    return (
        <div className="flex flex-col gap-3 sm:flex-row">
            <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-fitlog-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-fitlog-bg transition-transform hover:scale-[1.02]"
            >
                <FiPlus />
                Add to today&apos;s plan
            </button>

            <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-fitlog-border px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-fitlog-text transition-colors hover:border-fitlog-accent hover:text-fitlog-accent"
            >
                <FiBookmark />
                Save for later
            </button>
        </div>
    );
}