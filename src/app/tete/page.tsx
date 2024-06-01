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
  title: "Sandang Group | Tete",
};

const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});

export default function Tete() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen flex items-center justify-center container">
        <h1>Tete</h1>
      </section>
      <Footer />
    </main>
  );
}
