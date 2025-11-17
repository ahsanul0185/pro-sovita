"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { X } from "lucide-react";

export default function MobileMenu({open, toggleMenu}) {
  return (

      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white shadow-xl z-50 p-8 flex flex-col gap-6 ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >

      <button
        className="md:hidden absolute top-5 right-5 cursor-pointer"
        onClick={toggleMenu}
      >
        <X />
      </button>

        <nav className="flex flex-col gap-6 text-lg mt-12">
          <Link
            onClick={toggleMenu}
            href="#process"
            className="text-gray-700 hover:text-primary"
          >
            Processus
          </Link>
          <Link
            onClick={toggleMenu}
            href="#pricing"
            className="text-gray-700 hover:text-primary"
          >
            Nos Formules
          </Link>
          <Link
            onClick={toggleMenu}
            href="#faqs"
            className="text-gray-700 hover:text-primary"
          >
            FAQ
          </Link>
        </nav>

        <div className="pt-6">
          <Button isBookCallButton={true} onClick={toggleMenu}>
            Demander un RDV conseil
          </Button>
        </div>
    </div>
  );
}
