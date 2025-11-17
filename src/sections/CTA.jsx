

export default function CTA() {
    return <section className="bg-[#010101] section-padding">
 {/* Subtle gradient accents */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 pointer-events-none" />

  <div className="max-w-5xl mx-auto text-center px-6 relative">
    
    <h1 className="text-4xl md:text-6xl font-light text-white leading-snug">
      Prêt à <span className="text-primary-light italic font-serif">lancer</span> votre site ?
    </h1>

    <p className="mt-6 text-lg text-gray-400">
      Rejoignez les entrepreneurs qui nous font confiance pour développer leur présence en ligne.
    </p>

    {/* Founder block */}
    <div className="mt-10 flex items-center justify-center gap-4">
      <p className="text-gray-300">Réservez votre appel avec</p>

      <div className="flex -space-x-2">
        <img src="https://mockmind-api.uifaces.co/content/human/222.jpg" className="w-10 h-10 rounded-full border border-white/10" />
        <img src="https://mockmind-api.uifaces.co/content/human/97.jpg" className="w-10 h-10 rounded-full border border-white/10" />
      </div>

      <p className="text-gray-300">Damien & Charles, co-fondateurs</p>
    </div>

    {/* Features */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left mx-auto w-fit">
      <Feature text="Livraison moyenne 5 à 10 jours" />
      <Feature text="Site clé-en-main" />
      <Feature text="Design moderne et professionnel" />
      <Feature text="Pas de frais cachés" />
    </div>
  </div>
    </section>
}


const Feature = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 rounded-full bg-primary-light"></div>
    <span className="text-gray-300">{text}</span>
  </div>
);
