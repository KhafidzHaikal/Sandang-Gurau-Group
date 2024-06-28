/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { SiShopee } from "react-icons/si";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandang Gurau",
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
                width={200}
                height={200}
                sizes="100vh"
                alt=""
                className="mx-auto"
              />
              <h1 className={`${LailaFont.className} text-5xl font-bold`}>
                Sandang Gurau
              </h1>
              <p className={`${Josefin.className} mt-2`}>
                Movie and Music Parody Collaboration Fashion that Tickles
                Nostalgia
              </p>
              <div className="mt-4 mb-8 md:mb-0">
                <Link
                  href={
                    "https://linktr.ee/sandanggurau.id?fbclid=PAZXh0bgNhZW0CMTEAAaaBBIAcKYRjigPLdY_3t5v56qDKE9jqnezd45kKeIs5V-H1sgtN4JCkUEM_aem_PG6vw23QscfkkJGesHMXng"
                  }
                  className={`${LailaFont.className} rounded-xl border-2 text-[#0C542B] border-[#0C542B] px-3 py-2 hover:bg-[#0C542B] hover:text-white`}>
                  Shop Now
                </Link>
                {/* <div className="rounded-xl border-2 text-[#0C542B] border-[#0C542B] px-3 py-2 hover:bg-[#0C542B] hover:text-white mr-4 flex items-center gap-2">
                  <SiShopee className="text-xl -mt-1" />
                  <Link
                    href={"https://shopee.co.id/sandanggurau.id"}
                    className={`${LailaFont.className}`}>
                    Sandanggurau.id
                  </Link>
                </div>
                <div className="rounded-xl border-2 text-[#0C542B] border-[#0C542B] px-3 py-2 hover:bg-[#0C542B] hover:text-white mr-4 flex items-center gap-2">
                  <Image
                    src="https://i.ibb.co.com/8m7DXZR/1691990957tokopedia-icon-png.png"
                    width={20}
                    height={20}
                    sizes="100vh"
                    alt=""
                    className="-mt-1"
                  />
                  <Link
                    href={"https://www.tokopedia.com/sandanggurau"}
                    className={`${LailaFont.className}`}>
                    Sandanggurau
                  </Link>
                </div> */}
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
      <section
        className=""
        id="Tentang-Kami"
        style={{
          backgroundImage: "url(/img/background.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <div className="container py-[15rem] lg:flex gap-10">
          <Image
            src={"/img/logo.png"}
            width={500}
            height={500}
            sizes="100vh"
            alt=""
            className="mx-auto bg-white rounded-[100%]"
          />
          <div className={`${LailaFont.className}`}>
            <h1
              id="text-sandang"
              className="text-[52px] text-center md:text-left lg:text-[71px] font-bold">
              Sandang Gurau
            </h1>
            <p className="text-white font-[300] my-4">
              Sandang Gurau is a collaboration of artists and designers creative
              artists and designers who want to share their love for movies and
              music through fashion. We developed unique and funny designs that
              take inspiration from favorite movies and music.
            </p>
            <div className="mt-10">
              <Link
                href={"https://www.instagram.com/sandanggurau.id?igsh=MXBmNGVvdWlodXBwcQ=="}
                className={`rounded-xl border-2 text-white bg-[#F5252D] border-[#F6EB3A] px-3 py-2 hover:bg-[#F6EB3A] hover:text-black hover:border-[#F5252D]`}>
                Take a Look
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className=""
        style={{
          backgroundImage: "url(/img/background2.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <div className="container py-[5rem]">
          <div className={`${LailaFont.className} text-center`}>
            <h1 id="text-tiktok" className={`text-[52px] font-bold`}>
              Tiktok Video
            </h1>
            <p className="font-[300] my-4 md:w-1/2 mx-auto">
              Let's have some nostalgic fun with Sandang Gurau! We have funny
              and unique movie and music parody clothes! Check out the video and
              find your favorite outfit!
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="">
              <Image
                src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt="Image 1"
                className="rounded-xl border-2 border-[#F5252D] mx-auto"
              />
            </div>
            <div className="">
              <Image
                src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt="Image 1"
                className="rounded-xl border-2 border-[#F5252D] mx-auto"
              />
            </div>
            <div className="">
              <Image
                src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt="Image 1"
                className="rounded-xl border-2 border-[#F5252D] mx-auto"
              />
            </div>
            <div className="">
              <Image
                src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
                width={350}
                height={350}
                sizes="100vh"
                alt="Image 1"
                className="rounded-xl border-2 border-[#F5252D] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className=""
        style={{
          backgroundImage: "url(/img/background3.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <div className="container py-[5rem]">
          <div className={`${LailaFont.className} text-center`}>
            <h1 id="text-product" className={`text-[52px] font-bold`}>
              Our Product
            </h1>
            <p className="font-[300] my-4 md:w-1/2 mx-auto text-white">
              Sandang Gurau presents a collection of movie and music parody
              clothes that are unique, funny and nostalgic. Our clothes are made
              with high quality materials and creative designs inspired by your
              favorite movies and your favorite movies and music.
            </p>
          </div>
          <Carousel className="mt-7">
            <CarouselContent>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/s1kqYgz/IMG-5058.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48  lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3 `}>
                  <h2>RINTO HARAP CLASSIC POP</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/86WS1d5/IMG-5059.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>U2 GLORIA CHINESE EDITION</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/FWfNy5X/IMG-5060.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>RAJA POP X RAJA LELE</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/wBMBhb9/IMG-5063.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>RAJA POP X RAJA LELE</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/VVFnQH8/IMG-5065.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>U2 GLORIA CHINESE EDITION</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/V3nBXhx/IMG-5067.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>THE DOORS X DEDDY DORES</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/mHGwsMZ/IMG-5069.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>THE DOORS X DEDDY DORES</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/hCf7M8M/IMG-5070.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>DUL ANAK SEKOLAHAN</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/vjRKSwK/IMG-5071.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>KISS PLUS</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/7X7TYj0/IMG-5073.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>KISS PLUS</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/RSqtMhQ/IMG-5074.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>BROERY X BOWIE</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/m43dsMk/IMG-5075.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>BROERY X BOWIE</h2>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/wc7QGNC/IMG-5077.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform h-48 lg:h-72"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>RINTO HARAP CLASSIC POP</h2>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <Footer />
    </main>
  );
}
