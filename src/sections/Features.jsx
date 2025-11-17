"use client"

import { Palette, Smartphone, Code, Zap } from 'lucide-react';
import Button from '@/components/Button';
import Title from '@/components/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function FeaturesCarousel() {
  const features = [
    {
      icon: <Palette className="w-16 h-16" />,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      title: "Un design moderne entièrement personnalisé",
      description: "Nous n'utilisons pas de templates pré-définis. S'il y a des sites que vous adorez, n'hésitez pas à nous les partager pour que l'on puisse s'en inspirer !"
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Un site qui vous ressemble",
      description: "Votre site arbore votre logo, vos couleurs, vos photos et le contenu de votre choix. Si vous avez une charte graphique, nous nous y conformons."
    },
    {
      icon: <Zap className="w-16 h-16" />,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      title: "Adapté à tous supports",
      description: "Votre site est responsive : adapté à la fois pour une lecture sur ordinateur, mobile et tablette. L'expérience de vos visiteurs est optimale quelque soit leur appareil !"
    },
    {
      icon: <Code className="w-16 h-16" />,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Un site performant",
      description: "Pas besoin d'être développeur pour tout faire sur votre site. Vous n'aurez pas besoin du code ou de compétences fastidieuses !"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-main mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <Title text1="Les points forts de " text2="votre nouveau site"/>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            // pagination={{
            //   clickable: true,
            //   el: '.swiper-pagination-custom',
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className=""
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="h-[400px]">
                  <div className="bg-white rounded-xl px-8 py-12 transition-all duration-300  border border-gray-200 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl ${feature.iconBg} flex items-center justify-center ${feature.iconColor}`}>
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-0 translate-x-1/2 cursor-pointer top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full transition-all duration-300 flex items-center justify-center group border border-gray-200 hover:border-primary"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-[#0081cf] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="swiper-button-next-custom absolute right-0 -translate-x-1/2 cursor-pointer top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full transition-all duration-300 flex items-center justify-center group border border-gray-200 hover:border-primary"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-[#0081cf] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button>
            Réserver un appel
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet:hover {
          background: #9ca3af;
          transform: scale(1.2);
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: #0081cf;
        }
      `}</style>
    </section>
  );
}