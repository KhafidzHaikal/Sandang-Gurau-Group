/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Poppins, Halant } from "next/font/google";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { GoLinkExternal } from "react-icons/go";
import { FiArrowRight, FiStar } from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";
import Clients from "@/components/client";

export const metadata: Metadata = {
  title: "Sandang Group",
};

const HalantFont = Halant({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});
const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-red-50">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-red-200 to-pink-200 rounded-full blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-2xl opacity-50 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-red-300 to-pink-300 rounded-full blur-lg opacity-60 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-red-100 shadow-sm">
              <FiStar className="text-yellow-500" />
              <span className={`${PoppinsFont.className} text-sm text-gray-600`}>Creative Community</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`${HalantFont.className} text-5xl lg:text-7xl font-bold leading-tight`}>
                <span className="bg-gradient-to-r from-[#BF3131] via-[#FF5E5E] to-[#BF3131] bg-clip-text text-transparent animate-pulse">
                  Sandang
                </span>
                <br />
                <span className="text-gray-800">Group</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#BF3131] to-[#FF5E5E] rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            {/* Description */}
            <p className={`${PoppinsFont.className} text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0`}>
              We're not just another company — we're a <span className="font-semibold text-[#BF3131]">community of creatives</span> who unite their passions to create extraordinary experiences for you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={"https://wa.me/6281292702020"}
                className={`${PoppinsFont.className} group bg-gradient-to-r from-[#BF3131] to-[#FF5E5E] text-white py-4 px-8 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-red-200 hover:-translate-y-1 flex items-center justify-center gap-2`}>
                Get Started
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#products"
                className={`${PoppinsFont.className} text-gray-700 py-4 px-8 rounded-2xl font-medium border-2 border-gray-200 hover:border-[#BF3131] hover:text-[#BF3131] transition-all duration-300 hover:shadow-lg`}>
                View Products
              </Link>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-2xl border border-red-100 hover:shadow-3xl transition-all duration-500 hover:-rotate-1">
                <Image
                  src="/img/sandang-group.png"
                  width={500}
                  height={500}
                  sizes="100vh"
                  alt="Sandang Group"
                  className="w-full h-auto drop-shadow-lg"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`${PoppinsFont.className} text-sm font-medium text-gray-700`}>Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#BF3131] to-[#FF5E5E] text-white rounded-2xl p-4 shadow-xl animate-pulse">
                <p className={`${PoppinsFont.className} text-sm font-medium`}>100+ Happy Clients</p>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-pink-200 rounded-3xl blur-3xl opacity-20 -rotate-6 scale-110"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-100 mb-6">
              <span className={`${PoppinsFont.className} text-sm text-[#BF3131] font-medium`}>Our Collection</span>
            </div>
            <h2 className={`${HalantFont.className} text-4xl lg:text-6xl font-bold mb-4`}>
              <span className="text-[#FF5E5E]">Take A Look</span>{" "}
              <span className="text-[#BF3131]">Our Products</span>
            </h2>
            <p className={`${PoppinsFont.className} text-gray-600 max-w-2xl mx-auto`}>
              Discover our carefully curated collection of premium products designed with passion and creativity.
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/4">
                <Link href={"/sandang-gurau"} className="group block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/img/home-1.png"
                        width={300}
                        height={400}
                        sizes="100vh"
                        alt="Kaos Dul Anak Sekolahan"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <GoLinkExternal className="text-[#BF3131]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`${PoppinsFont.className} font-semibold text-gray-800 mb-2`}>Sandang Gurau</h3>
                      <p className={`${PoppinsFont.className} text-gray-600 text-sm`}>Kaos Dul Anak Sekolahan</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[#BF3131] font-medium text-sm">View Details</span>
                        <FiArrowRight className="text-[#BF3131] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/4">
                <Link href={"/sandang-gurau"} className="group block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src="https://i.ibb.co.com/9T6xrtn/img2.jpg"
                        width={300}
                        height={200}
                        sizes="100vh"
                        alt="U2 Gloria Chinese Edition"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <GoLinkExternal className="text-[#BF3131]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`${PoppinsFont.className} font-semibold text-gray-800 mb-2`}>Sandang Gurau</h3>
                      <p className={`${PoppinsFont.className} text-gray-600 text-sm capitalize`}>U2 Gloria Chinese Edition</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[#BF3131] font-medium text-sm">View Details</span>
                        <FiArrowRight className="text-[#BF3131] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/4">
                <Link href={"/plain-habit"} className="group block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/img/home-3.png"
                        width={300}
                        height={400}
                        sizes="100vh"
                        alt="Kaos Mustard"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <GoLinkExternal className="text-[#BF3131]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`${PoppinsFont.className} font-semibold text-gray-800 mb-2`}>Plain Habit</h3>
                      <p className={`${PoppinsFont.className} text-gray-600 text-sm`}>Kaos Mustard</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[#BF3131] font-medium text-sm">View Details</span>
                        <FiArrowRight className="text-[#BF3131] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>

              <CarouselItem className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/4">
                <Link href={"/sandang-gurau"} className="group block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/img/home-4.png"
                        width={300}
                        height={400}
                        sizes="100vh"
                        alt="Kaos Classic Pop"
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <GoLinkExternal className="text-[#BF3131]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`${PoppinsFont.className} font-semibold text-gray-800 mb-2`}>Sandang Gurau</h3>
                      <p className={`${PoppinsFont.className} text-gray-600 text-sm`}>Kaos Classic Pop</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[#BF3131] font-medium text-sm">View Details</span>
                        <FiArrowRight className="text-[#BF3131] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-6">
              <span className={`${PoppinsFont.className} text-sm text-blue-600 font-medium`}>Our Services</span>
            </div>
            <h2 className={`${HalantFont.className} text-4xl lg:text-6xl font-bold mb-4`}>
              <span className="text-[#FF5E5E]">We Also</span>{" "}
              <span className="text-[#BF3131]">Have Services</span>
            </h2>
            <p className={`${PoppinsFont.className} text-gray-600 max-w-2xl mx-auto`}>
              Professional services in web development and custom t-shirt printing to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href={"/sasfy"} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/img/sasfy-home.png"
                    width={400}
                    height={300}
                    sizes="100vh"
                    alt="Web Development Service"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className={`${PoppinsFont.className} font-bold text-xl mb-2`}>Web Development</h3>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Website
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Application
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        ERD
                      </li>
                    </ul>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <GoLinkExternal className="text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`${PoppinsFont.className} font-semibold text-gray-800`}>Sasfy</h4>
                      <p className={`${PoppinsFont.className} text-sm text-gray-600`}>Digital Solutions</p>
                    </div>
                    <FiArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href={"/tete"} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="/img/t-home.png"
                    width={400}
                    height={300}
                    sizes="100vh"
                    alt="T-Shirt Custom Service"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className={`${PoppinsFont.className} font-bold text-xl mb-2`}>T-Shirt Custom</h3>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Screen Printing
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Your Own Design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Guaranteed Quality
                      </li>
                    </ul>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <GoLinkExternal className="text-[#BF3131]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`${PoppinsFont.className} font-semibold text-gray-800`}>Tete</h4>
                      <p className={`${PoppinsFont.className} text-sm text-gray-600`}>Custom Printing</p>
                    </div>
                    <FiArrowRight className="text-[#BF3131] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100 mb-6">
              <span className={`${PoppinsFont.className} text-sm text-green-600 font-medium`}>Trusted Partners</span>
            </div>
            <h2 className={`${HalantFont.className} text-4xl lg:text-6xl font-bold mb-4`}>
              <span className="text-[#FF5E5E]">Our</span>{" "}
              <span className="text-[#BF3131]">Clients</span>
            </h2>
            <p className={`${PoppinsFont.className} text-gray-600 max-w-2xl mx-auto`}>
              We've had the privilege to work with amazing clients who trust us with their creative projects.
            </p>
          </div>
          <Clients />
        </div>
      </section>

      <Footer />
    </main>
  );
}