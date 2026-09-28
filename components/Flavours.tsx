import Image from "next/image";
import Wave from "./Wave";

const flavours = [
  {
    name: "Vanilla",
    img: "/cookies/vanilla.png",
    recipe:
      "Contains vanilla and hazelnut extracts, 70% chocolate, and may contain nuts.",
  },
  {
    name: "Almond",
    img: "/cookies/almond.png",
    recipe:
      "Contains almond extract and toasted almond pieces, 50% chocolate, and may contain nuts.",
  },
  {
    name: "Chocolate",
    img: "/cookies/chocolate.png",
    recipe:
      "With cocoa and dark chocolate chunks, 70% chocolate, and may contain nuts.",
  },
  {
    name: "Others",
    img: "/cookies/others.png",
    recipe:
      "Contains seasonal ingredients that change with every batch, and may contain nuts.",
  },
];

export default function Flavours() {
  return (
    <section className="relative bg-cookie-light px-5 pb-20 pt-10 text-cookie-dark sm:px-8 sm:pb-24 sm:pt-14">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Discover all our flavours
      </h2>

      <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
        {flavours.map((flavour) => (
          <li
            key={flavour.name}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-cookie-dark p-3 text-cookie-light transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-cookie-orange hover:shadow-xl"
          >
            <h3 className="relative z-10 text-base font-bold sm:text-lg">
              {flavour.name}
            </h3>

            <Image
              src={flavour.img}
              alt={`${flavour.name} cookie`}
              width={200}
              height={200}
              className="mt-2 w-full rounded-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-30"
            />

            <p className="pointer-events-none absolute inset-x-3 top-10 z-10 text-xs leading-snug opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:top-11 sm:text-sm">
              {flavour.recipe}
            </p>
          </li>
        ))}
      </ul>

      {/* Borde ondulado de abajo: el marrón de Motivation "sube" sobre el crema */}
      <Wave className="-bottom-px h-8 text-cookie-dark sm:h-10" />
    </section>
  );
}
