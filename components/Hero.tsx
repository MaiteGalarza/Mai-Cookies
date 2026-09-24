import Image from "next/image";
import Wave from "./Wave";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cookie-dark px-6 pb-40 pt-24 text-center text-cookie-light">
      <Image
        src="/cookies/hero-1.png"
        alt=""
        width={220}
        height={220}
        className="absolute -left-12 top-20 w-44"
      />
      <Image
        src="/cookies/hero-2.png"
        alt=""
        width={220}
        height={220}
        className="absolute -right-12 top-12 w-40"
      />

      <h1 className="relative text-3xl font-bold">
        Mai cookies could be <br /> your cookies too
      </h1>
      <a
        href="#order"
        className="relative mt-5 inline-block rounded-full bg-cookie-light px-5 py-1.5 text-sm font-semibold text-cookie-dark"
      >
        Order now
      </a>

      <Wave className="absolute bottom-0 left-0 text-cookie-light" />
    </section>
  );
}
