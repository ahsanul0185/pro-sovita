"use client";

import { useState, useEffect } from "react";
import Button from "../components/Button";
import {motion} from "motion/react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of your website images - replace these paths with your actual images
  const slides = [
    "/hero-images/site-preview-1.png",
    "/hero-images/site-preview-2.png",
    "/hero-images/site-preview-3.png",
    "/hero-images/site-preview-4.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20 md:pt-12">
      {/* Animated Blur Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/30 rounded-full blur-[120px] animate-blob"></div>
        {/* <div className="absolute top-72 -right-20 w-96 h-96 bg-primary/30 rounded-full blur-[130px] animate-blob animation-delay-2000"></div> */}
        {/* <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div> */}
      </div>

      <div className="relative z-10 max-w-main default-padding mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div  className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
              Votre site web professionnel,
              <br />
              <span className="text-primary italic font-serif">
                sans vous ruiner
              </span>
              .
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Nous accompagnons commerces, PME, indépendants, associations, avec
              des sites modernes, performants et abordables.
            </p>

            <Button isBookCallButton={true}>Demander un RDV conseil</Button>

            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm">
                En novembre, disponibilité restante pour{" "}
                <span className="font-semibold text-gray-900">3 sites</span>
              </span>
            </div>
          </div>

          {/* Right Content - Browser Mockup with Image Slider */}
          <div data-aos="fade-left" className="relative">
            <div className="relative transform transition-transform duration-500">
              {/* Browser Mockup Container */}
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Browser Chrome - Improved */}
                <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-3 border-b border-gray-300">
                  <div className="flex items-center gap-3">
                    {/* Traffic Light Buttons */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    </div>

                    {/* URL Bar */}
                    <div className="flex-1 bg-white rounded-md px-4 py-1.5 flex items-center gap-2 shadow-inner">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="text-xs text-gray-600 font-medium">
                        www.votre-site.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Slider Container */}
                <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={slide}
                        alt={`Website preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Slide Indicators */}
                  {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div> */}
                </div>
              </div>

              {/* Decorative Shadow */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
