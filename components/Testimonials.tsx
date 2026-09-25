// Las tarjetas van vacías por ahora: todavía no hay diseño para los mensajes.
// Cuando lo tengas, agregá el contenido adentro de cada <li>.
const testimonialCount = 3;

export default function Testimonials() {
  return (
    <section className="bg-cookie-light px-6 py-16 text-center text-cookie-dark sm:px-8">
      <h2 className="text-2xl font-bold sm:text-3xl">What people are saying</h2>

      <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
        {Array.from({ length: testimonialCount }).map((_, i) => (
          <li
            key={i}
            className="h-32 rounded-2xl bg-cookie-orange transition-transform duration-300 hover:-translate-y-1"
          />
        ))}
      </ul>
    </section>
  );
}
