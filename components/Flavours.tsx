import Image from "next/image";

const flavours = [
  { name: "Vanilla", img: "/cookies/vanilla.png" },
  { name: "Almond", img: "/cookies/almond.png" },
  { name: "idk", img: "/cookies/vainilla.png" },
  { name: "Chocolate", img: "/cookies/chocolate.png" },
];

export default function Flavours() {
  return (
    <section className="bg-cookie-light px-4 pb-16 pt-4 text-cookie-dark">
      <h2 className="text-center text-2xl font-bold">
        Discover all our flavours
      </h2>
      <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {flavours.map((f) => (
          <li
            key={f.name}
            className="group rounded-2xl bg-cookie-dark p-3 text-cookie-light"
          >
            <h3 className="text-lg font-bold">{f.name}</h3>
            <Image
              src={f.img}
              alt={`Cookie de ${f.name}`}
              width={200}
              height={200}
              className="mt-2 w-full rounded-full"
            />
          </li>
        ))}
      </ul>
    </section>
);
}
