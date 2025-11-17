import Button from "@/components/Button";
import Title from "@/components/Title";
import { Check, Lock } from "lucide-react";


export default function Pricing() {
  const plans = [
    {
      name: "Essentiel",
      price: "490€",
      highlight: false,
      features: [
        "Site vitrine 1 page professionnelle",
        "Design moderne et responsive",
        "Optimisation SEO de base",
        "Formulaire de contact intégré",
        "Mise en ligne clé en main",
      ],
      note: "Parfait pour indépendants, artisans et petites structures cherchant une présence simple et efficace.",
      buttonColor: "bg-primary text-white hover:bg-primary/90",
      border: "border-gray-200",
    },
    {
      name: "Avancé",
      price: "690€",
      highlight: true,
      badge: "Recommandé",
      features: [
        "Jusqu'à 5 pages (Accueil, À propos, Services, Contact, Blog)",
        "Design moderne et responsive",
        "SEO renforcé sur l'ensemble du site",
        "Formulaire de contact intégré",
        "Page actualités / blog",
        "Mise en ligne clé en main",
      ],
      note: "Idéal pour commerces, PME et associations souhaitant un site évolutif et riche en contenu.",
      buttonColor: "bg-primary text-white hover:bg-primary/90",
      border: "border-primary",
    },
    {
      name: "Performance",
      price: "à partir de 890€",
      highlight: false,
      features: [
        "Toutes les fonctionnalités du plan « Avancé »",
        "Modules complémentaires (réservations, rendez-vous, CRM, etc.)",
        "Catalogue produits",
        "Intégration CRM & emailings",
        "Autres modules sur-mesure",
      ],
      note: "Pour entreprises nécessitant un site complet avec fonctionnalités avancées ou métiers spécifiques.",
      buttonColor: "bg-primary text-white hover:bg-primary/90",
      border: "border-gray-300",
    },
  ];

  return (
    <section id="pricing" className="section-padding flex justify-center">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <Title text1="Nos " text2="Formules"/>


        {/* Pricing Cards */}
        <div data-aos="fade-up" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`
                relative bg-white rounded-2xl p-8 border ${plan.border}
                 transition-all duration-300 flex flex-col justify-between
              `}
            >
              <div>
                {/* Badge */}
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>

              <div className="mt-4 flex items-end">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="ml-1 text-sm opacity-70">HT</span>
              </div>

              <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">
                {plan.description}
              </p>

              {/* Feature list */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary text-xl"><Check /></span>
                    <span className="text-gray-700 text-sm leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Note box */}
              <div className="mt-6 p-3 bg-primary/5 text-gray-700 text-sm rounded-lg border border-primary/10">
                {plan.note}
              </div>
              </div>

              {/* Button */}
              <Button
              isBookCallButton={true}
                className={`${plan.buttonColor} w-full  mt-8`}
              >
                Choisir cette formule
              </Button>
            </div>
          ))}
        </div>

        {/* Maintenance box */}
        <div data-aos="fade" className="mt-16 flex justify-center">
          <div className="max-w-xl w-full border border-primary/40 bg-primary/5 rounded-2xl p-6">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl"><Lock /></span>
              <h3 className="text-xl font-semibold">Maintenance & Hébergement</h3>
            </div>

            <p className="text-primary mt-1 font-semibold text-lg">
              10 €/mois <span className="text-sm font-normal text-gray-600">HT</span>
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Hébergement sécurisé 24h/24</li>
              <li>• Sauvegardes régulières</li>
              <li>• Suivi technique & mises à jour incluses</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
