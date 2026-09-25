import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-cookie-orange px-6 py-16 text-center text-cookie-dark sm:py-20">
      <Image
        src="/cookies/cta-cookie.png"
        alt=""
        width={260}
        height={260}
        className="animate-float mx-auto w-40 sm:w-56"
      />

      <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
        Join our family, order now!
      </h2>

      <a
        href="#order"
        className="mt-6 inline-block rounded-full bg-cookie-dark px-6 py-2 text-sm font-semibold text-cookie-light
          transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-cookie-dark/30 active:translate-y-0 active:scale-95"
      >
        Go now!
      </a>
      <Image
        src="/logo.png"
        alt="Mai Cookies"
        width={400}
        height={120}
        className="mx-auto mt-12 w-56 sm:w-72"
      />
    </section>
  );
}
