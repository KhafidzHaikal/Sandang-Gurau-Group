import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Josefin_Sans } from "next/font/google";

const Josefin = Josefin_Sans({ subsets: ["latin"] });


export default function Navbar() {
  return (
    <nav className='absolute container top-0 mx-auto py-2 flex justify-between items-center'>
        <Image 
            src={"/img/logo.png"}
            width={150}
            height={150}
            sizes='100vh'
            alt='Sandang Gurau'
            className='ml-14'
        />
        <ul className={`${Josefin.className} flex gap-10`}>
            <li>
                <Link href={""}>Home</Link>
            </li>
            <li>
                <Link href={""}>Video</Link>
            </li>
            <li>
                <Link href={""}>Product</Link>
            </li>
            <li>
                <Link href={""}>About Us</Link>
            </li>
        </ul>
    </nav>
  )
}
