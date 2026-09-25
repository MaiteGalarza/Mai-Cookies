import Image from "next/image";

const flavours = [
  { name: "Vanilla", img: "/cookies/vanilla.png" },
  { name: "Almond", img: "/cookies/almond.png" },
  { name: "Chocolate", img: "/cookies/chocolate.png" },
  { name: "Others", img: "/cookies/others.png" },
];

export default function Flavours() {
  return (
    <section className="bg-cookie-light px-5 py-10 text-cookie-dark sm:px-8 sm:py-14">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Discover all our flavours
      </h2>

      <ul className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
        {flavours.map((flavour) => (
          <li
            key={flavour.name}
            className="group cursor-pointer rounded-2xl bg-cookie-dark p-3 text-cookie-light transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-base font-bold sm:text-lg">
              {flavour.name}
            </h3>

            <Image
              src={flavour.img}
              alt={`${flavour.name} cookie`}
              width={200}
              height={200}
              className="mt-2 w-full rounded-full transition-transform duration-300 group-hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}