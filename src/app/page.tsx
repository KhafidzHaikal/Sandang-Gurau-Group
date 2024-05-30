import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";

const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen flex justify-center items-center">
        <div className="grid lg:grid-cols-3 gap-3">
          <Image
            src={"/img/img2.jpg"}
            width={350}
            height={350}
            sizes="100vh"
            alt="Image 1"
            className="rounded-xl border-2 border-[#0C542B] mx-auto"
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
            <div className="text-center h-[17.8rem]">
              <Image
                src={"/img/logo.png"}
                width={250}
                height={250}
                sizes="100vh"
                alt=""
                className="mx-auto"
              />
              <h1 className={`${LailaFont.className} text-5xl`}>
                Sandang Gurau
              </h1>
              <p className={`${Josefin.className} mt-2`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className=" mt-4">
                <Link
                  href={""}
                  className={`${LailaFont.className} rounded-xl border-2 text-[#0C542B] border-[#0C542B] px-3 py-2`}>
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
              className="rounded-xl border-2 border-[#0C542B]"
            />
          </div>
          <Image
            src={"/img/img1.jpg"}
            width={350}
            height={350}
            sizes="100vh"
            alt="Image 2"
            className="rounded-xl border-2 border-[#0C542B] mx-auto"
          />
        </div>
      </section>
      <section className="" id="Tentang-Kami">
        <h1>Haloo</h1>
      </section>
    </main>
  );
}
