"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

function NavBar() {
    const pathname = usePathname()?.slice(1)
    const leftLink = pathname === 'projects' ? { text: 'Home', link: '' } : { text: 'Projects', link: 'projects' }
    const rightLink = pathname === 'contact' ? { text: 'Home', link: '' } : { text: 'Contact Me', link: 'contact' }
    return (
        <nav className={pathname}>
            <Link className={`${pathname}SubLink`} href={`/${leftLink.link}`}>
                {leftLink.text}
            </Link>
            <Link className={`${pathname}MainLink`} href="/">
                Luke J. Lackey
            </Link>
            <Link className={`${pathname}SubLink`} href="/contact">
                Contact Me
            </Link>
        </nav>
    )
}

export default NavBar
