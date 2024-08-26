import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila, Josefin_Sans, Poppins } from "next/font/google";
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
import CarouselBaju from "@/components/carousel-baju-plain";
import ProductList from "./components/product";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Plain Habit",
};

const Local = localFont({ src: "./digital-geometric-font.otf" });
const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});
const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});

export default function PlainHabit() {
  return (
    <main className="">
      <Navbar />
      <section
        className={`${Local.className} h-screen flex items-center container`}>
        <div className="absolute left-12 rounded-full w-36 h-36 bg-white border-[#0069B2] z-10 border-[2rem] opacity-10"></div>
        <div className="absolute left-0 rounded-full w-60 h-60 bg-white border-[#0069B2] border-[2rem] opacity-10"></div>
        <div className="lg:w-1/2 text-[#0069B2]">
          <h1 className="text-[40px] lg:text-[60px] font-bold">
            Elegance in Simplicity, Cultivate the Habit.
          </h1>
          <p className="my-8 text-xl">
            Discover the Art of Simplicity and Elegance
          </p>
          <Link
            href={"https://wa.me/6281292702020"}
            className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white">
            Shop
          </Link>
        </div>
        <div className="absolute right-10 w-1/4 hidden lg:flex">
          <Image
            src={"/img/plain-habit-background.png"}
            width={400}
            height={400}
            sizes="100vh"
            alt="Image 1"
            className="absolute"
          />
          <CarouselBaju />
        </div>
      </section>
      <section className="mb-10">
        <hr className="mt-4 bg-[#0069B2] border-2 rounded-lg" />
        <div className={`${PoppinsFont.className} mt-10 container`}>
          <div className="text-left">
            <h1 className="text-[#0069B2] font-bold text-4xl">
              Featured Product
            </h1>
            <div className="mb-10 w-[10rem] mt-2 bg-[#0069B2] h-1"></div>
          </div>
          <ProductList />
        </div>
      </section>
      <section
        className={`${Josefin.className} sm:h-screen sm:flex gap-10 items-center justify-center py-10`}
        style={{
          backgroundImage: "url(/img/bg-visi-plain.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <Image
          src={"/img/baju-visi-plain.png"}
          width={350}
          height={450}
          sizes="100vh"
          alt=""
          className="mx-auto"
        />
        <div className="lg:w-1/2 text-white container mt-10 lg:mt-0">
          <h1 className="text-[40px] lg:text-[54px] font-bold">About Plain habit</h1>
          <p className="font-normal lg:leading-8 mb-10">
            Plain Habit is an interpretation of the combination of simplicity
            and habit. Plain is a reflection of simplicity yet elegance, while
            Habit shows consistency in maintaining simplicity itself.
          </p>
          <Link
            href={"https://wa.me/6281292702020"}
            className="py-2 px-6 border-2 rounded-lg shadow-lg bg-white text-[#0069B2] border-[#0069B2] hover:bg-[#0069B2] hover:text-white hover:border-white">
            Read More
          </Link>
        </div>
      </section>
      <section
        className={`${PoppinsFont.className} h-screen flex items-center justify-center container mt-[10rem] sm:mt-0`}>
        <div className="text-center">
          <h1 className="text-[32px] text-[#0069B2] font-semibold">
            Why Should Choose Us?
          </h1>
          <p className="mb-32">
            We try to give all the best of our service for you, you deserve to
            get all the convenience from us.{" "}
          </p>
          <div className="grid sm:grid-cols-3 gap-10 container -mt-14 mb-[10rem] sm:mt-0 sm:mb-0">
            <div className="mx-auto">
              <div className="w-[4rem] gap-2 mx-auto">
                <div className="flex items-center justify-center rounded-full p-2 bg-[#0069B2] text-white border-[10px] border-[#80B4D9]">
                  <TbTruckDelivery className="text-3xl " />
                </div>
              </div>
              <h1 className="font-semibold text-[#0069B2] uppercase text-[20px] mt-6 mb-2">
                Free and Fast delivery
              </h1>
              <p className="text-sm">
                Free shipping on all orders over 5 items
              </p>
            </div>
            <div className="mx-auto">
              <div className="w-[4rem] gap-2 mx-auto">
                <div className="flex items-center justify-center rounded-full p-2 bg-[#0069B2] text-white border-[10px] border-[#80B4D9]">
                  <RiCustomerService2Fill className="text-3xl " />
                </div>
              </div>
              <h1 className="font-semibold text-[#0069B2] uppercase text-[20px] mt-6 mb-2">
                24/7 Customer Service
              </h1>
              <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
            <div className="mx-auto">
              <div className="w-[4rem] gap-2 mx-auto">
                <div className="flex items-center justify-center rounded-full p-2 bg-[#0069B2] text-white border-[10px] border-[#80B4D9]">
                  <RiSecurePaymentFill className="text-3xl " />
                </div>
              </div>
              <h1 className="font-semibold text-[#0069B2] uppercase text-[20px] mt-6 mb-2">
                Money Back Guarantee
              </h1>
              <p className="text-sm">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
