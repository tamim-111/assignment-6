import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="library" className="container-fitlog py-20">
        <h2 className="section-title">The Library</h2>

        <p className="section-subtitle mt-4">
          Twelve lifts covering every major muscle group.
        </p>
      </section>
    </>
  );
}