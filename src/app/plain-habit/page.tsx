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
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill, RiCustomerService2Fill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Plain Habit",
};

const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});

export default function PlainHabit() {
  return (
    <main className="">
      <Navbar />
      <section
        className={`${LailaFont.className} h-screen flex items-center container`}>
        <div className="absolute left-12 rounded-full w-36 h-36 bg-white border-[#0069B2] z-10 border-[2rem] opacity-10"></div>
        <div className="absolute left-0 rounded-full w-60 h-60 bg-white border-[#0069B2] border-[2rem] opacity-10"></div>
        {/* <Image
          src={"/img/plain-circle.png"}
          width={400}
          height={400}
          sizes="100vh"
          alt="circle"
          className="absolute left-10"
        /> */}
        <div className="lg:w-1/2 text-[#0069B2]">
          <h1 className="text-[40px] lg:text-[60px] font-bold">
            Elegance in Simplicity, Cultivate the Habit.
          </h1>
          <p className="my-8 text-xl">
            Discover the Art of Simplicity and Elegance
          </p>
          <Link
            href={""}
            className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white">
            Shop
          </Link>
        </div>
        <Image
          src={"/img/plain-habit-background.png"}
          width={600}
          height={600}
          sizes="100vh"
          alt="Image 1"
          className="absolute right-0 hidden lg:flex"
        />
      </section>
      <section className="">
        <div className="grid sm:grid-cols-3 gap-8 container">
          <div className="flex items-center gap-2 mx-auto">
            <div className="rounded-full p-2 bg-[#0069B2] text-white border-[10px] border-[#80B4D9]">
              <TbTruckDelivery className="text-2xl" />
            </div>
            <p className="font-semibold">Free and Fast delivery</p>
          </div>
          <div className="flex items-center gap-2 mx-auto">
            <div className="rounded-full p-2 bg-[#0069B2] text-white border-[10px] border-[#80B4D9]">
              <RiCustomerService2Fill className="text-2xl" />
            </div>
            <p className="font-semibold">24/7 Customer Service</p>
          </div>
          <div className="flex items-center gap-2 mx-auto">
            <div className="rounded-full p-2 bg-[#0069B2] text-white border-[10px] border-[#80B4D9]">
              <RiSecurePaymentFill className="text-2xl" />
            </div>
            <p className="font-semibold">Money Back Guarantee</p>
          </div>
        </div>
        <hr className="mt-4 bg-[#0069B2] border-2 rounded-lg" />
        <div className="lg:flex mt-10 w-full gap-10 px-[2rem] lg:px-0 ">
          <div className="lg:w-1/3 lg:ml-8 xl:ml-24 text-center lg:text-left">
            <h1 className="text-[#0069B2] font-bold text-4xl">
              Featured Product
            </h1>
            <p className="my-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repellendus, perspiciatis officiis esse placeat magnam dolorum,
              soluta vero dolores fugiat quisquam velit adipisci obcaecati
              magni. Veritatis culpa autem sit quibusdam?
            </p>
            <Link
              href={""}
              className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white">
              See All Product
            </Link>
          </div>
          <Carousel className="w-full mt-10 lg:mt-0">
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
                    <p className="font-bold mt-3 mb-4">Rp. 169.000</p>
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
                    <p className="font-bold mt-3 mb-4">Rp. 169.000</p>
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
                    <p className="font-bold mt-3 mb-4">Rp. 169.000</p>
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
                    <p className="font-bold mt-3 mb-4">Rp. 169.000</p>
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
