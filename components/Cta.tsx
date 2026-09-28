import Image from "next/image";
import Wave from "./Wave";
import Wordmark from "./Wordmark";

// Stickers around the wordmark. Drop your Figma exports in public/stickers/
// (same names, or change src). left/top/width are % of the footer container.
const stickers = [
  { src: "/stickers/sticker-1.svg", left: "3%", top: "6%", width: "11%", rotate: -12 },
  { src: "/stickers/sticker-2.svg", left: "22%", top: "0%", width: "9%", rotate: 8 },
  { src: "/stickers/sticker-3.svg", left: "43%", top: "-2%", width: "10%", rotate: -6 },
  { src: "/stickers/sticker-4.svg", left: "63%", top: "2%", width: "9%", rotate: 14 },
  { src: "/stickers/sticker-5.svg", left: "84%", top: "5%", width: "11%", rotate: -8 },
  { src: "/stickers/sticker-6.svg", left: "4%", top: "58%", width: "7%", rotate: 10 },
  { src: "/stickers/sticker-7.svg", left: "93%", top: "55%", width: "7%", rotate: -14 },
];

export default function Cta() {
  return (
    <>
      <section
        id="order"
        className="relative overflow-x-clip bg-cookie-orange px-6 text-cookie-light"
      >
        <Wave flip className="-top-px h-8 text-cookie-dark sm:h-10" />

        {/* Everything lives in this container so it doesn't sprawl on large screens */}
        <div className="relative mx-auto min-h-[22rem] max-w-5xl pb-24 pt-14 sm:min-h-[26rem] sm:pb-28 sm:pt-20 lg:min-h-[29rem]">
          {/* Small cookie: top-right corner, overlaps the wave above */}
          <Image
            src="/cookies/cta-1.png"
            alt=""
            width={160}
            height={160}
            className="animate-float-slow absolute -top-6 -right-[3%] z-20 w-[18%] max-w-[8rem]"
          />

          {/* Big cookie: bleeds off the left edge, overlaps the wave below */}
          <Image
            src="/cookies/cta-1.png"
            alt=""
            width={420}
            height={420}
            className="animate-float absolute -bottom-6 -left-[12%] z-20 w-[42%] max-w-[22rem]"
          />

          {/* Text + button, to the right of the cookie */}
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

          {/* Running mascot (your logo.svg): bottom-right, crosses the wave */}
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

      <footer className="relative -mt-px overflow-hidden bg-cookie-dark px-6 pt-8 text-cookie-light sm:pt-12">
        <div className="relative mx-auto w-full max-w-5xl pt-20 sm:pt-28">
          {stickers.map((st, i) => (
            <Image
              key={st.src}
              src={st.src}
              alt=""
              aria-hidden
              width={120}
              height={120}
              style={{
                left: st.left,
                top: st.top,
                width: st.width,
                rotate: `${st.rotate}deg`,
              }}
              className={`pointer-events-none absolute z-0 h-auto ${
                i % 2 ? "animate-float-slow" : "animate-float"
              }`}
            />
          ))}

          <Wordmark />
        </div>
      </footer>
    </>
  );
}
