"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CarouselBaju() {
  return <Carousel
  plugins={[
    Autoplay({
      delay: 2000,
    })
  ]}
  >
  <CarouselContent>
    <CarouselItem>
      <Image
        src={"/img/baju-plain-1.png"}
        width={400}
        height={400}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem>
      <Image
        src={"/img/baju-plain-2.png"}
        width={400}
        height={400}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem>
      <Image
        src={"/img/baju-plain-3.png"}
        width={400}
        height={400}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
  </CarouselContent>
</Carousel>;
}
