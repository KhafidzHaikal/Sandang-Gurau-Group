/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Poppins, Halant } from "next/font/google";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { GoLinkExternal } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import Clients from "@/components/client";

export const metadata: Metadata = {
  title: "Sandang Group",
};

const HalantFont = Halant({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});
const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen flex items-center justify-center sm:justify-between container mt-2 sm:mt-0">
        <div className="img-home absolute h-96 w-9/12 lg:h-[521px] lg:w-[512px] opacity-50 -z-50"></div>
        <div className="">
          <h1
            className={`${HalantFont.className} text-[#BF3131] text-[40px] lg:text-[64px] font-bold`}>
            Sandang Group
          </h1>
          <p className={`${PoppinsFont.className} text-md mt-4 mb-10 pr-7`}>
            Sandang Group is not just another company, we are a community of
            creatives who unite their passions to create extraordinary
            experiences for you.
          </p>
          <Link
            href={""}
            className={`${PoppinsFont.className} text-[#BF3131] py-3 px-10 border-[#BF3131] border-2 mt-4 rounded-sm hover:text-white hover:bg-[#BF3131]`}>
            Read More
          </Link>
        </div>
        <div className="bg-[#BF3131] bg-opacity-5 rounded-full p-10 absolute sm:relative -z-10 opacity-15 sm:opacity-100">
          <Image
            src={"/img/sandang-group.png"}
            width={1000}
            height={1000}
            sizes="100vh"
            alt="Image 1"
          />
        </div>
      </section>
      <section className="py-12 container">
        <h1
          className={`${HalantFont.className} text-[40px] lg:text-[50px] font-bold mb-8`}>
          <span className="text-[#FF5E5E]">Take A Look</span>{" "}
          <span className="text-[#BF3131]"> Our Products</span>
        </h1>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
              <Link href={"/sandang-gurau"}>
                <div className="bg-gradient-to-b from-white/5 from-10% via-transparent via-80% to-black/40 to-90% relative w-full">
                  <div className=" mix-blend-overlay overflow-hidden">
                    <Image
                      src={"/img/home-1.png"}
                      width={300}
                      height={400}
                      sizes="100vh"
                      alt="Image 1"
                      className="rounded-t-3xl w-full hover:scale-110 duration-500 transition-transform"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white w-full">
                    <div className="flex justify-between items-center gap-4">
                      <p className={`${PoppinsFont.className}`}>
                        Sandang Gurau
                      </p>
                      <GoLinkExternal className="text-xl mr-10" />
                    </div>
                  </div>
                </div>
              </Link>
              <p className={`${PoppinsFont.className} mt-4`}>
                Kaos Dul Anak Sekolahan
              </p>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
              <Link href={"/sandang-gurau"}>
                <div className="bg-gradient-to-b from-white/5 from-10% via-transparent via-80% to-black/40 to-90% relative w-full">
                  <div className=" mix-blend-overlay overflow-hidden">
                    <Image
                      src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
                      width={300}
                      height={200}
                      sizes="100vh"
                      alt="Sandang Gurau"
                      className="rounded-t-3xl w-full hover:scale-110 duration-500 h-[22rem] object-cover transition-transform"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white w-full">
                    <div className="flex justify-between items-center gap-4">
                      <p className={`${PoppinsFont.className}`}>Sandang Gurau</p>
                      <GoLinkExternal className="text-xl mr-10" />
                    </div>
                  </div>
                </div>
              </Link>
              <p className={`${PoppinsFont.className} mt-4 capitalize`}>U2 Gloria Chinese Edition</p>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
              <Link href={"/plain-habit"}>
                <div className="bg-gradient-to-b from-white/5 from-10% via-transparent via-80% to-black/40 to-90% relative w-full">
                  <div className=" mix-blend-overlay overflow-hidden">
                    <Image
                      src={"/img/home-3.png"}
                      width={300}
                      height={400}
                      sizes="100vh"
                      alt="Sandang Gurau"
                      className="rounded-t-3xl w-full hover:scale-110 duration-500 transition-transform"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white w-full">
                    <div className="flex justify-between items-center gap-4">
                      <p className={`${PoppinsFont.className}`}>Plain Habit</p>
                      <GoLinkExternal className="text-xl mr-10" />
                    </div>
                  </div>
                </div>
              </Link>
              <p className={`${PoppinsFont.className} mt-4`}>Kaos Mustard</p>
            </CarouselItem>
            <CarouselItem className="sm:basis-1/2 lg:basis-1/4">
              <Link href={"/sandang-gurau"}>
                <div className="bg-gradient-to-b from-white/5 from-10% via-transparent via-80% to-black/40 to-90% relative w-full">
                  <div className=" mix-blend-overlay overflow-hidden">
                    <Image
                      src={"/img/home-4.png"}
                      width={300}
                      height={400}
                      sizes="100vh"
                      alt="Sandang Gurau"
                      className="rounded-t-3xl w-full hover:scale-110 duration-500 transition-transform"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white w-full">
                    <div className="flex justify-between items-center gap-4">
                      <p className={`${PoppinsFont.className}`}>
                        Sandang Gurau
                      </p>
                      <GoLinkExternal className="text-xl mr-10" />
                    </div>
                  </div>
                </div>
              </Link>
              <p className={`${PoppinsFont.className} mt-4`}>
                Kaos Classic Pop
              </p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
      <section className="py-12 container">
        <div className="text-center">
          <h1
            className={`${HalantFont.className} text-[40px] lg:text-[50px] font-bold`}>
            <span className="text-[#FF5E5E]">We Also</span>{" "}
            <span className="text-[#BF3131]"> Have Services</span>
          </h1>
          <p className={`${PoppinsFont.className} font-normal`}>
            We have services in the field of making web development and also
            custom t-shirts.{" "}
          </p>
        </div>
        <div className="sm:flex justify-center items-center gap-8 mt-8">
          <Link href={"/sasfy"}>
            <div className="shadow-xl rounded-md">
              <div className=" p-4 relative rounded-md">
                <div className="overflow-hidden">
                  <Image
                    src={"/img/sasfy-home.png"}
                    width={300}
                    height={400}
                    sizes="100vh"
                    alt="Image 1"
                    className="hover:scale-110 duration-500 transition-transform rounded-md drop-shadow-md"
                  />
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className={`${PoppinsFont.className} font-bold`}>
                    Web Development
                  </p>
                  <ul className="text-sm list-disc ml-6">
                    <li>Website</li>
                    <li>Application</li>
                    <li>ERD</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 px-4 pb-4">
                <p className={`${PoppinsFont.className}`}>Sasfy</p>
                <GoLinkExternal className="text-xl" />
              </div>
            </div>
          </Link>
          <Link href={"/tete"}>
            <div className="shadow-xl rounded-md mt-4 sm:mt-0">
              <div className=" p-4 relative rounded-md">
                <div className="overflow-hidden">
                  <Image
                    src={"/img/t-home.png"}
                    width={300}
                    height={400}
                    sizes="100vh"
                    alt="Image 1"
                    className="hover:scale-110 duration-500 transition-transform rounded-md shadow-xl"
                  />
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <p className={`${PoppinsFont.className} font-bold`}>
                    T-Shirt Custom
                  </p>
                  <ul className="text-sm list-disc ml-6">
                    <li>Screen Printing</li>
                    <li>Your Own design</li>
                    <li>Guaranteed Quality</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4 px-4 pb-4">
                <p className={`${PoppinsFont.className}`}>Tete</p>
                <GoLinkExternal className="text-xl" />
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="mb-8 container">
          <h1
            className={`${HalantFont.className} text-[40px] lg:text-[50px] font-bold`}>
            <span className="text-[#FF5E5E]">Our</span>{" "}
            <span className="text-[#BF3131]"> Clients</span>
          </h1>
          <p className={`${PoppinsFont.className} font-normal`}>
            we've worked with many clients.
          </p>
        </div>
        <Clients />
      </section>
      <Footer />
    </main>
  );
}
