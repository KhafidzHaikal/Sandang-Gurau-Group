"use client"

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLocationSharp, IoArrowForward, IoClose } from "react-icons/io5";
import { FaWhatsapp, FaLeaf, FaHeart, FaShieldAlt } from "react-icons/fa";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function JofitPage() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<main className="overflow-x-hidden">
			<Navbar />
			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
				{/* Background Gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
				
				{/* Floating Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-200/25 rounded-full blur-2xl animate-bounce"></div>
				</div>

				<div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
					<div className="space-y-8">
						{/* Badge */}
						<div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium shadow-lg">
							🐄 Peternakan Berkualitas Premium
						</div>
						
						{/* Main Heading */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
							<span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
								Sapi Berkualitas?
							</span>
							<br />
							<span className="text-gray-800">
								Jofit Farm Solusinya!
							</span>
						</h1>
						
						{/* Description */}
						<p className="text-lg text-gray-600 leading-relaxed max-w-xl">
							Kami percaya bahwa ternak yang sehat akan menghasilkan produk yang
							sehat pula, dan itulah yang menjadi dasar komitmen kami setiap hari.
						</p>
						
						{/* Features */}
						<div className="flex flex-wrap gap-4">
							<div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
								<FaLeaf className="text-green-500" />
								<span className="text-sm font-medium text-gray-700">Organik</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
								<FaHeart className="text-red-500" />
								<span className="text-sm font-medium text-gray-700">Sehat</span>
							</div>
							<div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
								<FaShieldAlt className="text-blue-500" />
								<span className="text-sm font-medium text-gray-700">Terpercaya</span>
							</div>
						</div>
						
						{/* CTA Button */}
						<Link href="https://wa.me/6281292702020">
							<Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
								Selengkapnya
								<IoArrowForward className="text-xl" />
							</Button>
						</Link>
					</div>
					
					{/* Hero Image */}
					<div className="relative">
						<div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
							<Image
								src="/img/jumbotron-sapi.png"
								width={700}
								height={700}
								alt="Sapi Jofit Farm"
								className="w-full h-auto drop-shadow-2xl"
							/>
						</div>
						{/* Decorative Elements */}
						<div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
						<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-15 animate-bounce"></div>
					</div>
				</div>
			</section>
			{/* About Section */}
			<section className="py-20 bg-white relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-20 left-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-500 rounded-full blur-3xl"></div>
				</div>
				
				<div className="container relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Image */}
						<div className="relative order-2 lg:order-1">
							<div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
								<Image
									src="/img/sub-jumbotron-sapi.png"
									width={500}
									height={500}
									alt="Jofit Farm"
									className="w-full h-auto rounded-2xl"
								/>
								{/* Floating Badge */}
								<div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
									<span className="font-bold text-sm">🏆 Premium Quality</span>
								</div>
							</div>
						</div>
						
						{/* Content */}
						<div className="space-y-8 order-1 lg:order-2">
							<div>
								<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium mb-6">
									🌱 Tentang Kami
								</div>
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
									Apa itu{" "}
									<span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
										Jofit Farm?
									</span>
								</h2>
							</div>
							
							<p className="text-lg text-gray-600 leading-relaxed">
								Jofit Farm berlokasi di Kabupaten Kulon Progo yang merupakan
								pertenakan sapi yang berkomitmen untuk menghadirkan produk ternak
								berkualitas tinggi melalui proses pemeliharaan yang tradisional,
								higienis, dan berkelanjutan.
							</p>
							
							<p className="text-lg text-gray-600 leading-relaxed">
								Dengan mengutamakan kesehatan hewan dan kualitas lingkungan, kami 
								membudidayakan sapi dengan standar terbaik untuk menghasilkan daging 
								dan susu yang sehat, segar, dan aman dikonsumsi.
							</p>
							
							{/* Location */}
							<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
										<IoLocationSharp className="text-white text-xl" />
									</div>
									<div>
										<p className="font-bold text-gray-800">Lokasi Peternakan</p>
										<p className="text-gray-600">Kab. Kulon Progo, Yogyakarta, Indonesia</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Gallery Section */}
			<section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
				<div className="container relative z-10">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium mb-6">
							📸 Galeri Sapi
						</div>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
							<span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
								Penasaran
							</span>{" "}
							Sapi di Jofit Farm Seperti Apa?
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Berikut beberapa foto sapi-sapi berkualitas yang ada di Jofit Farm.
							Setiap sapi dipelihara dengan standar terbaik untuk kesehatan optimal.
						</p>
					</div>
					
					{/* Gallery Grid */}
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
						{[
							"/img/sapi-1.png",
							"/img/sapi-7.jpg",
							"/img/sapi-2.png",
							"/img/sapi-3.png",
							"/img/sapi-6.png",
							"/img/sapi-4.png",
							"/img/sapi-5.png",
							"/img/sapi-8.png",
							"/img/sapi-9.png",
							"/img/sapi-10.jpg"
						].map((src, index) => (
							<div
								key={index}
								className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
								onClick={() => setSelectedImage(src)}
							>
								<div className="aspect-square relative overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
									<Image
										src={src}
										width={300}
										height={300}
										alt={`Sapi ${index + 1}`}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									{/* Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									{/* Hover Text */}
									<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<p className="text-sm font-semibold">Sapi Premium #{index + 1}</p>
										<p className="text-xs text-gray-200">Klik untuk memperbesar</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className="py-20 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600"></div>
				
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
					<div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
					<div className="absolute bottom-20 left-32 w-20 h-20 bg-white rounded-full animate-pulse delay-500"></div>
					<div className="absolute bottom-32 right-10 w-40 h-40 bg-white rounded-full animate-pulse delay-1500"></div>
				</div>
				
				<div className="container relative z-10">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Content */}
						<div className="space-y-8">
							<div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
								🤝 Mari Berkolaborasi
							</div>
							
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
								<span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
									Tertarik untuk Membeli
								</span>
								<br />
								Sapi Kami?
							</h2>
							
							<p className="text-lg md:text-xl text-white/90 leading-relaxed">
								Hubungi kami untuk informasi lebih lanjut. Kami siap melayani Anda dengan
								sepenuh hati dan memberikan sapi berkualitas terbaik.
							</p>
							
							{/* Features List */}
							<div className="space-y-4">
								<div className="flex items-center gap-3 text-white">
									<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
									<span>Konsultasi gratis untuk pemilihan sapi</span>
								</div>
								<div className="flex items-center gap-3 text-white">
									<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
									<span>Garansi kesehatan sapi</span>
								</div>
								<div className="flex items-center gap-3 text-white">
									<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
									<span>Layanan antar ke seluruh Indonesia</span>
								</div>
							</div>
							
							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="https://wa.me/6281292702020">
									<Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
										<FaWhatsapp className="text-xl" />
										Hubungi Kami
									</Button>
								</Link>
								<Button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
									Lihat Katalog
								</Button>
							</div>
						</div>
						
						{/* Image */}
						<div className="relative">
							<div className="relative transform hover:scale-105 transition-transform duration-500">
								<Image
									src="/img/sapi-11.png"
									width={500}
									height={500}
									alt="Sapi Premium Jofit Farm"
									className="w-full h-auto drop-shadow-2xl"
								/>
							</div>
							{/* Floating Stats */}
							<div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
								<div className="text-center">
									<div className="text-2xl font-bold text-green-600">100+</div>
									<div className="text-sm text-gray-600">Sapi Sehat</div>
								</div>
							</div>
							<div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
								<div className="text-center">
									<div className="text-2xl font-bold text-green-600">5+</div>
									<div className="text-sm text-gray-600">Tahun Pengalaman</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Image Modal */}
			{selectedImage && (
				<div 
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
					onClick={() => setSelectedImage(null)}
				>
					<div className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl">
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
						>
							<IoClose className="text-2xl" />
						</button>
						<Image
							src={selectedImage}
							width={800}
							height={600}
							alt="Sapi Detail"
							className="w-full h-auto max-h-[90vh] object-contain"
						/>
					</div>
				</div>
			)}

            <Footer />
		</main>
	);
}
