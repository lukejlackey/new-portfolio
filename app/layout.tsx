/* eslint-disable @next/next/no-head-element */

import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "../public/assets/img/github.png"
import LinkedInIcon from "../public/assets/img/linkedin.png"
import { Tourney } from '@next/font/google';
import "../styles/globals.css"
import NavBar from "./(navigation)/NavBar";
import Footer from "./(navigation)/Footer";

const tourney = Tourney({ weight: '900', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header className={tourney.className}>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
