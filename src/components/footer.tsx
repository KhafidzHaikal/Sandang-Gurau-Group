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
      <div className="md:flex gap-7">
        <div className="md:w-1/2">
          <div className="inline-flex items-center -mt-14 -mb-14 -ml-4">
            <Image
              src="/img/logo.png"
              width={150}
              height={150}
              sizes="100vh"
              alt="Sandang Gurau"
              className=""
            />
          </div>
          <p className="text-[12px] font-medium mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quae
            totam quo incidunt deserunt veritatis qui minima nisi impedit, nihil
            tenetur animi officiis rem illo voluptates repellat saepe corporis.
            Animi.
          </p>
          <div className="flex gap-5">
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-7 mt-10 md:mt-0 lg:ml-[10rem]">
          <div className={`${PoppinsFont.className} lg:-mt-10 text-[#0C542B]`}>
            <strong className="text-sm">Service</strong>
            <ul>
              <li className="my-3 text-sm">Contact Us</li>
              <li className="mb-3 text-sm">Blog</li>
              <li className="mb-3 text-sm">Help Center</li>
            </ul>
          </div>
          <div className={`${PoppinsFont.className} lg:-mt-10 text-[#0C542B]`}>
            <strong className="text-sm">Resource</strong>
            <ul>
              <li className="my-3 text-sm">Pricing</li>
              <li className="mb-3 text-sm">FAQs</li>
            </ul>
          </div>
          <div className={`${PoppinsFont.className} lg:-mt-10 text-[#0C542B]`}>
            <strong className="text-sm">Support</strong>
            <ul>
              <li className="my-3 text-sm">Sitemap</li>
              <li className="mb-3 text-sm">Cancelation Policy</li>
              <li className="mb-3 text-sm">Pricing</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-2 rounded-xl" />
      <div
        className={`${PoppinsFont.className} flex justify-between mb-4 text-[#828282] mt-2 text-sm`}>
        <p>@copyright 2024.</p>
        <p>Teams & Condition</p>
      </div>
    </footer>
  );
}
