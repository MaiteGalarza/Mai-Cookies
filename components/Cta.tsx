import Image from "next/image";
import Wave from "./Wave";

export default function Cta() {
  return (
    <>
      <section
        id="order"
        className="relative overflow-hidden bg-cookie-orange px-6 pb-24 pt-16 text-center text-cookie-dark sm:pb-28 sm:pt-20"
      >
        <Wave
          flip
          className="top-0 h-8 text-cookie-dark sm:h-10"
        />

        <div className="relative mx-auto flex min-h-[360px] max-w-6xl items-center justify-center">
          <Image
            src="/cookies/cta-cookie.png"
            alt=""
            width={360}
            height={360}
            className="animate-float absolute -bottom-20 -left-28 w-64 sm:-left-20 sm:w-80 lg:-left-10"
          />

          <div className="relative z-10 max-w-md">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Join our family,
              <br />
              order now!
            </h2>

            <a
              href="#order"
              className="mt-6 inline-block rounded-full bg-cookie-dark px-7 py-2.5 text-sm font-semibold text-cookie-light transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-cookie-dark/30 active:translate-y-0 active:scale-95"
            >
              Go order
            </a>
            <Image
              src="/logo.svg"
              alt="Mai Cookies"
              width={400}
              height={120}
              className="mx-auto w-56 sm:w-72"
            />
          </div>

          <Image
            src="/cookies/cta-1.png"
            alt=""
            width={180}
            height={180}
            className="absolute bottom-0 -right-8 w-32 sm:right-0 sm:w-40"
          />
        </div>

        <Wave
          className="bottom-0 h-8 text-cookie-dark sm:h-10"
        />
      </section>

      <footer className="relative overflow-hidden bg-cookie-dark px-6 pb-8 pt-12 text-cookie-light">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-around opacity-80">
          <span className="text-4xl text-cookie-orange">●</span>
          <span className="text-3xl text-cookie-gold">●</span>
          <span className="text-5xl text-cookie-orange">●</span>
          <span className="text-3xl text-cookie-gold">●</span>
          <span className="text-4xl text-cookie-orange">●</span>
        </div>
      </footer>
    </>
  );
}