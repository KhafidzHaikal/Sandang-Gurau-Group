"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila, Josefin_Sans, Poppins } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill, RiCustomerService2Fill } from "react-icons/ri";
import { FaShoppingBag, FaHeart, FaStar, FaShieldAlt } from "react-icons/fa";
import { IoArrowForward, IoClose } from "react-icons/io5";
import CarouselBaju from "@/components/carousel-baju-plain";
import ProductList from "./components/product";
import localFont from "next/font/local";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-200/25 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white text-sm font-medium shadow-lg">
                👕 Minimalist Fashion
              </div>
              
              {/* Main Heading */}
              <h1 className={`${Local.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}>
                <span className="bg-gradient-to-r from-[#0069B2] to-sky-600 bg-clip-text text-transparent">
                  Elegance in Simplicity,
                </span>
                <br />
                <span className="text-gray-800">
                  Cultivate the Habit.
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Discover the Art of Simplicity and Elegance. Where minimalist design meets premium quality.
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <FaHeart className="text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Premium</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <FaStar className="text-sky-500" />
                  <span className="text-sm font-medium text-gray-700">Minimalist</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <FaShieldAlt className="text-cyan-500" />
                  <span className="text-sm font-medium text-gray-700">Quality</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link href="https://wa.me/6281292702020">
                <Button className="bg-gradient-to-r from-[#0069B2] to-sky-600 hover:from-sky-600 hover:to-[#0069B2] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <FaShoppingBag className="text-xl" />
                  Shop Now
                  <IoArrowForward className="text-xl" />
                </Button>
              </Link>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Background Image */}
                <div className="absolute inset-0 transform rotate-6">
                  <Image
                    src="/img/plain-habit-background.png"
                    width={500}
                    height={600}
                    alt="Plain Habit Background"
                    loading="eager"
                    className="w-full h-auto opacity-20"
                  />
                </div>
                
                {/* Carousel Container */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="mb-6">
                    <h3 className={`${PoppinsFont.className} text-xl font-bold text-[#0069B2] text-center`}>
                      Featured Collection
                    </h3>
                  </div>
                  <CarouselBaju />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-full opacity-15 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-sky-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${PoppinsFont.className} container relative z-10`}>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 text-sm font-medium mb-6">
              🎆 Best Sellers
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0069B2] to-sky-600 bg-clip-text text-transparent mb-6">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated collection of minimalist fashion pieces that embody elegance and simplicity.
            </p>
          </div>
          
          {/* Products */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 shadow-xl border border-blue-100">
            <ProductList />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0069B2] via-sky-600 to-cyan-600"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-white rounded-full animate-pulse delay-1500"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/img/baju-visi-plain.png"
                  width={400}
                  height={500}
                  alt="Plain Habit Fashion"
                  loading="lazy"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-400 to-cyan-400 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
                  <span className="font-bold text-sm">🎨 Minimalist</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  💫 About Us
                </div>
                <h2 className={`${Josefin.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6`}>
                  About{" "}
                  <span className="bg-gradient-to-r from-sky-200 to-cyan-200 bg-clip-text text-transparent">
                    Plain Habit
                  </span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Plain Habit is an interpretation of the combination of simplicity and habit.
              </p>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Plain is a reflection of simplicity yet elegance, while Habit shows consistency in maintaining simplicity itself. We believe that true style comes from understanding the beauty of minimalism.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse"></div>
                  <span>Timeless Minimalist Designs</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse delay-200"></div>
                  <span>Premium Quality Materials</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-sky-300 rounded-full animate-pulse delay-400"></div>
                  <span>Sustainable Fashion Practices</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link href="https://wa.me/6281292702020">
                <Button className="bg-white text-[#0069B2] hover:bg-sky-100 px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Read More
                  <IoArrowForward className="text-xl" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 text-sm font-medium mb-6">
              ✨ Our Advantages
            </div>
            <h2 className={`${PoppinsFont.className} text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0069B2] to-sky-600 bg-clip-text text-transparent mb-6`}>
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We try to give all the best of our service for you. You deserve to get all the convenience from us.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Delivery */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0069B2] to-sky-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TbTruckDelivery className="text-3xl text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-sky-200/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className={`${PoppinsFont.className} text-xl font-bold text-[#0069B2] text-center mb-4 group-hover:text-sky-600 transition-colors duration-300`}>
                FREE AND FAST DELIVERY
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                Free shipping on all orders over 5 items with express delivery options available.
              </p>
            </div>
            
            {/* Customer Service */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0069B2] to-sky-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <RiCustomerService2Fill className="text-3xl text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-sky-200/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className={`${PoppinsFont.className} text-xl font-bold text-[#0069B2] text-center mb-4 group-hover:text-sky-600 transition-colors duration-300`}>
                24/7 CUSTOMER SERVICE
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                Friendly 24/7 customer support ready to assist you with any questions or concerns.
              </p>
            </div>
            
            {/* Money Back Guarantee */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0069B2] to-sky-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <RiSecurePaymentFill className="text-3xl text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-sky-200/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className={`${PoppinsFont.className} text-xl font-bold text-[#0069B2] text-center mb-4 group-hover:text-sky-600 transition-colors duration-300`}>
                MONEY BACK GUARANTEE
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                We return money within 30 days if you're not completely satisfied with your purchase.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link href="https://wa.me/6281292702020">
              <Button className="bg-gradient-to-r from-[#0069B2] to-sky-600 hover:from-sky-600 hover:to-[#0069B2] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mx-auto">
                <FaShoppingBag className="text-xl" />
                Start Shopping
                <IoArrowForward className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
