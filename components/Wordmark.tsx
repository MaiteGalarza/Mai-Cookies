import Image from "next/image";

// Position/size of the cookie, as % of the wordmark image.
// Tweak these until the cookie sits exactly on the first "o" of "Cookies".
const COOKIE = { left: "47%", top: "45%", width: "11%" };

export default function Wordmark() {
  return (
    <div className="relative z-10 mx-auto w-[85%] max-w-3xl">
      {/* "Mai Cookies" text, exported from Figma */}
      <Image
        src="/wordmark.png"
        alt="Mai Cookies"
        width={1200}
        height={300}
        className="h-auto w-full"
      />

      {/* Cookie laid over the first "o" */}
      <Image
        src="/cookies/Cta-2.png"
        alt=""
        aria-hidden
        width={200}
        height={200}
        style={{ left: COOKIE.left, top: COOKIE.top, width: COOKIE.width }}
        className="absolute h-auto"
      />
    </div>
  );
}
