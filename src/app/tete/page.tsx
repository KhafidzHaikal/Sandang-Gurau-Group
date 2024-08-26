import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila } from "next/font/google";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  TbSquareNumber1Filled,
  TbSquareNumber2Filled,
  TbSquareNumber3Filled,
  TbMessage,
} from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tete",
};

const Local = localFont({ src: "./BAHNSCHRIFT.otf" });

export default function Tete() {
  return (
    <main className="">
      <Navbar />
      <section
        className="h-screen"
        style={{
          backgroundImage: "url(/img/tete-background.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <div className="h-screen flex items-center container">
          <div className="text-left lg:w-1/3">
            <h1
              className={`${Local.className} text-[40px] lg:text-[64px] font-bold`}>
              Make Your Customize Shirt With Us
            </h1>
            <p className={`${Local.className} text-md mt-4 mb-10 pr-7`}>
              Tete is here as a solution to transform your t-shirt into
              something extraordinary with unique and contemporary custom screen
              printing. Change your style with custom t-shirt screen printing
              from Tete! Contact us today and get a great deal.
            </p>
            <Link
              href={"https://wa.me/6281292702020"}
              className={`${Local.className} text-black py-3 px-10 border-black border-2 mt-4 rounded-sm hover:text-white hover:bg-black`}>
              Order Now
            </Link>
          </div>
          <div className="hidden md:flex gap-5 ml-96 mt-14">
            <div className="mt-10">
              <Image
                src={"/img/tete-1.jpg"}
                width={250}
                height={150}
                sizes="100vh"
                alt="Image 1"
                className="rounded-md mb-5"
              />
              <Image
                src={"/img/tete-2.jpg"}
                width={250}
                height={450}
                sizes="100vh"
                alt="Image 1"
                className="rounded-md"
              />
            </div>
            <div className="">
              <Image
                src={"/img/tete-2.jpg"}
                width={250}
                height={450}
                sizes="100vh"
                alt="Image 1"
                className="rounded-md mb-5"
              />
              <Image
                src={"/img/tete-3.jpg"}
                width={250}
                height={150}
                sizes="100vh"
                alt="Image 1"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url(/img/tete-background-2.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <div className="container py-20">
          <div className={`${Local.className} text-center`}>
            <h1 className="text-[#E2C799] text-[40px] lg:text-[54px]">
              Our Activities
            </h1>
            <p className="text-white">
              Tete is the best place to transform your t-shirt into something
              extraordinary with unique and contemporary screen printing or
              custom shirt printing.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 gap-6">
            <div className="mx-auto">
              <Image
                src={"/img/tete-4.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799]"
              />
              <Image
                src={"/img/tete-8.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799] mt-6"
              />
            </div>
            <div className="mx-auto lg:mt-12">
              <Image
                src={"/img/tete-5.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799]"
              />
              <Image
                src={"/img/tete-9.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799] mt-6"
              />
            </div>
            <div className="mx-auto">
              <Image
                src={"/img/tete-6.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799]"
              />
              <Image
                src={"/img/tete-10.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799] mt-6"
              />
            </div>
            <div className="mx-auto lg:mt-12">
              <Image
                src={"/img/tete-7.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799]"
              />
              <Image
                src={"/img/tete-11.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt=""
                className="rounded-md border-2 border-[#E2C799] mt-6"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className=""
        style={{
          backgroundColor: "#E2C799",
        }}>
        <div className="container py-20">
          <div className={`${Local.className} text-center`}>
            <h1 className="text-[#292929] text-[40px] lg:text-[54px]">
              How To Order
            </h1>
            <p className="text-[#292929]">
              Contact Tete today and bring your style to life with unique and
              quality screen printing or custom shirt printing!
            </p>
          </div>
          <div className="flex justify-center w-full mt-10">
            <div className="">
              <TbSquareNumber1Filled className="text-4xl text-[#292929] mb-2" />
              <div className="circle-tete"></div>
            </div>
            <div className="flex justify-center items-end gap-2">
              <div className="line"></div>
              <div className="line"></div>
              <div className="hidden sm:flex line"></div>
              <div className="hidden sm:flex line"></div>
              <div className="hidden sm:flex line"></div>
              <div className="hidden md:flex line"></div>
              <div className="hidden lg:flex line"></div>
              <div className="hidden xl:flex line"></div>
            </div>
            <div className="">
              <TbSquareNumber2Filled className="text-4xl text-[#292929] mb-2" />
              <div className="circle-tete"></div>
            </div>
            <div className="flex justify-center items-end gap-2">
              <div className="line"></div>
              <div className="line"></div>
              <div className="hidden sm:flex line"></div>
              <div className="hidden sm:flex line"></div>
              <div className="hidden sm:flex line"></div>
              <div className="hidden md:flex line"></div>
              <div className="hidden lg:flex line"></div>
              <div className="hidden xl:flex line"></div>
            </div>
            <div className="">
              <TbSquareNumber3Filled className="text-4xl text-[#292929] mb-2" />
              <div className="circle-tete"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 mt-10 gap-6">
            <div className="rounded-md p-10 bg-[#292929] mx-auto">
              <div className="rounded-full bg-[#E2C799] w-16 h-16 p-4 flex justify-center items-center mx-auto mb-6">
                <TbMessage className="text-4xl text-[292929]" />
              </div>
              <div className={`${Local.className} text-center text-white`}>
                <h1 className="text-xl">Contact Us</h1>
                <p className="mt-6">
                  You can contact us through our website, Instagram, or
                  Facebook.
                </p>
              </div>
            </div>
            <div className="rounded-md p-10 bg-[#292929] mx-auto">
              <div className="rounded-full bg-[#E2C799] w-16 h-16 p-4 flex justify-center items-center mx-auto mb-6">
                <IoIosPeople className="text-4xl text-[292929]" />
              </div>
              <div className={`${Local.className} text-center text-white`}>
                <h1 className="text-xl">Meet With Our Team</h1>
                <p className="mt-6">
                  You want to discuss more about your design, you can meet us at
                  our workshop.
                </p>
              </div>
            </div>
            <div className="rounded-md p-10 bg-[#292929] mx-auto">
              <div className="rounded-full bg-[#E2C799] w-16 h-16 p-4 flex justify-center items-center mx-auto mb-6">
                <FaRegHandshake className="text-4xl text-[292929]" />
              </div>
              <div className={`${Local.className} text-center text-white`}>
                <h1 className="text-xl">Deal</h1>
                <p className="mt-6">
                  Determine the design and price, we will create a design mockup
                  for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#292929",
        }}>
        <div className="container py-20 sm:flex justify-between items-center">
          <div className={`${Local.className} text-left sm:w-1/2`}>
            <h1 className="text-[#E2C799] text-[40px] lg:text-[54px]">
              Our Commitment
            </h1>
            <p className="text-white">
              Tete is committed to helping you realize your style with unique,
              quality, and affordable custom t-shirt printing. We understand
              that style is identity, and we want to give you the freedom to
              express yourself through custom t-shirts.
            </p>
          </div>
          <div className="mt-8 sm:mt-0">
            <Link
              href={"https://wa.me/6281292702020"}
              className={`${Local.className} text-[#292929] py-2 px-10 bg-[#E2C799] border-[#E2C799] border-2 mt-4 rounded-sm hover:text-[#E2C799] hover:bg-[#292929]`}>
              Read More
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
