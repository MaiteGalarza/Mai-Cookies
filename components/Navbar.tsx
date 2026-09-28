"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cookie-dark">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-5 py-3">
        {/* Logo: guardalo como public/navbar-logo.png (fondo transparente) */}
        <a href="#" aria-label="Mai Cookies, back to top">
          <Image
            src="/Navbar-logo.png"
            alt="Mai Cookies"
            width={240}
            height={60}
            priority
            className="h-7 w-auto sm:h-9"
          />
        </a>

        {/* Hamburguesa: se transforma en X al tocarla */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-5 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full
            transition-transform duration-300 hover:scale-110 active:scale-90"
        >
          <span
            className={`h-[3px] w-6 rounded-full bg-cookie-light transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 rounded-full bg-cookie-light transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 rounded-full bg-cookie-light transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
