/* eslint-disable @next/next/no-head-element */

import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "../public/assets/img/github.png"
import LinkedInIcon from "../public/assets/img/linkedin.png"
import { Tourney, Grenze_Gotisch } from '@next/font/google';
import "../styles/globals.css"

const tourney = Tourney({ weight: '900', subsets: ['latin'] });
const grenze_gotisch = Grenze_Gotisch({ weight: '100', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header className={tourney.className}>
          <nav>
            <Link className="subLink" href="/projects">
              Projects
            </Link>
            <Link className="mainLink" href="/">
              Luke J. Lackey
            </Link>
            <Link className="subLink" href="/contact">
              Contact Me
            </Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Link href="https://github.com/lukejlackey" target='_blank'>
            <Image
              className="socialIcon"
              src={GitHubIcon}
              width={25}
              height={25}
              alt="GitHub Icon"
            />
          </Link>
          <p className={`madeBy ${grenze_gotisch.className}`}>Made by Luke Lackey</p>
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
      </body>
    </html>
  );
}
