"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { TextAlignJustify } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);


  return (
    <div className="sticky top-0 bg-white backdrop-blur-3xl w-full z-50 border-b border-gray-200">
      <div className="max-w-main mx-auto default-padding flex items-center justify-between gap-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={150} height={100} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          <Link
            className="text-gray-600 hover:text-primary duration-300"
            href="#process"
          >
            Processus
          </Link>
          <Link
            className="text-gray-600 hover:text-primary duration-300"
            href="#pricing"
          >
            Nos Formules
          </Link>
          <Link
            className="text-gray-600 hover:text-primary duration-300"
            href="#faqs"
          >
            FAQ
          </Link>
        </ul>

        {/* Desktop button */}
        <div className="hidden md:block">
          <Button isBookCallButton={true}>
            Réserver un appel
          </Button>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 cupo"
          onClick={toggleMenu}
        >
          <TextAlignJustify />
        </button>

        <MobileMenu open={open} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
