import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/footer";

export default function JofitPage() {
	return (
		<main className="">
			<Navbar />
			<section className="h-screen flex items-center justify-center sm:justify-between container mt-2 sm:mt-0">
				<div className="absolute h-96 w-9/12 lg:h-[521px] lg:w-[512px] opacity-50 -z-50"></div>
				<div className="absolute right-0 opacity-15">
					<Image
						src={"/img/ornament.png"}
						width={100}
						height={100}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
				<div className="">
					<h1 className={` text-[40px] lg:text-[64px] font-bold`}>
						Sapi Berkualitas? <br />
						Jofit Farm Solusinya!
					</h1>
					<p className={`text-md mt-4 mb-10 pr-7`}>
						Kami percaya bahwa ternak yang sehat akan menghasilkan produk yang
						sehat pula, dan itulah yang menjadi dasar komitmen kami setiap hari.
					</p>
					<Link
						href={"https://wa.me/6281292702020"}
						className={`py-3 px-10  border-2 mt-4 bg-black text-white rounded-xl hover:text-black hover:bg-white hover:border-black`}>
						Selengkapnya
					</Link>
				</div>
				<div className="hidden md:flex">
					<Image
						src={"/img/jumbotron-sapi.png"}
						width={700}
						height={700}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
			</section>
			<section className="flex items-center justify-center sm:justify-between container mt-2 sm:mt-0 gap-8 py-8">
				<div className="absolute left-0 opacity-15">
					<Image
						src={"/img/ornament.png"}
						width={100}
						height={100}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
				<div className="hidden md:flex">
					<Image
						src={"/img/sub-jumbotron-sapi.png"}
						width={500}
						height={500}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
				<div className="w-full md:w-3/4">
					<h1 className={` text-[24px] lg:text-[40px] font-bold`}>
						Apa itu{" "}
						<span className="bg-black py-1 px-4 rounded-l-lg rounded-r-full text-white">
							Jofit Farm?
						</span>
					</h1>
					<p className={`text-md mt-4 mb-10 pr-7`}>
						Jofit Farm berlokasi di Kabupaten Kulon Progo yang merupakan
						pertenakan sapi yang berkomitmen untuk menghadirkan produk ternak
						berkualitas tinggi melalui proses pemeliharaan yang tradisional,
						higienis, dan berkelanjutan. Dengan mengutamakan kesehatan hewan dan
						kualitas lingkungan, kami membudidayakan sapi dengan standar terbaik
						untuk menghasilkan daging dan susu yang sehat, segar, dan aman
						dikonsumsi.
					</p>
					<p className="flex items-center font-bold gap-2">
						{" "}
						<IoLocationSharp className="text-xl" />
						Kab. Kulon Progo, Yogyakarta, Indonesia
					</p>
				</div>
			</section>
			<section className=" container mt-2 sm:mt-0 gap-8 py-8">
				<div className="absolute left-0 opacity-15">
					<Image
						src={"/img/ornament.png"}
						width={100}
						height={100}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
				<div className="">
					<h1 className={` text-[24px] lg:text-[40px] font-bold`}>
						<span className="bg-black py-1 px-4 rounded-l-lg rounded-r-full text-white mr-2">
							Penasaran
						</span>
						Sapi di Jofit Farm Seperti Apa?
					</h1>
					<p className={`text-md mt-4 mb-10 pr-7`}>
						Berikut beberapa foto sapi-sapi yang ada di Jofit Farm.
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
					<Image
						src={"/img/sapi-1.png"}
						width={300}
						height={300}
						sizes="100vh"
						alt="Image 1"
					/>
					<Image
						src="/img/sapi-7.jpg"
						width={260}
						height={348}
						alt="Sapi 6"
						className="w-[260px] h-[348px] object-cover border border-[#222124] rounded-md"
					/>
					<Image
						src={"/img/sapi-2.png"}
						width={300}
						height={300}
						sizes="100vh"
						alt="Image 1"
					/>
					<Image
						src={"/img/sapi-3.png"}
						width={300}
						height={300}
						sizes="100vh"
						alt="Image 1"
					/>
					<Image
						src="/img/sapi-6.png"
						width={260}
						height={348}
						alt="Sapi 6"
						className="w-[260px] h-[348px] object-cover border border-[#222124] rounded-md"
					/>
					<Image
						src={"/img/sapi-4.png"}
						width={300}
						height={300}
						sizes="100vh"
						alt="Image 1"
					/>
					<Image
						src={"/img/sapi-5.png"}
						width={300}
						height={300}
						sizes="100vh"
						alt="Image 1"
					/>
					<Image
						src="/img/sapi-8.png"
						width={260}
						height={348}
						alt="Sapi 6"
						className="w-[260px] h-[348px] object-cover border border-[#222124] rounded-md"
					/>
					<Image
						src="/img/sapi-9.png"
						width={260}
						height={348}
						alt="Sapi 6"
						className="w-[260px] h-[348px] object-cover border border-[#222124] rounded-md"
					/>
					<Image
						src="/img/sapi-10.jpg"
						width={260}
						height={348}
						alt="Sapi 6"
						className="w-[260px] h-[348px] object-cover border border-[#222124] rounded-md"
					/>
				</div>
			</section>
			<section className="flex items-center justify-center sm:justify-between container mt-2 sm:mt-0 gap-8 py-32">
				<div className="absolute right-0 opacity-15">
					<Image
						src={"/img/ornament.png"}
						width={100}
						height={100}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
				<div className="w-full md:w-1/2">
					<h1 className={` text-[24px] lg:text-[40px] font-bold`}>
						<span className="bg-black py-1 px-4 rounded-l-lg rounded-r-full text-white">
							Tertarik untuk Membeli
						</span>
						<br />
						Sapi Kami?
					</h1>
					<p className={`text-md mt-4 mb-10 pr-7`}>
						Hubungi kami untuk informasi lebih, kami siap melayani anda dengan
						sepenuh hati.
					</p>
					<Link
						href={"https://wa.me/6281292702020"}
						className={`flex items-center gap-4 w-1/3 justify-center py-1 px-8 border-2 mt-4 bg-black text-white rounded-xl hover:text-black hover:bg-white hover:border-black`}>
						Hubungi Kami
						<FaWhatsapp />
					</Link>
				</div>
				<div className="hidden md:flex">
					<Image
						src={"/img/sapi-11.png"}
						width={500}
						height={500}
						sizes="100vh"
						alt="Image 1"
					/>
				</div>
			</section>
            <Footer />
		</main>
	);
}
