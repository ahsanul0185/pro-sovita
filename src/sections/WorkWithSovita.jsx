export default function WorkWithSovita() {
  const steps = [
    {
      number: "01",
      title: "Appel de découverte",
      description:
        "Nous discutons pendant 30 minutes avec vous pour évaluer vos besoins et répondre à vos questions concernant nos tarifs et nos services.",
    },
    {
      number: "02",
      title: "Contenu et apparence du site",
      description:
        "Nous vous envoyons un questionnaire à remplir avant la création de votre site. C’est le moment pour nous de recueillir un maximum de détails et d’illustrations afin que votre site corresponde le plus possible à celui de vos rêves.",
    },
    {
      number: "03",
      title: "Livraison de la version 1",
      description:
        "Sous 5 jours ouvrés, nous vous présentons la première version de votre site. Vous pouvez alors tout observer et nous transmettre vos modifications.",
    },
    {
      number: "04",
      title: "Livraison de la version finale",
      description:
        "Nous effectuons les corrections et ajustements nécessaires. Une fois validé, nous procédons à la mise en ligne de votre site et à la connexion de votre nom de domaine. Votre site est maintenant accessible à tous !",
    },
  ];


  return (
    <section id="process" className="relative section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Travailler avec{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r italic font-serif from-cyan-400 to-primary">
              Sovita
            </span>
            .
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Quelles sont les étapes ?
          </p>
        </div>

        {/* Steps */}
        <div className="relative font-light">
          {/* Vertical line */}
          {/* <div className="absolute left-8 md:left-12 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 opacity-30"></div> */}

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
              data-aos="fade-up"
                key={index}
                className="relative flex items-start gap-6 group"
              >
                {/* Step number circle */}
                <div className="relative flex-shrink-0 z-10">
                  {/* <div className="w-16 h-16 md:w-20 md:h-20 rounded-full  flex items-center justify-center transition-all duration-300">
                    <span className="text-xl md:text-4xl font-bold text-primary/80">{step.number}</span>
                  </div> */}

                  <div
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 ring-2 ring-primary/40 backdrop-blur-sm transition-all duration-300"
                  >
                    <span className="text-xl md:text-4xl font-bold text-white/80">
                      {step.number}
                    </span>
                  </div>

                  {/* Glow effect */}
                  {/* <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div> */}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 group-hover:border-primary-light/50 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl  text-white mb-3 group-hover:text-primary-light transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
