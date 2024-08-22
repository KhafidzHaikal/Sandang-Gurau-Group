import React from "react";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Footer() {
  return (
    <footer className="container mt-[5rem]">
      <div className="sm:flex gap-7">
        <div className="sm:w-1/2">
          <div className="inline-flex items-center -mt-14 -mb-14 -ml-4">
            <Image
              src="/img/sandang-group.png"
              width={110}
              height={110}
              sizes="100vh"
              alt="Sandang Gurau"
              className=""
            />
          </div>
          <p className="text-[12px] font-medium mb-4">
            Thank you for choosing Sandang Group. Your purchase supports our
            vision for sustainable and stylish fashion. We hope you love our
            services.
          </p>
          <div className="flex gap-5">
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-14 xl:gap-24 mb-7 mt-10 md:mt-0 sm:ml-[10rem] lg:ml-[14rem]">
          <div className={`${PoppinsFont.className} lg:-mt-10`}>
            <strong className="text-sm text-[#FC1111]">Service</strong>
            <ul>
              <li className="my-3 text-sm">
                <a href="https://wa.me/6281292702020">Contact Us</a>
              </li>
              <li className="mb-3 text-sm">Blog</li>
              <li className="mb-3 text-sm">About Us</li>
            </ul>
          </div>
          <div className={`${PoppinsFont.className} lg:-mt-10`}>
            <strong className="text-sm text-[#FC1111]">Resource</strong>
            <ul>
              <li className="my-3 text-sm">Pricing</li>
              <li className="mb-3 text-sm">Catalog</li>
            </ul>
          </div>
          <div className={`${PoppinsFont.className} lg:-mt-10`}>
            <strong className="text-sm text-[#FC1111]">Support</strong>
            <ul>
              <li className="my-3 text-sm">Sitemap</li>
              <li className="mb-3 text-sm">Pricing</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-2 rounded-xl mt-4" />
      <div
        className={`${PoppinsFont.className} flex justify-between mb-4 text-[#FC1111] mt-2 text-sm`}>
        <p>@copyright 2024.</p>
        <p>Teams & Condition</p>
      </div>
    </footer>
  );
}
