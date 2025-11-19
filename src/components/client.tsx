"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { src: "/img/pertamina.png", alt: "Pertamina" },
  { src: "/img/logo.png", alt: "Sandang Group" },
  { src: "/img/sasfy.png", alt: "Sasfy" },
  { src: "/img/plain.png", alt: "Plain Habit" },
  { src: "/img/tete-industries.png", alt: "Tete Industries" },
];

export default function Clients() {
  return (
    <div className="w-full overflow-hidden py-6 mt-8 md:mt-12">
      <div className="whitespace-nowrap animate-scroll">

        {/* SET 1 */}
        <div className="inline-block">
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="inline-flex mx-8 lg:mx-12 items-center justify-center hover:scale-110 transition duration-300"
            >
              <Image
                src={client.src}
                width={160}
                height={160}
                alt={client.alt}
                className="h-12 md:h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* SET 2 — DUPLIKAT WAJIB */}
        <div className="inline-block">
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="inline-flex mx-8 lg:mx-12 items-center justify-center hover:scale-110 transition duration-300"
            >
              <Image
                src={client.src}
                width={160}
                height={160}
                alt={client.alt}
                className="h-12 md:h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
