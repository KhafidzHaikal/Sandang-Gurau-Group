import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandang Group",
};

const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen flex items-center justify-center container mt-2 sm:mt-0">
        <div className="grid md:grid-cols-3 gap-3">
          <Image
            src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
            width={350}
            height={350}
            sizes="100vh"
            alt="Image 1"
            className="hidden md:flex rounded-xl border-2 border-[#0C542B] mx-auto"
          />
          <div className="mx-auto text-center">
            <Image
              src={"/img/img3.png"}
              width={400}
              height={400}
              sizes="100vh"
              alt=""
              className="rounded-xl border-2 border-[#0C542B]"
            />
            <div className="text-center lg:h-[17.8rem]">
              <Image
                src={"/img/logo.png"}
                width={250}
                height={250}
                sizes="100vh"
                alt=""
                className="mx-auto"
              />
              <h1 className={`${LailaFont.className} text-5xl font-bold`}>
                Sandang Gurau
              </h1>
              <p className={`${Josefin.className} mt-2`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing
              </p>
              <div className="mt-4 mb-8 md:mb-0">
                <Link
                  href={""}
                  className={`${LailaFont.className} rounded-xl border-2 text-[#0C542B] border-[#0C542B] px-3 py-2 hover:bg-[#0C542B] hover:text-white`}>
                  Order Now
                </Link>
              </div>
            </div>
            <Image
              src={"/img/img4.png"}
              width={400}
              height={400}
              sizes="100vh"
              alt=""
              className="rounded-xl md:hidden lg:flex border-2 border-[#0C542B]"
            />
          </div>
          <Image
            src={"https://i.ibb.co.com/Fqqb4fv/img1.jpg"}
            width={350}
            height={350}
            sizes="100vh"
            alt="Image 2"
            className="hidden md:flex rounded-xl border-2 border-[#0C542B] mx-auto"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
