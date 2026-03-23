import Image from "next/image";
import AsciiUnicorn from "./components/AsciiUnicorn";
import LogoCarousel from "./components/LogoCarousel";
import BlurText from "./components/BlurText";
import BlurFadeIn from "./components/BlurFadeIn";

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col items-center overflow-hidden bg-black">
      {/* Navigation - blur fade in first */}
      <BlurFadeIn delay={0} className="w-full flex-shrink-0 z-50">
        <nav className="w-full flex items-center justify-between px-8 py-4">
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
      </BlurFadeIn>

      {/* Spacer */}
      <div className="flex-[3]" />

      {/* Hero Content */}
      <div className="text-center z-10 px-5 flex-shrink-0">
        <h1 className="text-[80px] font-normal leading-[0.9] mb-7" style={{ fontFamily: "var(--font-playfair)" }}>
          <span className="block">
            <BlurText text="Creating what others" delay={0.3} wordDelay={0.08} />
          </span>
          <span className="block italic text-white/45">
            <BlurText text="cannot imagine" delay={0.9} wordDelay={0.1} />
          </span>
        </h1>

        <BlurFadeIn delay={1.4}>
          <p className="text-[15px] text-white/55 mb-8">
            A creative studio for brands that don&apos;t blend in.
          </p>
        </BlurFadeIn>

        <BlurFadeIn delay={1.7} className="flex items-center justify-center gap-4">
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
        </BlurFadeIn>
      </div>

      {/* Spacer */}
      <div className="flex-[1]" />

      {/* Logo Carousel */}
      <BlurFadeIn delay={2.0} className="z-10 flex-shrink-0 mb-[38vh]">
        <LogoCarousel />
      </BlurFadeIn>

      {/* Bottom spacer */}
      <div className="flex-[3]" />

      {/* Unicorn Studio Background - no animation, always visible */}
      <AsciiUnicorn />
    </main>
  );
}
