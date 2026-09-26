import Hero from "@/components/home/Hero";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <section id="library" className="container-fitlog py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-fitlog-accent">
            The Library
          </p>

          <h2 className="section-title">The Library</h2>

          <p className="section-subtitle mt-4">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <p className="text-fitlog-muted">
          {workouts.length} workouts loaded successfully.
        </p>
      </section>
    </>
  );
}