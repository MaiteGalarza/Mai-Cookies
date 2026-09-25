import Image from "next/image";
import Wave from "./Wave";

export default function Motivation() {
  return (
    <section className="relative overflow-hidden bg-cookie-dark px-8 py-16 text-center text-cookie-light sm:py-20">
      <Image
        src="/cookies/motivation-1.svg"
        alt=""
        width={220}
        height={220}
        className="animate-float absolute -left-10 bottom-4 w-28 sm:-left-12 sm:w-40"
      />

      <Image
        src="/cookies/motivation-2.svg"
        alt=""
        width={220}
        height={220}
        className="animate-float-slow absolute -right-10 bottom-0 w-28 sm:-right-12 sm:w-40"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Our Motivation
        </h2>

        <p className="mt-4 text-sm leading-relaxed sm:text-base">
          We believe a good cookie isn&apos;t meant to be eaten alone.
          It&apos;s meant to be shared, and that&apos;s where a brand&apos;s
          true flavour lives. Something happens when someone brings you a
          homemade cookie. It&apos;s not just the taste, it&apos;s the time
          someone took for you: the ingredients they chose, the dough they
          kneaded, thinking of you the whole time.
        </p>
      </div>

      <Wave
        className="bottom-0 h-8 text-cookie-dark sm:h-10"
      />
    </section>
  );
}