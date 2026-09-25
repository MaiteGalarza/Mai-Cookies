import Image from "next/image";
import Wave from "./Wave";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cookie-dark px-6 pb-28 pt-20 text-center text-cookie-light sm:pb-36 sm:pt-28">
      <Image
        src="/cookies/hero-1.png"
        alt=""
        width={220}
        height={220}
        className="animate-float absolute -left-10 top-20 w-32 sm:-left-12 sm:w-44"
      />

      <Image
        src="/cookies/hero-2.png"
        alt=""
        width={220}
        height={220}
        className="animate-float-slow absolute -right-10 top-12 w-28 sm:-right-12 sm:w-40"
      />

      <div className="relative z-10">
        <h1 className="mx-auto max-w-xs text-3xl font-bold leading-tight sm:max-w-lg sm:text-5xl md:max-w-2xl md:text-6xl">
          Mai cookies could be
          <br />
          your cookies too
        </h1>

        <a
          href="#order"
          className="mt-6 inline-block rounded-full bg-cookie-light px-6 py-2 text-sm font-semibold text-cookie-dark transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-cookie-light/30 active:translate-y-0 active:scale-95"
        >
          Order now
        </a>
      </div>

      <Wave
        className="bottom-0 h-10 text-cookie-light sm:h-14"
      />
    </section>
  );
}