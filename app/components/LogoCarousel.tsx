"use client";

import Image from "next/image";

const logos = [
  { src: "https://framerusercontent.com/images/55XcPpLl5Bd4pe7JYzPsJT9Wzg.png", w: 69, h: 15 },
  { src: "https://framerusercontent.com/images/emqNNkUS2Kh7fbJUE2HLZ9KcQEs.png", w: 84, h: 20 },
  { src: "https://framerusercontent.com/images/auoK0ydyMLQWoPgoooaMW3WsreU.png", w: 66, h: 18 },
  { src: "https://framerusercontent.com/images/WlidNM1JGPTM6VCP5wtafA.png", w: 106, h: 12 },
  { src: "https://framerusercontent.com/images/7e3JIkgQHLogSrUxcxWpdYXOEdA.png", w: 84, h: 19 },
];

function LogoSet() {
  return (
    <>
      {logos.map((logo, i) => (
        <div key={i} className="flex-shrink-0 opacity-70">
          <Image
            src={logo.src}
            alt=""
            width={logo.w * 1.5}
            height={logo.h * 1.5}
            className="h-5 w-auto brightness-0 invert"
            unoptimized
          />
        </div>
      ))}
    </>
  );
}

export default function LogoCarousel() {
  return (
    <div className="logo-carousel w-full max-w-[700px] mx-auto overflow-hidden mt-14 z-10 animate-fade-in animate-fade-in-delay-3">
      <div className="logo-track flex items-center gap-14 w-max">
        <LogoSet />
        <LogoSet />
      </div>
    </div>
  );
}
