"use client";

import { FiChevronDown } from "react-icons/fi";

export type SortOption = "duration" | "calories" | "rating";

interface SortDropdownProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export default function SortDropdown({
    value,
    onChange,
}: SortDropdownProps) {
    return (
        <div className="relative">
            <label htmlFor="sort-workouts" className="sr-only">
                Sort workouts
            </label>

            <select
                id="sort-workouts"
                value={value}
                onChange={(event) =>
                    onChange(event.target.value as SortOption)
                }
                className="appearance-none rounded-full border border-fitlog-border bg-fitlog-surface px-5 py-3 pr-11 text-sm font-semibold uppercase tracking-wide text-fitlog-text outline-none transition-colors hover:border-fitlog-accent focus:border-fitlog-accent"
            >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
            </select>

            <FiChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-fitlog-muted"
            />
        </div>
    );
}