import Navbar from "@/components/navbar";
import Image from "next/image";
import { Bayon, Play } from "next/font/google";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prboi",
};

const PlayFont = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BayonFont = Bayon({
  subsets: ["latin"],
  weight: "400",
});

export default function Prboi() {
  return (
    <main className="">
      <div className="text-white">
        <Navbar />
      </div>
      <section className="h-screen bg-[#09080A] flex items-center">
        <div className="lg:w-1/2 text-left ml-8 lg:ml-24">
          <h1
            className={`${BayonFont.className} text-white text-[40px] lg:text-[64px]`}>
            Look dashing <span className="text-[#850F8D]"> wherever</span> and{" "}
            <span className="text-[#850F8D]">whenever</span> you are.
          </h1>
          <p
            className={`${PlayFont.className} text-md text-white mt-4 mb-10 pr-7`}>
            Lorem ipsum dolor sit amet consectetur. Sit at odio malesuada sed.
            Morbi maecenas imperdiet vel sollicitudin sed risus dolor in
            vivamus.
          </p>
          <Link
            href={""}
            className={`${PlayFont.className} text-[#850F8D] py-3 px-10 border-[#850F8D] border-2 mt-4 rounded-sm hover:text-white hover:bg-[#850F8D]`}>
            Shop Now
          </Link>
        </div>
        <div className="absolute right-0 top-0 hidden lg:flex">
          <Image
            src={"/img/prboi-img.png"}
            width={650}
            height={650}
            sizes="100vh"
            alt="Image 1"
          />
        </div>
      </section>
      <section className={`${PlayFont.className} h-full bg-[#09080A]`}>
        <div className="container flex justify-center">
          <h1 className="text-white text-[40px] lg:text-[64px] font-bold z-10 text-center mb-10">
            CHOOSE<span className="text-[#850F8D]"> THE BEST </span>
            EVERYDAY WEAR!
          </h1>
        </div>
      </section>
      <section className={`${PlayFont.className} h-full bg-[#09080A] py-20`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 container mb-10">
          <div className="img-1">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto1.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-2">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto2.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-3">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto3.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-4">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto4.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-1">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto1.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-2">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto2.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-3">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto3.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
          <div className="img-4">
            <div className="inline-block overflow-hidden rounded-xl">
              <Image
                src={"/img/prboi-foto4.png"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="mx-auto hover:scale-110 duration-500 transition-transform"
              />
            </div>
            <div className="text-left text-white mt-3">
              <h2>UNFAZED Black Shirt</h2>
            </div>
          </div>
        </div>
        <Link
          href={""}
          className={`${PlayFont.className} flex justify-center items-center w-48 mx-auto text-white border-2 border-[#850F8D] font-bold py-2 px-8 bg-[#850F8D] mt-4 rounded-sm hover:border-2 hover:border-white`}>
          See All Product
        </Link>
      </section>
      <section className={`${PlayFont.className} h-screen bg-[#09080A] `}>
        <div className="h-screen container lg:flex justify-center items-center gap-10">
          <Image
            src={"/img/about-prboi.png"}
            width={450}
            height={450}
            sizes="100vh"
            alt="About Prboi"
            className="about-prboi"
          />
          <div className={`${PlayFont.className} text-white`}>
            <h1 className="text-white text-[64px] font-bold">
              <span className="text-[#850F8D]"> About </span>
              PrBoi
            </h1>
            <p className="mt-4 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quia blanditiis esse! Perferendis rem laborum assumenda
              aliquid fugiat aut libero dolore, possimus esse fuga aspernatur
              rerum accusamus ad sit temporibus?
            </p>
            <Link
              href={""}
              className={`${PlayFont.className} text-white border-2 border-[#850F8D] py-2 px-8 bg-[#850F8D] mt-4 rounded-sm hover:border-2 hover:border-white`}>
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="h-screen bg-[#09080A] lg:flex items-center">
        <div className="text-center lg:text-left lg:pl-24">
          <h1
            className={`${PlayFont.className} text-white text-[40px] lg:text-[64px]`}>
            Profile <span className="text-[#850F8D]"> Video</span>
          </h1>
        </div>
        <div className="lg:absolute right-20 lg:flex mt-8 lg:mt-0 px-8 lg:px-0">
          <div className="inline-block overflow-hidden rounded-xl mx-auto">
            <Image
              src={"/img/prboi-foto1.png"}
              width={350}
              height={350}
              sizes="100vh"
              alt=""
              className="mx-auto hover:scale-110 duration-500 transition-transform object-none w-[600px] h-[400px]"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
