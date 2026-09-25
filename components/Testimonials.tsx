import Image from "next/image";

const testimonials = [
  {
    quote: "I loved the chocolate cookies! lots of chocolate",
    author: "-Fulana in google reviews",
    image: "/cookies/chocolate.png",
  },
  {
    quote: "I loved the vanilla ones! Melted in my mouth",
    author: "-Fulana in google reviews",
    image: "/cookies/vanilla.png",
  },
  {
    quote: "The classic almond is the best",
    author: "-Fulana in google reviews",
    image: "/cookies/almond.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cookie-dark px-6 pb-16 pt-10 text-cookie-light sm:px-8 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="shrink-0 lg:w-44">
            <h2 className="text-xl font-bold sm:text-2xl">
              What people
              <br />
              are saying
            </h2>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="rounded-2xl bg-cookie-gold px-5 py-6 text-center text-cookie-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
  src={testimonial.image}
  alt=""
  width={70}
  height={70}
  className="mx-auto mb-4 h-16 w-16 object-contain"
/>


                <p className="text-sm font-semibold leading-relaxed">
                  “{testimonial.quote}”
                </p>

                <p className="mt-3 text-xs font-medium opacity-80">
                  {testimonial.author}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-cookie-orange sm:text-4xl">
              100%
            </p>
            <p className="mt-1 text-xs leading-relaxed sm:text-sm">
              Homemade
              <br />
              cookies
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cookie-orange sm:text-4xl">
              5
            </p>
            <p className="mt-1 text-xs leading-relaxed sm:text-sm">
              Unique
              <br />
              flavours
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-cookie-orange sm:text-4xl">
              100%
            </p>
            <p className="mt-1 text-xs leading-relaxed sm:text-sm">
              Made with
              <br />
              love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}