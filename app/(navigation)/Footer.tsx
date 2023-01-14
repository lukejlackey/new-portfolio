"use client"
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import GitHubIcon from "../../public/assets/img/github.png"
import LinkedInIcon from "../../public/assets/img/linkedin.png"
import { usePathname } from 'next/navigation';
import { Josefin_Sans } from '@next/font/google';


const josefin_sans = Josefin_Sans({ weight: '300', subsets: ['latin'] });

function Footer() {
    const pathname = usePathname()?.slice(1)
    return (
        <footer className={pathname}>
            <Link href="https://github.com/lukejlackey" target='_blank'>
                <Image
                    className="socialIcon"
                    src={GitHubIcon}
                    width={25}
                    height={25}
                    alt="GitHub Icon"
                />
            </Link>
            <p className={`madeBy ${josefin_sans.className}`}>Made by Luke Lackey</p>
            <Link href="https://www.linkedin.com/in/lukejlackey/" target='_blank'>
                <Image
                    className="socialIcon"
                    src={LinkedInIcon}
                    width={25}
                    height={25}
                    alt="LinkedIn Icon"
                />
            </Link>
        </footer>
    )
}

export default Footer