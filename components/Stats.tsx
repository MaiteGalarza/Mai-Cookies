// Placeholder: ajustá los números y textos cuando tengas los datos reales
const stats = [
    { value: "100%", label: "Homemade" },
    { value: "5+", label: "Flavours to try" },
    { value: "100%", label: "Love baked in" },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-cookie-dark px-6 py-16 text-cookie-light sm:px-8">
        <ul className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {stats.map((s) => (
            <li key={s.label} className="text-center">
              <p className="text-4xl font-bold text-cookie-gold sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-cookie-light/90 sm:text-base">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  