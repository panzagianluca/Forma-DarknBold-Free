import Image from "next/image";
import AsciiUnicorn from "./components/AsciiUnicorn";
import LogoCarousel from "./components/LogoCarousel";

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col items-center overflow-hidden bg-black">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-8 py-4 z-50 flex-shrink-0">
        <div className="flex items-center gap-8">
          <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="https://framerusercontent.com/images/DQu5gg08pCZ4vK8mfbt3pMDuP8.png"
            alt="Logo"
            width={36}
            height={20}
            className="brightness-0 invert h-8 w-auto"
            unoptimized
          />
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
            Sign in
          </a>
          <a
            href="#"
            className="text-black bg-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition-all"
          >
            Talk to us
          </a>
        </div>
      </nav>

      {/* Spacer to push hero to ~20% from top */}
      <div className="flex-[3]" />

      {/* Hero Content */}
      <div className="text-center z-10 px-5 flex-shrink-0">
        <h1 className="text-[80px] font-normal leading-[0.9] mb-7" style={{ fontFamily: "var(--font-playfair)" }}>
          <span className="block animate-fade-up animate-fade-up-delay-1">
            Creating what others
          </span>
          <span className="block animate-fade-up animate-fade-up-delay-2 italic text-white/45">
            cannot imagine
          </span>
        </h1>
        <p className="text-[15px] text-white/55 mb-8 animate-fade-in animate-fade-in-delay-1">
          A creative studio for brands that don&apos;t blend in.
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in animate-fade-in-delay-2">
          <a
            href="#"
            className="text-black bg-white text-[14px] font-medium px-6 py-2.5 rounded-full hover:bg-gray-100 transition-all"
          >
            Talk to us
          </a>
          <a
            href="#"
            className="text-white text-[14px] font-medium flex items-center gap-2 hover:opacity-70 transition-opacity group"
          >
            How we work{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &#8594;
            </span>
          </a>
        </div>
      </div>

      {/* Spacer between hero and carousel */}
      <div className="flex-[1]" />

      {/* Logo Carousel */}
      <div className="z-10 flex-shrink-0 mb-[38vh]">
        <LogoCarousel />
      </div>

      {/* Bottom spacer */}
      <div className="flex-[3]" />

      {/* Unicorn Studio Background */}
      <AsciiUnicorn />
    </main>
  );
}
