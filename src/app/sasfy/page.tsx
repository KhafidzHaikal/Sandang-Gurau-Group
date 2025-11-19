"use client"

import Navbar from "@/components/navbar";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { IoArrowRedoCircleSharp, IoArrowForward, IoClose } from "react-icons/io5";
import { FaWhatsapp, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaClock } from "react-icons/fa";
import Footer from "@/components/footer";
import Image from "next/image";
import { LuCheckSquare } from "react-icons/lu";
import Link from "next/link";


const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "500"],
});

const portfolioData = {
  pertamina: {
    id: 1,
    title: "Registrasi Form Pertamina",
    category: "Web Application",
    client: "PT Pertamina (Persero)",
    duration: "1 Bulan",
    team: "2 Developer",
    year: "2024",
    status: "Live",
    description: "Platform digital terintegrasi untuk sistem registrasi acara dan program Pertamina dengan fitur manajemen peserta, notifikasi otomatis, dan dashboard analytics real-time.",
    features: [
      "Multi-step Registration Form",
      "Real-time Validation",
      "Email Notification System",
      "Admin Dashboard",
      "Export Data to Excel",
      "Mobile Responsive Design",
      "Payment Gateway Integration",
      "QR Code Generation"
    ],
    technologies: ["Laravel", "Apache", "MySQL"],
    images: ["/img/porto-sasfy-1.png", "/img/porto-detail-1.png", "/img/porto-detail-2.png"],
    challenges: "Mengintegrasikan sistem legacy Pertamina dengan platform modern sambil memastikan keamanan data tingkat enterprise.",
    solution: "Implementasi API gateway dengan enkripsi end-to-end dan sistem caching Redis untuk performa optimal.",
    results: "Peningkatan efisiensi registrasi 85%, pengurangan waktu proses dari 2 hari menjadi 15 menit."
  },
  sasfy: {
    id: 2,
    title: "Sasfy Dev Company Profile",
    category: "Company Website",
    client: "Sasfy Development",
    duration: "2 Bulan",
    team: "3 Developer",
    year: "2024",
    status: "Live",
    description: "Website company profile modern dengan fokus pada user experience dan conversion optimization. Menampilkan portofolio, layanan, dan testimoni klien dengan desain yang profesional.",
    features: [
      "Modern Landing Page",
      "Portfolio Showcase",
      "Service Catalog",
      "Client Testimonials",
      "Contact Form Integration",
      "Blog System",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    images: ["/img/porto-sasfy-3.png", "/img/porto-detail-3.png", "/img/porto-detail-4.png"],
    challenges: "Menciptakan desain yang menonjol di pasar yang kompetitif sambil mempertahankan loading speed yang optimal.",
    solution: "Implementasi lazy loading, image optimization, dan component-based architecture untuk performa maksimal.",
    results: "Peningkatan lead generation 120%, bounce rate turun 40%, dan page speed score 95/100."
  }
};

export default function SasfyPage() {
  const [selectedPortfolio, setSelectedPortfolio] = useState<keyof typeof portfolioData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (portfolioKey: keyof typeof portfolioData) => {
    setSelectedPortfolio(portfolioKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
  };

  return (
    <main>
      <Navbar />
      <section
        className={`${PoppinsFont.className} min-h-screen flex items-center justify-center relative overflow-hidden`}
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}>
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Image
          src={"/img/comp-sasfy1.png"}
          width={350}
          height={350}
          sizes="100vh"
          alt="Image 1"
          className="comp-1 hidden xl:flex absolute left-10 top-1/2 transform -translate-y-1/2 animate-bounce"
        />
        <Image
          src={"/img/comp-sasfy2.png"}
          width={350}
          height={350}
          sizes="100vh"
          alt="Image 2"
          className="comp-2 hidden xl:flex absolute right-10 top-1/2 transform -translate-y-1/2 animate-bounce delay-500"
        />
        
        <div className="container relative z-10 py-20">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium mx-auto mb-8 animate-pulse">
              ✨ BISNIS SUKSES WEBSITE SOLUSINYA
            </div>
            
            <h1 className={`text-[32px] sm:text-[48px] lg:text-[72px] font-bold md:w-10/12 mx-auto text-center text-white leading-tight mb-6 animate-fade-in-up`}>
              Tingkatkan Bisnis Anda dengan 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Website Bisnis
              </span>
            </h1>
            
            <p className="md:w-2/3 text-base md:text-lg mx-auto mt-6 text-center text-white/90 leading-relaxed">
              Transformasi digital telah menjadi kunci bagi kesuksesan bisnis di era modern. 
              <span className="font-semibold text-yellow-300">Sasfy</span>, sebagai perusahaan pembuatan software terdepan,
              hadir untuk membantu Anda mencapai tujuan tersebut.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href={"https://wa.me/+6281911506190"}>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-4 px-8 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Hubungi Kami Segera
                  <IoArrowRedoCircleSharp className="text-xl" />
                </Button>
              </Link>
              <a href={"https://www.instagram.com/sasfydevs/?igsh=czlreXJ1d3oyOWxy&utm_source=qr"}>
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full py-4 px-8 flex items-center gap-3 hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                  Tentang Kami <IoArrowForward className="text-xl" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${PoppinsFont.className} container my-20 px-4`}
        id="layanan-kami">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-4">
            💼 Paket Layanan
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Layanan Kami
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sasfy perusahaan pembuatan software terkemuka, menawarkan solusi
            perangkat lunak yang dirancang untuk membantu Anda mencapai tujuan Anda.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* UMKM Package */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">UMKM</span>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🏪</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Rp. 5 Juta</h2>
              <p className="text-gray-500 mb-8">Perfect untuk UMKM</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">5 Halaman</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">2 Hari Pengerjaan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">Gratis Domain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">Gratis Hosting 1 GB</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">Gratis Email Bisnis</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                Detail Sekarang
              </Button>
            </div>
          </div>
          
          {/* Bisnis Package - Featured */}
          <div className="group relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl transform scale-105 border-4 border-yellow-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">🔥 POPULER</span>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold">Bisnis</span>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🏢</span>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">Rp. 10 Juta</h2>
            <p className="text-white/80 mb-8">Ideal untuk bisnis berkembang</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
                  <LuCheckSquare className="text-blue-600 text-xs" />
                </div>
                <span className="text-white">10 Halaman</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
                  <LuCheckSquare className="text-blue-600 text-xs" />
                </div>
                <span className="text-white">10 Hari Pengerjaan</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
                  <LuCheckSquare className="text-blue-600 text-xs" />
                </div>
                <span className="text-white">Gratis Domain</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
                  <LuCheckSquare className="text-blue-600 text-xs" />
                </div>
                <span className="text-white">Gratis Hosting 1 GB</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
                  <LuCheckSquare className="text-blue-600 text-xs" />
                </div>
                <span className="text-white">Gratis Email Bisnis</span>
              </li>
            </ul>
            
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-xl py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Detail Sekarang
            </Button>
          </div>
          
          {/* Professional Package */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">Profesional</span>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🏆</span>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Price Contact</h2>
              <p className="text-gray-500 mb-8">Solusi enterprise</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">10 - 30 Halaman</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">15 Hari Pengerjaan</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">Gratis Domain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">Gratis Hosting 1 GB</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <LuCheckSquare className="text-white text-xs" />
                  </div>
                  <span className="text-gray-700">Gratis Email Bisnis</span>
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                Detail Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${PoppinsFont.className} py-20 bg-gradient-to-br from-gray-50 to-blue-50`}>
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium mb-4">
              🎨 Karya Kami
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              PORTOFOLIO
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sasfy perusahaan pembuatan software terdepan, menawarkan berbagai
              macam solusi perangkat lunak yang dirancang untuk memenuhi kebutuhan
              bisnis dari berbagai skala.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src={"/img/porto-sasfy-1.png"}
                  width={500}
                  height={300}
                  sizes="100vh"
                  alt="Registrasi Pertamina"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Web App</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Form System</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Registrasi Form Pertamina
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Aplikasi Registration Form Pertamina adalah platform digital
                  untuk mendaftar ke acara atau program yang diselenggarakan oleh
                  Pertamina dengan interface yang user-friendly.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Live Project</span>
                  </div>
                  <Button 
                    onClick={() => openModal('pertamina')}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <Image
                  src={"/img/porto-sasfy-3.png"}
                  width={500}
                  height={300}
                  sizes="100vh"
                  alt="Sasfy Dev"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">Company Profile</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">Modern Design</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Sasfy Dev
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Website company profile Sasfy dengan desain modern dan responsif,
                  menampilkan layanan dan portofolio perusahaan dengan tampilan yang
                  profesional dan menarik.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Live Project</span>
                  </div>
                  <Button 
                    onClick={() => openModal('sasfy')}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${PoppinsFont.className} py-20`}>
        <div className="container px-4">
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-32 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-1500"></div>
              </div>
            </div>
            
            <div className="relative z-10 py-16 px-8 text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8">
                🚀 Siap Memulai?
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Tertarik untuk Membuat 
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Website Impian Anda?
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Kami berkomitmen untuk menyediakan solusi perangkat lunak yang
                berkualitas tinggi dan terjangkau yang dapat membantu Anda mencapai
                potensi penuh Anda.
                <br /><br />
                Hubungi kami hari ini untuk mengetahui bagaimana kami dapat
                membantu Anda mencapai kesuksesan digital.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={"https://wa.me/+6281911506190"}>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <FaWhatsapp className="text-xl text-green-500" />
                    Konsultasi Gratis
                  </Button>
                </Link>
                
                <Button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                  Lihat Portofolio
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Detail Modal */}
      {isModalOpen && selectedPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {portfolioData[selectedPortfolio].title}
                  </h2>
                  <p className="text-blue-100 mt-1">{portfolioData[selectedPortfolio].category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  <IoClose className="text-2xl text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={portfolioData[selectedPortfolio].images[0]}
                  alt={portfolioData[selectedPortfolio].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      {portfolioData[selectedPortfolio].status}
                    </span>
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                      {portfolioData[selectedPortfolio].year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Project Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <FaCalendarAlt className="text-blue-600" />
                      <span className="font-semibold text-gray-800">Durasi</span>
                    </div>
                    <p className="text-gray-700">{portfolioData[selectedPortfolio].duration}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <FaUsers className="text-purple-600" />
                      <span className="font-semibold text-gray-800">Tim</span>
                    </div>
                    <p className="text-gray-700">{portfolioData[selectedPortfolio].team}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <FaClock className="text-green-600" />
                      <span className="font-semibold text-gray-800">Klien</span>
                    </div>
                    <p className="text-gray-700">{portfolioData[selectedPortfolio].client}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Deskripsi Proyek</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {portfolioData[selectedPortfolio].description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fitur Utama</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {portfolioData[selectedPortfolio].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Teknologi yang Digunakan</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData[selectedPortfolio].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-full text-sm font-medium border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 mb-3">🎯 Tantangan</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {portfolioData[selectedPortfolio].challenges}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3">💡 Solusi</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {portfolioData[selectedPortfolio].solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
                  <h4 className="font-bold text-blue-800 mb-3">📈 Hasil & Impact</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {portfolioData[selectedPortfolio].results}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  {/* <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                    <FaExternalLinkAlt className="text-sm" />
                    Lihat Live Demo
                  </Button>
                  <Button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                    <FaGithub className="text-lg" />
                    Source Code
                  </Button> */}
                  <Link href="https://wa.me/+6281911506190" className="flex-1">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                      <FaWhatsapp className="text-lg" />
                      Diskusi Proyek
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
