"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Clients() {
  return <Carousel
  plugins={[
    Autoplay({
      delay: 1700,
    })
  ]}
  >
  <CarouselContent>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center">
      <Image
        src={"/img/pertamina.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/logo.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/sasfy.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/plain.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/prboi.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/tete-industries.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center">
      <Image
        src={"/img/pertamina.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/logo.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/sasfy.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/plain.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/prboi.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
    <CarouselItem className="basis-1/3 lg:basis-1/5 flex justify-center items-center ">
      <Image
        src={"/img/tete-industries.png"}
        width={200}
        height={200}
        sizes="100vh"
        alt=""
      />
    </CarouselItem>
  </CarouselContent>
</Carousel>;
}
