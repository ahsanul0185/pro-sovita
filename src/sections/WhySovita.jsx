"use client"

import Title from '@/components/Title';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayValue(Math.min(Math.round(increment * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function WhySovita() {
  const stats = [
    { value: 30, label: "sites créés", prefix: "+" },
    { value: 10, label: "délai de livraison moyen", suffix: " jours" },
    { value: "Aucun", label: "frais caché", isText: true }
  ];

  const projects = [
    {
      url: "www.uslatinodance.fr",
      image: "/hero-images/site-preview-2.png",
      category: "LOISIRS & CULTURE",
      title: "Prestataire danse et spectacle pour événements et entreprises",
      bgColor: "from-purple-900 to-pink-900"
    },
    {
      url: "novakairos.com",
      image: "/hero-images/site-preview-3.png",
      category: "FINANCE",
      title: "Page de capture d'e-mails pour newsletter d'actualités sur les marchés financiers",
      bgColor: "from-teal-900 to-cyan-900"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="">
         <Title text1="Pourquoi choisir " text2="Sovita ?"/>
        </div>

        

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                {stat.isText ? (
                  stat.value
                ) : (
                  <AnimatedNumber 
                    value={stat.value} 
                    prefix={stat.prefix || ""} 
                    suffix={stat.suffix || ""} 
                  />
                )}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-3 border-b border-gray-300">
                <div className="flex items-center gap-3">
                  {/* Traffic Light Buttons */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  {/* URL Bar */}
                  <div className="flex-1 bg-white rounded-md px-4 py-1.5 flex items-center gap-2">
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
                      {project.url}
                    </span>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.bgColor}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm font-semibold text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Site réalisé par Calyra</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}