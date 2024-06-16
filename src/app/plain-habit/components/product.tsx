import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <Tabs defaultValue="all">
      <TabsList className="bg-transparent">
        <TabsTrigger value="all" className="bg-[#ECECEC] text-black data-[state=active]:bg-[#0069B2] data-[state=active]:text-white">All Product</TabsTrigger>
        <TabsTrigger value="man" className="bg-[#ECECEC] mx-2 text-black data-[state=active]:bg-[#0069B2] data-[state=active]:text-white">For Man</TabsTrigger>
        <TabsTrigger value="woman" className="bg-[#ECECEC] text-black data-[state=active]:bg-[#0069B2] data-[state=active]:text-white">For Woman</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/plain-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/plain-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/plain-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/plain-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </TabsContent>
      <TabsContent value="man">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/man-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/man-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/man-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/man-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </TabsContent>
      <TabsContent value="woman">
      <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/woman-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/woman-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/woman-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
              <div className="bg-white p-2 border-2 border-[#0069B2] rounded-md">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={"/img/woman-baju.png"}
                    width={350}
                    height={250}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div className={`text-left mt-3`}>
                  <h2 className="font-bold">White T-Shirt</h2>
                  <p className="text-[#858585] text-sm mt-2">
                    Lorem ipsum dolor sit amet conser.{" "}
                  </p>
                  <Link href={""} className="">
                    <button className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white mb-2 w-full">
                      Beli
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </TabsContent>
    </Tabs>
  );
}
