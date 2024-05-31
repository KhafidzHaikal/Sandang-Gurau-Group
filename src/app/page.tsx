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

const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen flex justify-center items-center container">
        <div className="grid md:grid-cols-3 gap-3">
          <Image
            src={"https://i.ibb.co.com/9T6xrtn/img2.jpg"}
            width={350}
            height={350}
            sizes="100vh"
            alt="Image 1"
            className="invisible md:visible rounded-xl border-2 border-[#0C542B] mx-auto"
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
            className="invisible md:visible rounded-xl border-2 border-[#0C542B] mx-auto"
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
            <h1 id="text-sandang" className="text-[52px] text-center md:text-left lg:text-[71px] font-bold">
              Sandang Gurau
            </h1>
            <p className="text-white font-[300] my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, officiis, iure rem veniam blanditiis, corporis aliquam
              cumque beatae quasi nostrum deserunt. Quo ut nam quam animi
              perferendis error alias voluptates!
            </p>
            <div className="mt-10">
              <Link
                href={""}
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, officiis, iure rem veniam blanditiis, corporis aliquam
              cumque beatae quasi nostrum deserunt
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, officiis, iure rem veniam blanditiis, corporis aliquam
              cumque beatae quasi nostrum deserunt
            </p>
          </div>
          <Carousel className="mt-7">
            <CarouselContent>
              <CarouselItem className="md:basis-1/3 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/WfStm7L/baju1.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>Kaos U2 x Chinese</h2>
                  <p className="font-[300] mt-3">Rp. 169.000</p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/WfStm7L/baju1.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>Kaos U2 x Chinese</h2>
                  <p className="font-[300] mt-3">Rp. 169.000</p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/WfStm7L/baju1.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>Kaos U2 x Chinese</h2>
                  <p className="font-[300] mt-3">Rp. 169.000</p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/WfStm7L/baju1.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>Kaos U2 x Chinese</h2>
                  <p className="font-[300] mt-3">Rp. 169.000</p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/5">
                <div className="inline-block overflow-hidden rounded-xl">
                  <Image
                    src={"https://i.ibb.co.com/WfStm7L/baju1.jpg"}
                    width={450}
                    height={450}
                    sizes="100vh"
                    alt=""
                    className="rounded-xl border-2 border-[#F5252D] mx-auto hover:scale-110 duration-500 transition-transform object-none h-96"
                  />
                </div>
                <div
                  className={`${LailaFont.className} text-left text-white mt-3`}>
                  <h2>Kaos U2 x Chinese</h2>
                  <p className="font-[300] mt-3">Rp. 169.000</p>
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
