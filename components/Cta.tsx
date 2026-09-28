import Image from "next/image";
import Wave from "./Wave";

export default function Cta() {
  return (
    <>
      <section
        id="order"
        className="relative overflow-x-clip bg-cookie-orange px-6 text-cookie-light"
      >
        <Wave flip className="-top-px h-8 text-cookie-dark sm:h-10" />

        {/* Todo el armado vive en este contenedor, así no se desparrama en pantallas grandes */}
        <div className="relative mx-auto min-h-[22rem] max-w-5xl pb-24 pt-14 sm:min-h-[26rem] sm:pb-28 sm:pt-20 lg:min-h-[29rem]">
          {/* Cookie chica: esquina superior derecha, pisa la onda de arriba */}
          <Image
            src="/cookies/cta-1.png"
            alt=""
            width={160}
            height={160}
            className="animate-float-slow absolute -top-6 -right-[3%] z-20 w-[18%] max-w-[8rem]"
          />

          {/* Cookie grande: sale por la izquierda y pisa la onda de abajo */}
          <Image
            src="/cookies/cta-1.png"
            alt=""
            width={420}
            height={420}
            className="animate-float absolute -bottom-6 -left-[12%] z-20 w-[42%] max-w-[22rem]"
          />

          {/* Texto + botón, a la derecha de la cookie */}
          <div className="relative z-10 ml-auto w-[54%] text-left">
            <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">
              Join our family,
              <br />
              order now!
            </h2>

            <a
              href="#order"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-cookie-light px-5 py-2 text-sm font-semibold text-cookie-dark transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-cookie-dark/30 active:translate-y-0 active:scale-95 sm:px-7 sm:py-2.5"
            >
              Go order
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Personaje corriendo (tu logo.svg): abajo a la derecha, cruza la onda */}
          <Image
            src="/logo.svg"
            alt="Mai Cookies mascot"
            width={200}
            height={230}
            className="animate-float-slow absolute -bottom-8 right-[2%] z-20 w-[24%] max-w-[12rem]"
          />
        </div>

        <Wave className="-bottom-px h-8 text-cookie-dark sm:h-10" />
      </section>

      <footer className="relative -mt-px overflow-hidden bg-cookie-dark px-6 pt-16 text-cookie-light sm:pt-24">
        {/* Puntitos de relleno: reemplazalos por los doodles del diseño cuando los tengas */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-around opacity-80">
          <span className="text-4xl text-cookie-orange">●</span>
          <span className="text-3xl text-cookie-gold">●</span>
          <span className="text-5xl text-cookie-orange">●</span>
          <span className="text-3xl text-cookie-gold">●</span>
          <span className="text-4xl text-cookie-orange">●</span>
        </div>

       
        <Image src="/wordmark.png" alt="Mai Cookies" width={1200} height={300} />
      </footer>
    </>
  );
}
