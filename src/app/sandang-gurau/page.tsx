/* eslint-disable react/no-unescaped-entities */
"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";
import { Laila } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { SiShopee, SiInstagram, SiTiktok } from "react-icons/si";
import { FaPlay, FaShoppingBag, FaHeart, FaStar } from "react-icons/fa";
import { IoArrowForward, IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const Josefin = Josefin_Sans({ subsets: ["latin"] });
const LailaFont = Laila({
  subsets: ["latin"],
  weight: ["700", "300", "500"],
});

const products = [
  {
    id: 1,
    name: "RINTO HARAP CLASSIC POP",
    image: "https://i.ibb.co.com/s1kqYgz/IMG-5058.jpg",
    category: "Music Parody",
    price: "Rp 150.000"
  },
  {
    id: 2,
    name: "U2 GLORIA CHINESE EDITION",
    image: "https://i.ibb.co.com/86WS1d5/IMG-5059.jpg",
    category: "Music Parody",
    price: "Rp 150.000"
  },
  {
    id: 3,
    name: "RAJA POP X RAJA LELE",
    image: "https://i.ibb.co.com/FWfNy5X/IMG-5060.jpg",
    category: "Music Parody",
    price: "Rp 150.000"
  },
  {
    id: 4,
    name: "THE DOORS X DEDDY DORES",
    image: "https://i.ibb.co.com/V3nBXhx/IMG-5067.jpg",
    category: "Music Parody",
    price: "Rp 150.000"
  },
  {
    id: 5,
    name: "DUL ANAK SEKOLAHAN",
    image: "https://i.ibb.co.com/hCf7M8M/IMG-5070.jpg",
    category: "Movie Parody",
    price: "Rp 150.000"
  },
  {
    id: 6,
    name: "KISS PLUS",
    image: "https://i.ibb.co.com/vjRKSwK/IMG-5071.jpg",
    category: "Music Parody",
    price: "Rp 150.000"
  },
  {
    id: 7,
    name: "BROERY X BOWIE",
    image: "https://i.ibb.co.com/RSqtMhQ/IMG-5074.jpg",
    category: "Music Parody",
    price: "Rp 150.000"
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-yellow-50 to-green-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200/25 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <div className="hidden lg:block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/img/img2.jpg"
                  width={350}
                  height={350}
                  alt="Fashion 1"
                  loading="lazy"
                  className="relative z-10 rounded-3xl border-4 border-[#0C542B] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Center Content */}
            <div className="text-center space-y-8">
              {/* Main Image */}
              <div className="relative group mx-auto w-fit">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="/img/img3.png"
                  width={400}
                  height={400}
                  alt="Main Fashion"
                  loading="eager"
                  className="relative z-10 rounded-3xl border-4 border-[#0C542B] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Brand Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
                <div className="relative mb-6">
                  <Image
                    src="/img/logo.png"
                    width={150}
                    height={150}
                    alt="Sandang Gurau Logo"
                    loading="eager"
                    className="mx-auto transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h1 className={`${LailaFont.className} text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0C542B] to-[#F5252D] bg-clip-text text-transparent mb-4`}>
                  Sandang Gurau
                </h1>
                
                <p className={`${Josefin.className} text-lg text-gray-600 leading-relaxed mb-8 max-w-md mx-auto`}>
                  Movie and Music Parody Collaboration Fashion that Tickles Nostalgia
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 rounded-full">
                    <FaHeart className="text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Nostalgic</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Unique</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 rounded-full">
                    <FaShoppingBag className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Quality</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Link href="https://linktr.ee/sandanggurau.id?fbclid=PAZXh0bgNhZW0CMTEAAaaBBIAcKYRjigPLdY_3t5v56qDKE9jqnezd45kKeIs5V-H1sgtN4JCkUEM_aem_PG6vw23QscfkkJGesHMXng">
                  <Button className={`${LailaFont.className} bg-gradient-to-r from-[#0C542B] to-[#F5252D] hover:from-[#F5252D] hover:to-[#0C542B] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto`}>
                    <FaShoppingBag className="text-xl" />
                    Shop Now
                    <IoArrowForward className="text-xl" />
                  </Button>
                </Link>
              </div>
              
              {/* Bottom Image */}
              <div className="hidden lg:block">
                <div className="relative group mx-auto w-fit">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Image
                    src="/img/img4.png"
                    width={400}
                    height={400}
                    alt="Fashion 2"
                    loading="lazy"
                    className="relative z-10 rounded-3xl border-4 border-[#0C542B] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="hidden lg:block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Image
                  src="https://i.ibb.co.com/Fqqb4fv/img1.jpg"
                  width={350}
                  height={350}
                  alt="Fashion 3"
                  loading="lazy"
                  className="relative z-10 rounded-3xl border-4 border-[#0C542B] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 relative overflow-hidden" id="Tentang-Kami">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C542B] via-[#F5252D] to-[#F6EB3A]"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative bg-white rounded-full p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500 mx-auto w-fit">
                <Image
                  src="/img/logo.png"
                  width={400}
                  height={400}
                  alt="Sandang Gurau Logo"
                  loading="lazy"
                  className="w-full h-auto"
                />
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#F5252D] to-[#F6EB3A] text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
                  <span className="font-bold text-sm">🎭 Creative</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  🎨 About Us
                </div>
                <h2 className={`${LailaFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6`}>
                  <span className="bg-gradient-to-r from-[#F6EB3A] to-white bg-clip-text text-transparent">
                    Sandang Gurau
                  </span>
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Sandang Gurau is a collaboration of creative artists and designers who want to share their love for movies and music through fashion.
              </p>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                We developed unique and funny designs that take inspiration from favorite movies and music, creating nostalgic fashion that brings joy and memories.
              </p>
              
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-[#F6EB3A] rounded-full animate-pulse"></div>
                  <span>Movie & Music Parody Designs</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-[#F6EB3A] rounded-full animate-pulse delay-200"></div>
                  <span>High Quality Materials</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-[#F6EB3A] rounded-full animate-pulse delay-400"></div>
                  <span>Nostalgic & Creative Concepts</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link href="https://www.instagram.com/sandanggurau.id?igsh=MXBmNGVvdWlodXBwcQ==">
                <Button className="bg-gradient-to-r from-[#F6EB3A] to-white text-[#0C542B] hover:from-white hover:to-[#F6EB3A] px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <SiInstagram className="text-xl" />
                  Take a Look
                  <IoArrowForward className="text-xl" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* TikTok Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 relative overflow-hidden">
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 text-sm font-medium mb-6">
              📱 Social Media
            </div>
            <h2 className={`${LailaFont.className} text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6`}>
              TikTok Videos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's have some nostalgic fun with Sandang Gurau! We have funny
              and unique movie and music parody clothes! Check out the videos and
              find your favorite outfit!
            </p>
          </div>
          
          {/* TikTok Embed */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <SiTiktok className="text-white text-2xl" />
              </div>
              <div>
                <h3 className={`${LailaFont.className} text-xl font-bold text-gray-800`}>Follow Our TikTok</h3>
                <p className="text-gray-600">@sandanggurau.id</p>
              </div>
            </div>
            
            <div className="relative">
              {isLoaded && (
                <>
                  <script
                    src="https://static.elfsight.com/platform/platform.js"
                    data-use-service-core
                    defer
                  />
                  <div
                    className="elfsight-app-a46e7e76-cbac-4fd6-bbc4-424aae6a4fbd"
                    data-elfsight-app-lazy
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C542B] via-[#F5252D] to-[#F6EB3A]"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-10 w-40 h-40 bg-white rounded-full animate-pulse delay-1500"></div>
        </div>
        
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              👕 Our Collection
            </div>
            <h2 className={`${LailaFont.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6`}>
              Our Products
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Sandang Gurau presents a collection of movie and music parody
              clothes that are unique, funny and nostalgic. Our clothes are made
              with high quality materials and creative designs.
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-white/20"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {product.category}
                  </div>
                  {/* Price */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#F5252D] text-white rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className={`${LailaFont.className} text-white font-bold text-sm leading-tight group-hover:text-[#F6EB3A] transition-colors duration-300`}>
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="https://linktr.ee/sandanggurau.id">
              <Button className="bg-white text-[#0C542B] hover:bg-[#F6EB3A] hover:text-[#0C542B] px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mx-auto">
                <FaShoppingBag className="text-xl" />
                View All Products
                <IoArrowForward className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
            >
              <IoClose className="text-2xl" />
            </button>
            
            <div className="aspect-square relative">
              <Image
                src={selectedProduct.image}
                width={600}
                height={600}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-[#0C542B] to-[#F5252D] text-white rounded-full text-sm font-semibold">
                  {selectedProduct.category}
                </span>
              </div>
              
              <h3 className={`${LailaFont.className} text-2xl font-bold text-gray-900 mb-4`}>
                {selectedProduct.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#F5252D]">{selectedProduct.price}</span>
                <Link href="https://linktr.ee/sandanggurau.id">
                  <Button className="bg-gradient-to-r from-[#0C542B] to-[#F5252D] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                    <FaShoppingBag />
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
