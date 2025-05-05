import Navbar from "@/components/navbar";
import React from "react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { IoArrowRedoCircleSharp, IoArrowForward } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/footer";
import Image from "next/image";
import { LuCheckSquare } from "react-icons/lu";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sasfy",
};

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "500"],
});

export default function SasfyPage() {
  return (
    <main>
      <Navbar />
      <section
        className={`${PoppinsFont.className} h-screen flex items-center justify-center`}
        style={{
          backgroundImage: "url(/img/background_sasfy1.png)",
          width: "100%",
          backgroundSize: "cover",
        }}>
        <Image
          src={"/img/comp-sasfy1.png"}
          width={350}
          height={350}
          sizes="100vh"
          alt="Image 1"
          className="comp-1 hidden xl:flex"
        />
        <Image
          src={"/img/comp-sasfy2.png"}
          width={350}
          height={350}
          sizes="100vh"
          alt="Image 1"
          className="comp-2 hidden xl:flex"
        />
        <div className="container">
          <p className="hidden sm:flex rounded-2xl justify-center border-2 w-[20rem] mx-auto border-black">
            BISNIS SUKSES WEBSITE SOLUSINYA
          </p>
          <h1
            className={`text-[28px] sm:text-[40px] lg:text-[64px] font-medium md:w-9/12 mx-auto text-center`}>
            Tingkatkan Bisnis Anda dengan Memiliki Website Bisnis
          </h1>
          <p className="md:w-1/2 text-sm md:text-base mx-auto mt-4 text-center">
            Transformasi digital telah menjadi kunci bagi kesuksesan bisnis di
            era modern. Sasfy, sebagai perusahaan pembuatan software terdepan,
            hadir untuk membantu Anda mencapai tujuan tersebut.
          </p>
          <div className="sm:flex text-center gap-4 justify-center mt-5">
            <Link href={"https://wa.me/+6281911506190"}>
              <Button className="rounded-full py-6 flex items-center gap-2 mx-auto sm:mx-0">
                Hubungi Kami Segera{" "}
                <IoArrowRedoCircleSharp className="text-xl" />
              </Button>
            </Link>
            <a href={"https://www.instagram.com/sasfydevs/?igsh=czlreXJ1d3oyOWxy&utm_source=qr"}>
              <Button className="rounded-full py-6 flex items-center gap-2 opacity-30 hover:text-white mx-auto sm:mx-0 mt-4 sm:mt-0">
                Tentang Kami <IoArrowForward className="text-xl" />
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section
        className={`${PoppinsFont.className} container my-[4rem]`}
        id="layanan-kami">
        <div className="md:flex justify-between gap-4 mb-10">
          <h1 className="text-[40px] mb-5 md:mb-0 lg:text-[54px] w-full uppercase font-semibold text-center md:text-left">
            Layanan Kami
          </h1>
          <p>
            Sasfy perusahaan pembuatan software terkemuka, menawarkan solusi
            perangkat lunak yang dirancang untuk membantu Anda mencapai tujuan
            Anda.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white shadow-lg p-5 rounded-xl">
            <p className="font-bold">UMKM</p>
            <h1 className="text-[30px] my-7 font-bold text-[#16740A]">
              Rp. 5 Juta
            </h1>
            <ul className="mt-4">
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> 5
                Halaman
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> 2 Hari
                Pengerjaan
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Domain
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Hosting 1 GB
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Email Bisnis
              </li>
            </ul>
            <Button className="bg-[#80AA46] w-full rounded-full mt-8">
              Detail Sekarang
            </Button>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-xl">
            <p className="font-bold">Bisnis</p>
            <h1 className="text-[30px] my-7 font-bold text-[#16740A]">
              Rp. 10 Juta
            </h1>
            <ul className="mt-4">
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> 10
                Halaman
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> 10
                Hari Pengerjaan
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Domain
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Hosting 1 GB
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Email Bisnis
              </li>
            </ul>
            <Button className="bg-[#80AA46] w-full rounded-full mt-8">
              Detail Sekarang
            </Button>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-xl">
            <p className="font-medium">Profesional</p>
            <h1 className="text-[30px] my-7 font-bold text-[#16740A]">
              Price Contact
            </h1>
            <ul className="mt-4">
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> 10 -
                30 Halaman
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> 15
                Hari Pengerjaan
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Domain
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Hosting 1 GB
              </li>
              <li className="flex items-center mt-4">
                <LuCheckSquare className="text-xl mr-3 text-[#16740A]" /> Gratis
                Email Bisnis
              </li>
            </ul>
            <Button className="bg-[#80AA46] w-full rounded-full mt-8">
              Detail Sekarang
            </Button>
          </div>
        </div>
      </section>
      <section className={`${PoppinsFont.className} my-[5rem]`}>
        <div className="container">
          <h1 className="text-[40px] mb-5 md:mb-0 lg:text-[54px] w-full uppercase font-semibold text-center">
            PORTOPOLIO
          </h1>
          <p className="text-center my-4">
            Sasfy perusahaan pembuatan software terdepan, menawarkan berbagai
            macam solusi perangkat lunak yang dirancang untuk memenuhi kebutuhan
            bisnis dari berbagai skala.
          </p>
          <div className="grid lg:grid-cols-2 gap-5 mt-4">
            <div className="shadow-lg p-4 bg-white">
              <h1 className="font-bold text-center text-[24px] mb-4">
                Registrasi Form Pertamina
              </h1>
              <div className="overflow-hidden mx-auto">
                <Image
                  src={"/img/porto-sasfy-1.png"}
                  width={500}
                  height={500}
                  sizes="100vh"
                  alt="Registrasi Pertamina"
                  className="mx-auto hover:scale-110 duration-500 transition-transform lg:h-72"
                />
              </div>
              <p className="mt-4 text-sm">
                Aplikasi Registration Form Pertamina adalah platform digital
                untuk mendaftar ke acara atau program yang diselenggarakan oleh
                Pertamina.
              </p>
            </div>
            <div className="shadow-lg p-4 bg-white">
              <h1 className="font-bold text-center text-[24px] mb-4">
                Sasfy Dev
              </h1>
              <div className="overflow-hidden mx-auto">
                <Image
                  src={"/img/porto-sasfy-3.png"}
                  width={500}
                  height={500}
                  sizes="100vh"
                  alt="Sasfy Dev"
                  className="mx-auto hover:scale-110 duration-500 transition-transform lg:h-72"
                />
              </div>
              <p className="mt-4 text-sm">
                Sasfy perusahaan pembuatan software terkemuka, menawarkan
                solusi perangkat lunak yang dirancang untuk membantu Anda
                mencapai tujuan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${PoppinsFont.className} my-[3rem] py-[5rem] container`}
        style={{
          backgroundImage: "url(/img/background_sasfy1.png)",
          width: "100%",
          backgroundSize: "cover",
          borderRadius: "15px",
        }}>
        <h1 className="text-[40px] mb-5 md:mb-0 lg:text-[54px] w-full uppercase font-semibold text-center">
          Tertarik untuk Membuat Website?
        </h1>
        <p className="text-center my-8">
          Kami berkomitmen untuk menyediakan solusi perangkat lunak yang
          berkualitas tinggi dan terjangkau yang dapat membantu Anda mencapai
          potensi penuh Anda. <br />
          <br /> Hubungi kami hari ini untuk mengetahui bagaimana kami dapat
          membantu Anda mencapai kesuksesan.
        </p>
        <Link
          href={"https://wa.me/+6281911506190"}
          className="flex justify-center">
          <Button className="flex items-center">
            <FaWhatsapp className="mr-4 text-xl" /> Kontak Kami
          </Button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
