// components/FAQSection.jsx
"use client";
import Title from "@/components/Title";
import { useState } from "react";

export default function FAQs() {
  const faqs = [
    {
      question: "Combien de temps pour créer un site ?",
      answer:
        "En moyenne, nous livrons votre site en 10 jours ouvrés. Pour la formule Essentielle, c'est généralement 5-7 jours, et pour la formule Avancée, 7-14 jours selon la complexité.",
    },
    {
      question: "Puis-je modifier mon site ensuite ?",
      answer:
        "Absolument ! Nous vous livrons un site clé en main, mais nous créons un espace sécurisé avec mot de passe pour modifier les éléments courants (horaires, blog, etc.). Pour les modifications importantes, un devis sera nécessaire.",
    },
    {
      question: "Est-ce adapté si je n'ai aucune compétence technique ?",
      answer:
        "Oui ! Nous nous occupons de tout : création, mise en ligne, configuration. Aucune compétence technique n’est requise.",
    },
    {
      question: "Que se passe-t-il après la livraison ?",
      answer:
        "Nous proposons un service de maintenance à 10€/mois incluant hébergement, sauvegardes, mises à jour et support technique.",
    },
    {
      question: "Puis-je voir des exemples de sites créés ?",
      answer:
        "Oui, nous vous montrerons notre portfolio lors de l'appel de découverte.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full section-padding flex justify-center">
      <div className="max-w-4xl w-full">
        <Title text1="Foire aux " text2="Questions" />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-5  transition-all"
              onClick={() => toggleFAQ(idx)}
            >
              <button
                className="w-full flex justify-between items-center text-left"
                
              >
                <span className="text-lg">{faq.question}</span>

                <div
                  className={`
                    relative w-6 h-6 flex items-center justify-center
                    transition-transform duration-300
                    ${openIndex === idx ? "rotate-180" : "rotate-0"}
                  `}
                >
                  {/* Horizontal line (always visible) */}
                  <span className="absolute w-5 h-[2px] bg-primary rounded-full"></span>

                  {/* Vertical line (fades out on open) */}
                  <span
                    className={`
                      absolute h-5 w-[2px] bg-primary rounded-full transition-all duration-300
                      ${openIndex === idx ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                    `}
                  ></span>
                </div>
              </button>

              {/* Answer container */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === idx ? "max-h-40 mt-3" : "max-h-0"}
                `}
              >
                <p className="text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
